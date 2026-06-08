---
publish: true
aliases:
  - How Tailscale Works
created: 2026-06-04T08:57:24.503+07:00
modified: 2026-06-04T11:42:01.966+07:00
published: 2026-06-04T11:42:01.966+07:00
tags:
  - 
creation-time: 2026-06-04 08:57
status: in progress
parent:
  - "[[literature-list_202603241105]]"
literature/title: How Tailscale Works
literature/author: Avery Pennarun
literature/type: Blog
literature/genre:
literature/status:
literature/rating:
literature/source:
  - https://tailscale.com/blog/how-tailscale-works
literature/start: 2026-06-04T09:01:00
literature/end: 2026-06-04T11:42:00
---

Traditional VPNs create networks with hub-and-spoke network - your traffic goes to a relay server (the "hub") before reaching the destination. This has many issues with firewall, latency, etc.

![[assets/how-tailscale-works_202606040857-1780540762211.webp|463x357]]

Tailscale creates a mesh network between all nodes in the "domain" (basically classes of nodes allowed to connect to each other, configured with ACL).

Tailscale uses a "coordination server", which "tells" each node:

1. The address of each other nodes it is allowed to connect to. And,
2. Their respective public keys (for e2e encryption. the private key never leaves the node)

Here's what a node does when it registers to a Tailscale coordination server:

1. <u>Generates a public/private keypair</u> for itself. Associates public key with its identity
2. <u>Sends public key</u>
3. <u>Downloads public keys and addresses</u> in its domain, which was sent from other nodes to the coordination server.
4. <u>Configures its WireGuard</u> instance with the downloaded keys

The actual routing happens during connection - the coordination server broker connections, doing the actual discovery (IP:port) during STUN/ICE/DERP phase.

Tailscale oursources node identity authentication to an [OAuth2, OIDC (OpenID Connect), or SAML provider](https://tailscale.com/kb/1013/sso-providers), so you can use your account to "prove" that you are who you say you are to the coordination server (why? to prevent other devices from impersonating you ofc).

Since Tailscale network is a mesh network, how the hell does each node able to connect to other node under strict networks? Tailscale uses advanced techniques based on [STUN](https://tools.ietf.org/html/rfc5389) and [ICE](https://tools.ietf.org/html/rfc8445) standards, to make these connections work.

If even with those a connection still could not be established, Tailscale provides DERP (Designated Encrypted Relay for Packets) servers. These fill the same role as [TURN servers](https://tools.ietf.org/html/rfc5766) in the ICE standard, except they use WebSockets over HTTPS (or HTTP/2) instead of the obsolete TURN recommendations. This makes the connection firewall-friendly since it looks like a normal web traffic.

DERP works by acting as a "relay" or "bridge" between you and the node you're trying to connecting to through WebSockets over HTTPS (or HTTP/2). Recall that our private keys never leaves our node, so connections stay e2e encrypted.

Recall that Tailscale uses a mesh network, meaning our traffic to another node is p2p, meaning our connections is not restricted by a "central" node like traditional VPNs do. Instead, <u>each node apply ACL rules</u> sent by the coordination server. Each node blocks incoming connections that should not be allowed at encryption time.

On top of each node blocking invalid connections, the coordination server also only sends public key the node is allowed to connect to. As a result, an invalid connection cannot be established through Tailscale even when two nodes can connect since they cannot decrypt each other's packets.
