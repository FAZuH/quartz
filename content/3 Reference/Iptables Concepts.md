---
publish: true
created: 2026-04-09T23:07:39.430+07:00
modified: 2026-05-14T07:23:29.356+07:00
published: 2026-05-14T07:23:29.356+07:00
creation-time: 2025-06-21 01:47
status: in progress
tags:
parent:
  - "[[iptables]]"
---

- Reference: https://www.youtube.com/watch?v=vbhr4csDeI4

## Tables

1. RAW: Used for connection tracking
2. MANGLE: Modify [packet headers](https://www.geeksforgeeks.org/computer-networks/tcp-ip-packet-format/), e.g., TTL, protocol, TOS, etc.
3. NAT: Provide network address translation (NAT)
   - SNAT: Set source IP of outgoing packets statically
     - Private LAN accessing the internet via a public IP
     - VPNs hiding the clients' IP
     - MASQUERADE: Set source IP of outgoing packets dynamically
       - Laptop sharing internet over WI-FI (IP changes via DHCP)
   - DNAT: Set destination IP of packets _coming in from outside_, before they're routed.
     - Port forwarding to a web server inside a LAN to the internet
     - Reverse proxy to a service behind a private network
4. FILTER: Default/main table; used for packet filtering
5. SECURITY: Used to set internal SELinux labels

> [!tip] Personal Mnemonic for DNAT vs SNAT:
>
> - **D**NAT = **D**oor (people coming _in_ through the door)
> - **S**NAT = **S**ending (you're _sending_ out, hiding where you came from).
>
> because I kept mixing them up

## Chains

Used to apply rules to packets at certain points in its route.

- PREROUTING: After entering an interface, before routing decisions
- INPUT: When entering an interface, destined for local
- FORWARD: Not originating from local, before routed through
- OUTPUT: Originating from local, before going out
- POSTROUTING: Before leaving an interface, after routing decisions

It is called chain because it represents **sequence of rules processed in order**, like links in a chain.

"Before routing" refers to the stage when a packet arrives at the network interface but **before** the kernel decides whether to: 1. Deliver the packet to a local process, or 2. Forward the packet to another system

"After routing" refers to the stage **after** the kernel’s routing decision determines the packet’s fate. If the packet is for local process, it's sent to INPUT. Otherwise, it's sent to FORWARD.

### Chains traversal order

General packet flow order are: PREROUTING -> \[INPUT/FORWARD/OUTPUT] -> POSTROUTING

- Incoming destined local: PREROUTING -> INPUT
- Incoming destined remote: PREROUTING -> FORWARD -> POSTROUTING
- Originating local: OUTPUT -> POSTROUTING

### Available chains for each table

| Chain -><br>v Tables           | PREROUTING | INPUT | FORWARD | OUTPUT | POSTROUTING |
| ------------------------------ | ---------- | ----- | ------- | ------ | ----------- |
| (routing decision)             |            |       |         | ✅      |             |
| RAW                            | ✅          |       |         | ✅      |             |
| (connection tracking disabled) | ✅          |       |         | ✅      |             |
| MANGLE                         | ✅          | ✅     | ✅       | ✅      | ✅           |
| DNAT                           | ✅          |       |         | ✅      |             |
| (routing decision)             | ✅          |       |         | ✅      |             |
| FILTER                         |            | ✅     | ✅       | ✅      |             |
| SECURITY                       |            | ✅     | ✅       | ✅      |             |
| SNAT                           |            | ✅     |         |        | ✅           |

See also: [[routing-diagram_202511191359|Routing Diagram]]

## Rules

User defined commands to manipulate network traffic.

Examples:

- Block an IP address:
  ```bash
  iptables -A input -s 15.15.15.51 -j DROP
  ```

There are 2 components in an IP table rule

- Matching component: Conditions for applying the rule
  You can match by:
  - Protocol
  - IP address
  - Port address
  - Interafces
  - Headers
    e.g.,  `-s 15.15.15.51`
- Target component: What rule to apply should all conditions passes
  Can be categorized into:
  - Terminating targets: ACCEPT, DROP, QUEUE, REJECT, RETURN, user-defined
  - Non-terminating targets: Continue the chain
    e.g., `-j DROP`
