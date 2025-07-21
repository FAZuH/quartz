---
{"publish":true,"aliases":"VPS Initialization","cssclasses":""}
---


Upon reset/new instance of a server, we follow these steps to set it up:

1. Install apps
```bash
sudo apt-get update -y
sudo apt-get install -y ca-certificates curl neovim tmux ufw ranger net-tools
sudo update-alternatives --set editor /usr/bin/nvim

# RClone
sudo -v ; curl https://rclone.org/install.sh | sudo bash

# yt-dlp
mkdir -p /usr/local/bin
curl -L https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -o /usr/local/bin/yt-dlp
chmod a+rx /usr/local/bin/yt-dlp

# Install Docker
# Add Docker's official GPG key:
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Add the repository to Apt sources:
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update

apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
curl -fsSL https://tailscale.com/install.sh | shcurl -fsSL https://tailscale.com/install.sh | sh
reboot
```

2. Set up key-pair for authentication

Change `~/.ssh/id_ed25519_vps-0` to actual key filename, and `vps-0` to actual server address/config.

```
ssh-keygen -t ed25519 -f ~/.ssh/id_ed25519_vps-0 -C "mail@fazuh.com"
ssh-copy-id -i ~/.ssh/id_ed25519_vps-0 vps-0
```

3. Add/modify configs

```bash
# Disable password authentication
sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication no/' /etc/ssh/sshd_config.d/50-cloud-init.conf

systemctl restart ssh

timedatectl set-timezone Asia/Jakarta
```

4. Set up tailscale

**Setup**
```bash
curl -fsSL https://tailscale.com/install.sh | sh

echo "net.ipv4.ip_forward = 1
net.ipv6.conf.all.forwarding = 1" | tee /etc/sysctl.d/99-tailscale.conf

sysctl -p /etc/sysctl.d/99-tailscale.conf

# Improve UDP connectivity
NETDEV=$(ip -o route get 8.8.8.8 | cut -f 5 -d " ")
sudo ethtool -K $NETDEV rx-udp-gro-forwarding on rx-gro-list off

sudo mkdir -p /etc/networkd-dispatcher/routable.d
printf "#!/bin/sh\n\nethtool -K %s rx-udp-gro-forwarding on rx-gro-list off \n" "$(ip -o route get 8.8.8.8 | cut -f 5 -d " ")" | sudo tee /etc/networkd-dispatcher/routable.d/50-tailscale
sudo chmod 755 /etc/networkd-dispatcher/routable.d/50-tailscale

sudo /etc/networkd-dispatcher/routable.d/50-tailscale
test $? -eq 0 || echo "An error occurred."

# Add Tailscale's nameserver
sudo sed -i "s/^\(#\?\)DNS=.*/DNS=100.100.100.100/" /etc/systemd/resolved.conf
sudo systemctl restart systemd-resolved
sudo ln -sf /run/systemd/resolve/stub-resolv.conf /etc/resolv.conf

# Copy docker-tailscale startup service
sudo cp /opt/faz-lab/config/common/docker-tailscale-startup.service /etc/systemd/system/
sudo systemctl enable docker-tailscale-startup.service
```

**Start**
Set `$AUTH_KEY` to valid auth key
```bash
sudo tailscale up --login-server https://vpn.fazuh.com --advertise-exit-node --auth-key $AUTH_KEY
```

## Wazuh server & agents
We will use port 8443, because we often host a reverse proxy in the server. Otherwise, we omit the port option and use the default port (443). [^2]
```bash
curl -sO https://packages.wazuh.com/4.12/wazuh-install.sh && sudo bash ./wazuh-install.sh -a -p 8443 
```

To install Wazuh agents, [^1]
```bash
curl -s https://packages.wazuh.com/key/GPG-KEY-WAZUH | gpg --no-default-keyring --keyring gnupg-ring:/usr/share/keyrings/wazuh.gpg --import && chmod 644 /usr/share/keyrings/wazuh.gpg

echo "deb [signed-by=/usr/share/keyrings/wazuh.gpg] https://packages.wazuh.com/4.x/apt/ stable main" | tee -a /etc/apt/sources.list.d/wazuh.list

apt-get update

WAZUH_MANAGER="10.0.0.2" apt-get install wazuh-agent

systemctl daemon-reload
systemctl enable wazuh-agent
systemctl start wazuh-agent

echo "wazuh-agent hold" | dpkg --set-selections
```

> [!warning]
> wazuh-manager and wazuh-agent cannot be installed in the same machine.

We usually [enroll via Wazuh server API](https://documentation.wazuh.com/current/user-manual/agent/agent-enrollment/enrollment-methods/via-manager-API/) using the steps below below:

1. In the manager server, **generate a client key**

	`<user>` and `<password>` is Wazuh API account; usually `<user>` is "wazuh-wui". The credentials can be found in the manager server in `/usr/share/wazuh-dashboard/data/wazuh/config/wazuh.yml`.
	
	```bash
	USER=<user>
	PASSWORD=<password>
	WAZUH_MANAGER_IP_ADDRESS=<wazuh-manager-ip-address>
	WAZUH_AGENT_NAME=<wazuh-agent-name>
	
	TOKEN=$(curl -u $USER:$PASSWORD -k -X POST "https://$WAZUH_MANAGER_IP_ADDRESS:55000/security/user/authenticate?raw=true")
	
	curl -k -X POST -d "{\"name\":\"$WAZUH_AGENT_NAME\"}" \
	  "https://$WAZUH_MANAGER_IP_ADDRESS:55000/agents?pretty=true" \
	  -H "Content-Type:application/json" \
	  -H "Authorization: Bearer $TOKEN" | jq '.data.key'
	```
	
2. In agent server, **connect using the client key** [^5]

	Replace `<client-key>` with the key obtained from step 1.

	```bash
	CLIENT_KEY=<client-key>
	MANAGER_ADDRESS=<manager-address>
	
	/var/ossec/bin/manage_agents -i "$CLIENT_KEY"
	
	sed -i "s/<address>.*<\/address>/<address>YOUR_NEW_ADDRESS<\/address>/" /var/ossec/etc/ossec.conf
	systemctl restart wazuh-agent
	```

## Portainer server & environments
Portainer server may be installed on a manager server. To connect Portainer environments to this server, we usually follow the instructions given in the Portainer web UI when adding a new environment.

We usually install Portainer server using Docker compose config saved in `faz-lab` repository.

[^1]: https://documentation.wazuh.com/current/installation-guide/wazuh-agent/wazuh-agent-package-linux.html
[^2]: https://documentation.wazuh.com/current/quickstart.html#installing-wazuh
[^3]: https://documentation.wazuh.com/current/user-manual/agent/agent-enrollment/enrollment-methods/index.html
[^4]: https://www.tecmint.com/set-permanent-dns-nameservers-in-ubuntu-debian/

[^5]: https://documentation.wazuh.com/current/user-manual/agent/agent-enrollment/enrollment-methods/via-manager-API/importing-the-key.html
