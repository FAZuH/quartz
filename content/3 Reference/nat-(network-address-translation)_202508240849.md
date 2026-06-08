---
publish: true
aliases:
  - NAT (Network Address Translation)
created: 2026-04-09T23:07:39.520+07:00
modified: 2026-04-09T23:07:39.521+07:00
published: 2026-04-09T23:07:39.521+07:00
creation-time: 2025-08-24 08:49
status: in progress
tag:
parent: "[[network engineering]]"
---

**NAT** is a method used to <u>modify IP addresses in packets while they are in transit</u> across a router or firewall. The main goal of NAT is to map private IP addresses to a public IP address, enabling devices in a private network to access the internet through a single public IP.

## Masquerade

**Masquerading** is a special case of Source Network Address Translation (SNAT) and allows you to masquerade an <u>internal network</u> (typically, your LAN with private address space) behind a <u>single, official IP address on a network interface</u>. SNAT is more generic as it allows to map multiple source addresses to several destination addresses.

> [!note] Definition of masquerading (verb)
> pretend to be someone one is not.
> _"a journalist **masquerading as** a man in distress"_
