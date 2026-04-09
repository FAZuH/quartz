---
publish: true
aliases:
  - Nmap Scan Types
created: 2026-04-09T23:07:39.522+07:00
modified: 2026-04-09T23:07:39.523+07:00
published: 2026-04-09T23:07:39.523+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-08-31 23:37
status: in progress
parent:
  - "[[cyber security]]"
---

**TCP Scans**:

- `-sS` (SYN scan) - Default scan. Sends SYN packet, waits for SYN-ACK response. Doesn't complete TCP handshake. Requires root privileges. Fast and stealthy.
- `-sT` (Connect scan) - Completes full TCP handshake. Used when SYN scan unavailable (no root). Slower and more detectable in logs.
- `-sA` (ACK scan) - Sends ACK packets to determine firewall rules. Doesn't detect open ports, only filtered/unfiltered status.
- `-sW` (Window scan) - Examines TCP window field in RST responses. Some systems reveal open ports through window sizes.
- `-sF` (FIN scan) - Sends FIN packet. Open ports shouldn't respond, closed ports send RST. Bypasses some firewalls.
- `-sX` (Xmas scan) - Sets FIN, PSH, URG flags. Similar to FIN scan. Named for "lit up like Christmas tree."
- `-sN` (Null scan) - No flags set. Same principle as FIN/Xmas scans.

**UDP Scans**:

- `-sU` (UDP scan) - Scans UDP ports. Slow because most services don't respond to empty UDP packets. Often requires service-specific payloads.

**Other Scans**:

- `-sO` (IP Protocol scan) - Determines supported IP protocols (TCP, UDP, ICMP, etc.).
- `-sL` (List scan) - Only lists targets, performs reverse DNS. No packets sent to targets.
- `-sn` (Ping scan) - Only determines if hosts are up. Skips port scanning.

**Common usage patterns**:

- Default reconnaissance: `-sS`
- No root access: `-sT`
- Firewall testing: `-sA`
- Stealth scanning: `-sF`, `-sX`, `-sN`
- Service discovery: `-sU` combined with `-sS`

sometimes combined with other options like `-O` (OS detection), `-sV` (version detection), `-A` (aggressive scan).

---



### Nmap Scan Types (`-s` Options) and Their Usage

Nmap's `-s` flags define the **scan technique** used to probe target ports. Each method has distinct advantages, stealth levels, and requirements. Below is a comprehensive breakdown:

---

#### **1. TCP SYN Scan (`-sS`)**
- **Description**: Sends SYN packets and analyzes responses without completing the TCP handshake (half-open scan).
- **Port States**:
  - **Open**: SYN/ACK response.
  - **Closed**: RST response.
  - **Filtered**: No response or ICMP error.
- **Usage**:
  - Default for privileged users (root).
  - **Stealthy**: Avoids full connection, reducing logging.
  - **Fast**: Efficient for large networks.
- **Requirements**: Root/admin privileges (raw socket access).
- **Example**:  
  ```bash
  nmap -sS 192.168.1.1
  ```

---

#### **2. TCP Connect Scan (`-sT`)**
- **Description**: Completes the full TCP 3-way handshake (SYN → SYN/ACK → ACK).
- **Port States**:
  - **Open**: Connection established.
  - **Closed**: RST received.
  - **Filtered**: Timeout/ICMP error.
- **Usage**:
  - Default for unprivileged users.
  - **Reliable**: Works on all systems but slower.
  - **Noisy**: Easily logged by firewalls/IDS.
- **Requirements**: No special privileges.
- **Example**:  
  ```bash
  nmap -sT example.com
  ```

---

#### **3. UDP Scan (`-sU`)**
- **Description**: Sends UDP packets to target ports.
- **Port States**:
  - **Open**: UDP response received.
  - **Closed**: ICMP "Port Unreachable" error.
  - **Open|Filtered**: No response (could be open or firewalled).
- **Usage**:
  - Discovers UDP services (DNS, SNMP, DHCP, etc.).
  - **Slow**: UDP is connectionless; timeouts are long.
  - **Challenging**: Many systems rate-limit ICMP responses.
- **Requirements**: Root privileges.
- **Example**:  
  ```bash
  nmap -sU --top-ports 100 192.168.1.1
  ```

---

#### **4. SCTP INIT Scan (`-sY`)**
- **Description**: Sends SCTP INIT packets (SCTP is a transport protocol like TCP/UDP).
- **Port States**:
  - **Open**: INIT-ACK response.
  - **Closed**: ABORT chunk.
  - **Filtered**: No response.
- **Usage**:
  - Targets SCTP services (e.g., telecom systems).
  - **Stealthy**: Half-open scan for SCTP.
- **Requirements**: Root privileges.
- **Example**:  
  ```bash
  nmap -sY 192.168.1.1
  ```

---

#### **5. TCP NULL/FIN/Xmas Scans (`-sN`, `-sF`, `-sX`)**
- **Description**: Sends malformed TCP packets to bypass firewalls:
  - **NULL (`-sN`)**: No flags set.
  - **FIN (`-sF`)**: FIN flag only.
  - **Xmas (`-sX`)**: FIN, PSH, URG flags set.
- **Port States**:
  - **Open**: No response (RFC 793 compliance).
  - **Closed**: RST response.
  - **Filtered**: ICMP error.
- **Usage**:
  - **Evasion**: Bypass stateless firewalls/IDS.
  - **Limited**: Only works on RFC-compliant systems (e.g., Linux, BSD). Windows ignores these packets.
- **Requirements**: Root privileges.
- **Example**:  
  ```bash
  nmap -sN 192.168.1.1
  ```

---

#### **6. TCP ACK Scan (`-sA`)**
- **Description**: Sends ACK packets (regardless of port state).
- **Port States**:
  - **Unfiltered**: RST response (port reachable).
  - **Filtered**: No response/ICMP error.
- **Usage**:
  - **Firewall Mapping**: Identifies firewall rules (e.g., which ports are blocked).
  - **Not for Open Ports**: Cannot distinguish open/closed ports.
- **Requirements**: Root privileges.
- **Example**:  
  ```bash
  nmap -sA 192.168.1.1
  ```

---

#### **7. TCP Window Scan (`-sW`)**
- **Description**: Similar to ACK scan but analyzes TCP window size in RST responses.
- **Port States**:
  - **Open**: Positive window size (some systems).
  - **Closed**: Zero/negative window size.
  - **Filtered**: No response.
- **Usage**:
  - **Bypass Firewalls**: Works where ACK scans fail (e.g., stateful firewalls).
  - **System-Specific**: Relies on target OS behavior.
- **Requirements**: Root privileges.
- **Example**:  
  ```bash
  nmap -sW 192.168.1.1
  ```

---

#### **8. Idle Scan (`-sI <zombie IP>`)**
- **Description**: Uses a "zombie" host to spoof scan origin.
- **Port States**:
  - **Open**: Zombie IP ID increments.
  - **Closed**: No IP ID change.
- **Usage**:
  - **Ultimate Stealth**: Hides attacker's IP.
  - **Complex**: Requires an idle zombie with predictable IP ID sequences.
- **Requirements**: Root privileges + zombie host.
- **Example**:  
  ```bash
  nmap -sI 192.168.1.10 192.168.1.1
  ```

---

#### **9. Ping Scan (`-sP` or `-sn`)**
- **Description**: Host discovery without port scanning.
- **Usage**:
  - **Live Host Detection**: Uses ARP (local), ICMP, or TCP probes.
  - **Fast**: Maps network topology quickly.
- **Requirements**: None.
- **Example**:  
  ```bash
  nmap -sn 192.168.1.0/24
  ```

---

#### **10. List Scan (`-sL`)**
- **Description**: Lists targets without sending packets.
- **Usage**:
  - **DNS Enumeration**: Resolves hostnames.
  - **Pre-scan Check**: Validates target IPs/domains.
- **Requirements**: None.
- **Example**:  
  ```bash
  nmap -sL example.com/24
  ```

---

### **Summary Table**
| **Scan Type** | **Flag** | **Privileges** | **Speed** | **Stealth** | **Best For** |
|---------------|----------|----------------|-----------|-------------|--------------|
| TCP SYN       | `-sS`    | Root           | Fast      | High        | General port scanning |
| TCP Connect   | `-sT`    | None           | Medium    | Low         | Unprivileged scans |
| UDP           | `-sU`    | Root           | Slow      | Medium      | UDP services |
| SCTP INIT     | `-sY`    | Root           | Fast      | High        | SCTP services |
| NULL/FIN/Xmas | `-sN/-sF/-sX` | Root | Medium | High | Firewall evasion |
| ACK           | `-sA`    | Root           | Fast      | Medium      | Firewall mapping |
| Window        | `-sW`    | Root           | Fast      | Medium      | Stateful firewalls |
| Idle          | `-sI`    | Root + Zombie  | Slow      | Very High   | Stealth scanning |
| Ping          | `-sn`    | None           | Very Fast | Low         | Host discovery |
| List          | `-sL`    | None           | Instant   | N/A         | Target validation |

---

### **Key Considerations**
1. **Privileges**: Most advanced scans (`-sS`, `-sU`, `-sN`, etc.) require root/admin access.
2. **Firewall Evasion**: Use `-sN`, `-sF`, `-sX`, or `-sI` to bypass simple firewalls.
3. **Performance**: UDP scans (`-sU`) are slow; limit ports with `--top-ports` or `-p`.
4. **OS Reliability**: NULL/FIN/Xmas scans fail on Windows (always returns "closed").
5. **Ethical Use**: Only scan networks you own or have explicit permission to test.

For deeper analysis, combine scans with timing templates (`-T<0-5>`), version detection (`-sV`), or OS detection (`-O`).