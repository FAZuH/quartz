---
{"publish":true,"created":"2025-08-15T13:53:58.659+07:00","modified":"2025-08-15T13:53:58.659+07:00","published":"2025-08-15T13:53:58.659+07:00","cssclasses":"","creation-time":"2025-06-21 02:13","status":"baby","tags":null,"parent":["[[iptables]]"]}
---

## Command syntax
The general syntax of `iptables` command is:
```bash
iptables [-t table] {-A|-C|-D|-V} chain [matches...] [-j targetname]
```
For more detailed syntax, see [Appendix: iptables command synopsis](#Appendix%20iptables%20command%20synopsis).

### Chain
Summary of chain options:
- `A`: Append
- `D`: Delete
- `I`: Insert
- `R`: Remove
- `Z`: Zero the packet and byte counters
- `L`: List
- `P`: Policy
- `E`: Rename
- `F`: Flush
- `N`: New user-defined chain
- `X`: Delete chain

See [Chains](Tables,%20Chains,%20and%20Rules%20in%20iptables.md#Chains) for list of default chains. The capitalization also doesn't matter.


### Matches
The match component can be categorized into 3 types, given below and some of their corresponding examples:
1. Generic
	- `-p`: Protocol
	- `-s`: Source IP
	- `-d`: Destination IP
	- `-i`: Input interface
	- `-o`: Output interface
2. Implicit
	- `--sport`: Port of the source IP
	- `--dport`: Port of the destination IP
	- `--tcp-flags`: Match on the TCP flags of the packet
3. Explicit: Using `-m` for complex matching

Read [iptables-tutorial, Table 10-2](iptables.md#^read-further-1) to see all the options.

### Jump
When all match conditions are satisfied, jump actioons tell the rule what to do with  a packet. Most common ones are:
- `ACCEPT`: Accept packet and stop traversing
- `DROP`: Drop packet and stop traversing
- `REJECT`: Like `DROP`, but send an ICMP reject packet
- `RETURN`:  Stop packet traverse in the subchain, and return to superior chain with no effect; like function return

## Case study

Suppose we want to block `fazuh.com`.

We can do that by:
```bash
iptables -A INPUT -s fazuh.com -j DROP
```
Here we append an input rule (`-A`), so that all packets from the site (`-s fazuh.com`) gets dropped (`-j DROP`).

![](assets/Pasted image 20250621132246.png)


## Appendix: iptables command synopsis
Below is taken from `man iptables` on 2025-06-21:
```
NAME
       iptables/ip6tables — administration tool for IPv4/IPv6 packet filtering and NAT

SYNOPSIS
       iptables [-t table] {-A|-C|-D|-V} chain rule-specification

       ip6tables [-t table] {-A|-C|-D|-V} chain rule-specification

       iptables [-t table] -I chain [rulenum] rule-specification

       iptables [-t table] -R chain rulenum rule-specification

       iptables [-t table] -D chain rulenum

       iptables [-t table] -S [chain [rulenum]]

       iptables [-t table] {-F|-L|-Z} [chain [rulenum]] [options...]

       iptables [-t table] -N chain

       iptables [-t table] -X [chain]

       iptables [-t table] -P chain policy

       iptables [-t table] -E old-chain-name new-chain-name

       rule-specification := [matches...] [target]

       match := -m matchname [per-match-options]

       target := -j targetname [per-target-options]
```