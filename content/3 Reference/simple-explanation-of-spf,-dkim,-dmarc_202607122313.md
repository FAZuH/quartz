---
publish: true
aliases:
  - Simple Explanation of SPF, DKIM, DMARC
created: 2026-07-12T23:13:30.333+07:00
modified: 2026-07-12T23:15:18.700+07:00
published: 2026-07-12T23:15:18.700+07:00
tags:
  - 
creation-time: 2026-07-12 23:13
status: in progress
parent:
  - "[[email administration]]"
---

[[About SPF Record|SPF]] checks if attacker address is authorized to send on behalf of the domain being checked, but an attacker can forge a false mail with a domain they control

[[About DKIM Record|DKIM]] checks if the mail is forged, but doesnt check if From: matches the sender domain

An attacker can pass SPF & DKIM simply by sending as a domain they control and trick receivers by presenting a false From: . [[About DMARC Record|DMARC]] prevents this by checking if the sender domain matches From:

## Long Version

SPF prevents unauthorized servers from sending mails on behalf of a domain by verifying if the sender address is authorized to send based on the SPF record.

But if an attacker forges the mail domain (MAIL FROM) to its OWN domain which verifies its address, the SPF check passes.

DKIM prevents this issue in SPF. The sender signs sent emails (and its headers) with DKIM key. Receiver server checks if the mail is forged by grabbing the public key from DKIM record and verifying if the mail is written with a matching private key.

If the mail is modified in any way without the correct private key, the mail wont pass the public key check

DKIM does NOT enforce d= domain matches with From: domain. If an attacker.com has DKIM d=attacker.com it owns, it can sign the email with their own DKIM keys

DMARC checks domain from SPF and requires it to match From: . Attacker can pass SPF+DKIM only for domains they own, and can only forge From: to an unrelated domain if that domain has no DMARC enforcement

1. Envelope MAIL FROM: bounce@attacker.com    → SPF checks attacker.com's record → PASS
2. DKIM-Signature: d=attacker.com             → signature valid for attacker.com → PASS
3. Visible header From: ceo@victimcompany.com → never checked by SPF or DKIM
