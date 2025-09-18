---
{"publish":true,"aliases":["Creating Self-Signed Certificates using OpenSSL"],"created":"2025-08-15T13:53:58.611+07:00","modified":"2025-08-15T13:53:58.611+07:00","published":"2025-08-15T13:53:58.611+07:00","cssclasses":"","creation-time":"2025-07-16 23:35","status":"baby","tag":null,"parent":"[[cyber security]]"}
---



## 1. Create and trust root CA certificates
	
```bash
openssl req -x509 -newkey rsa:4096 -sha256 -days 3560 -nodes \
	-subj "/CN=*.fazuh/C=US/L=City" \
	-keyout rootCA.key -out rootCA.crt 

openssl genrsa -out server.key 4096
```

## 2. Trust root CA certificates

**Archlinux**
```bash
sudo cp rootCA.crt /etc/ca-certificates/trust-source/anchors/
sudo update-ca-trust
```

**Ubuntu**
```bash
sudo cp rootCA.crt /usr/local/share/ca-certificates/
sudo update-ca-certificates
```

Your device (including your browser) should detect these certificates automatically.
	
To remove, simply delete the `rootCA.crt` file in `/etc/ca-certificates/trust-source/anchors`, and update using `sudo update-ca-trust`.

## 2. Create subdomain certificates

> [!note]
> Replace `<SUBDOMAIN>` with your subdomain.

```bash
SUBDOMAIN=<SUBDOMAIN>

openssl req -new -key server.key -out server-"$SUBDOMAIN".csr \
    -subj "/C=US/ST=State/L=City/O=Organization/CN=$SUBDOMAIN.fazuh" \
    -addext "subjectAltName=DNS:$SUBDOMAIN.fazuh,DNS:fazuh" \
    -addext "keyUsage=digitalSignature,nonRepudiation,keyEncipherment,dataEncipherment" \
    -addext "basicConstraints=CA:FALSE"
	
openssl x509 -req -in server-"$SUBDOMAIN".csr \
    -CA rootCA.crt -CAkey rootCA.key \
    -CAcreateserial -out server-"$SUBDOMAIN".crt \
    -days 3650 -sha256 \
    -copy_extensions copy
```

Use for nginx:
1. `ssl_certificate` : `server-<subdomain>.crt`
2. `ssl_certificate_key` : `server.key`

---

- Source: https://devopscube.com/create-self-signed-certificates-openssl/

**Author notes**
- `ssl_certificate /etc/nginx/ssl/SUBDOMAIN.fazuh/fullchain.cer;`
- `ssl_certificate_key /etc/nginx/ssl/SUBDOMAIN.fazuh/private.key;`

