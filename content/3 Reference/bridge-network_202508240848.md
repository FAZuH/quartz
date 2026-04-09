---
publish: true
aliases:
  - Bridge Network
created: 2026-04-09T23:07:39.022+07:00
modified: 2026-04-09T23:07:39.023+07:00
published: 2026-04-09T23:07:39.023+07:00
cssclasses: ""
creation-time: 2025-08-24 08:48
status: in progress
tag:
parent: "[[docker_202508231030]]"
---


## About bridge network

**Bridge network** in general networking terms refers to <u>network type that connects multiple network segments</u> or devices, allowing them to communicate with each other as if they were on the same physical network.

A bridge learns the MAC addresses of devices in each segment by <u>examining the source address of incoming frames</u>. It builds a MAC address table to forward frames to their destination segment.

In virtual networks (e.g., Docker network), a **virtual bridge** allows communication between virtual machines (VMs) or containers on different network segments, or between VMs/containers and the host network.

## Bridge network vs router
- **Bridge**: Operates at <u>Layer 2</u> (Data Link Layer) and uses <u>MAC addresses</u> to forward traffic between network segments. It <u>doesn’t change the IP addresses and doesn't perform routing</u>.
    
- **Router**: Operates at <u>Layer 3</u> (Network Layer) and uses <u>IP addresses</u> to route traffic between different networks or subnets. It <u>performs network segmentation</u> and is responsible for <u>forwarding traffic</u> between different IP networks.
