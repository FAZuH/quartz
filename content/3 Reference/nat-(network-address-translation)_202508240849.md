---
{"publish":true,"aliases":["NAT (Network Address Translation)"],"created":"2025-10-14T04:15:27.040+07:00","modified":"2025-10-14T04:15:27.040+07:00","published":"2025-10-14T04:15:27.040+07:00","cssclasses":"","creation-time":"2025-08-24 08:49","status":"baby","tag":null,"parent":"[[network engineering]]"}
---


**NAT** is a method used to <u>modify IP addresses in packets while they are in transit</u> across a router or firewall. The main goal of NAT is to map private IP addresses to a public IP address, enabling devices in a private network to access the internet through a single public IP.

## Masquerade

**Masquerading** is a special case of Source Network Address Translation (SNAT) and allows you to masquerade an <u>internal network</u> (typically, your LAN with private address space) behind a <u>single, official IP address on a network interface</u>. SNAT is more generic as it allows to map multiple source addresses to several destination addresses.

> [!note] Definition of masquerading (verb)
> pretend to be someone one is not.
> *"a journalist **masquerading as** a man in distress"*