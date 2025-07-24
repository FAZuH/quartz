---
{"publish":true,"aliases":["Overview of Mail Server Infrastructure"],"created":"2025-07-24T11:50:56.262+07:00","modified":"2025-07-24T11:50:56.263+07:00","published":"2025-07-24T11:50:56.263+07:00","cssclasses":"","creation-time":"2025-07-23 18:38","status":"baby","tag":null,"parent":"[[email administration]]"}
---


## Components of a mail server

The following components are required to create a [complete delivery chain](https://en.wikipedia.org/wiki/Email_agent_(infrastructure)).

### MUA (Mail User Agent)

Client/program capable of **sending** emails to a mail server;
while also capable of **fetching** emails from a mail server for presenting them to the end user.

### MTA (Mail Transfer Agent)
	
Software dedicated to accepting submitted emails, then **forwarding** them.

If the receiving MTA is responsible for the FQDN the email is sent to, then an MTA is to forward that email to an MDA.

Otherwise, it is to **transfer** to another MTA, "closer" to the email's final destination.

### MDA (Mail Delivery Agent)

**Accepts** emails from an MTA
and dropping them into their recipients mailboxes.

### Schematic view

```
Sending an email:    MUA ----> MTA ----> (MTA relays) ----> MDA
Fetching an email:   MUA <--------------------------------- MDA
```
