---
publish: true
aliases:
  - Adapter vs Proxy vs Decorator
created: 2026-06-07T18:04:45.076+07:00
modified: 2026-06-07T18:38:30.613+07:00
published: 2026-06-07T18:38:30.613+07:00
tags:
  - 
creation-time: 2026-06-07 18:04
status: in progress
parent:
  - "[[design-patterns_202605121551]]"
---

| Pattern                                              | Interface after        | Intent                                    |
| ---------------------------------------------------- | ---------------------- | ----------------------------------------- |
| [[adapter-design-pattern_202606031059\|Adapter]]     | Different (translated) | Incompatibility                           |
| [[proxy-design-pattern_202606071624\|Proxy]]         | Same                   | Access/lifecycle<br>Transparent to caller |
| [[decorator-design-pattern_202606040419\|Decorator]] | Same + extended        | Adds behavior<br>Explicit to caller       |
^e91d50

[[adapter-design-pattern_202606031059|Adapter]], [[proxy-design-pattern_202606071624|Proxy]] and [[decorator-design-pattern_202606040419|Decorator]] all wrap an existing object, but they differ in ==why and what the wrapper exposes==.

**Adapter** — the wrapped object has the wrong interface for your code. The adapter <u>translates</u>. You call `square_peg.insert()`, adapter calls `round_hole.fit()` internally. The caller never sees the original interface.

**Proxy** — the wrapped object has the _right_ interface already. The proxy sits in front and adds something invisible: access control, caching, lazy loading, logging. The caller doesn't know or care it's talking to a proxy — it looks identical to the real thing.

**Decorator** — the wrapped object has the right interface, but you want to <u>add to it</u>. The decorator exposes the same interface _plus more_, or extends behavior of existing methods. You can stack decorators (`LoggingStream(CompressingStream(FileStream))`).

If it just intercepts the request transparently — auth checks, rate limiting, logging — without the client knowing or caring, that's Proxy.

If it transforms the request/response shape (e.g. translates a REST call into a gRPC call internally), that's Adapter.

If it adds new capabilities exposed to the caller (e.g. adds new headers/fields to the response the client can now use), that's Decorator.
