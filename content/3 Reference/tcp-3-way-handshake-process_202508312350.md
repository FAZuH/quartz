---
publish: true
aliases:
  - TCP 3-way Handshake Process
created: 2026-03-25T15:22:40.606+07:00
modified: 2026-03-25T15:22:40.606+07:00
published: 2026-03-25T15:22:40.606+07:00
tags:
  - 
cssclasses: ""
creation-time: 2025-08-31 23:50
status: in progress
parent:
  - "[[network engineering]]"
---

![[assets/Pasted image 20250831235033.png]]

Recall that:
- **SEQ number**: "This is byte X of MY data stream"
- **ACK number**: "I've received YOUR data up to byte Y, send Y+1 next"

The [[3 Reference/tcp-3-way-handshake-process_202508312350\|TCP 3-way Handshake Process]] ensures that
1. Client knows server's ISN (Initial Sequence Number)
2. Server knows client's ISN
3. Both sides know the other received their ISN

After the process, both client and server accomplishes:
1. **Sequence number synchronization** (your point)
2. **Connection state establishment** - both sides allocate resources and enter ESTABLISHED state
3. **Capability negotiation** - window size, maximum segment size, TCP options

## Steps

- **Step 1 (SYN):** In the first step, the client wants to establish a connection with a server, so it sends a segment with SYN(Synchronize Sequence Number) which informs the server that the client is likely to start communication and with what sequence number it starts segments with
- **Step 2 (SYN + ACK):** Server responds to the client request with SYN-ACK signal bits set. Acknowledgement(ACK) signifies the response of the segment it received and SYN signifies with what sequence number it is likely to start the segments with
- **Step 3 (ACK):** In the final part client acknowledges the response of the server and they both establish a reliable connection with which they will start the actual data transfer

> [!tip] Intuitive interpretation
> - Client: "Let's start a conversation, I'll number my messages starting from X"
> - Server: "Agreed, I got your X proposal. I'll number my messages starting from Y"
> - Client: "Got your Y proposal, we're synchronized"

## Example

1. SYN
	![[assets/Pasted image 20250901002150.png]]
2. SYN-ACK
	![[assets/Pasted image 20250901002206.png]]
3. ACK
	![[assets/Pasted image 20250901002210.png]]
