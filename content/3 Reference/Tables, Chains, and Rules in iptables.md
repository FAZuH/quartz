---
{"publish":true,"cssclasses":""}
---


- Reference: https://www.youtube.com/watch?v=vbhr4csDeI4

## Tables
- FILTER: Default/main table; used for packet filtering
- NAT: Provide network address translation (NAT)
	- SNAT: Set source IP of outgoing packets statically
		- Private LAN accessing the internet via a public IP
	    - VPNs hiding the clients' IP
	- DNAT: Set destionation IP of incoming packets statically
		- Port forwarding to a web server inside a LAN
	- MASQUERADE: Set source IP of outgoing packets dynamically
		- Laptop sharing internet over WI-FI (IP changes via DHCP)
- MANGLE: Modify [packet headers](https://www.geeksforgeeks.org/computer-networks/tcp-ip-packet-format/), e.g., TTL, protocol, TOS, etc.
- RAW: Used for connection tracking
- SECURITY: Used to set internal SELinux labels

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
General packet flow order are: PREROUTING -> \[INPUT/FORWARD/OUTPUT\] -> POSTROUTING
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

