---
publish: true
aliases:
  - Chain of Responsibility
created: 2026-06-08T22:29:01.260+07:00
modified: 2026-06-08T22:47:13.548+07:00
published: 2026-06-08T22:47:13.548+07:00
tags:
  - 
creation-time: 2026-06-08 22:29
status: in progress
parent:
  - "[[design-patterns_202605121551]]"
---

This pattern can be used when you need to send _commands_ to a _chain_ of _handlers_ in a particular order. Each handler decides whether it consumes the command, or passes it to the next handler.

For example, passing an user request to a chain of request handlers, such as auth, validation, caching, security etc.

## Structure

```mermaid
---
config:
  layout: elk 
  class: 
    hideEmptyMembersBox: true
---
classDiagram
	class Client
	
	class Handler {
		<<interface>>
		+setNext(Handler h)
		+handle(request)
	}
	
	class ConcreteHandler {
		+setNext(Handler h)
		+handle(request)
	}
	
	Client --> Handler
	Handler <|.. ConcreteHandler
	
	note for Client "h1 = new HandlerA()
	h2 = new HandlerB()
	h3 = new HandlerC()
	h1.setNext(h2)
	h2.setNext(h3)
	...
	h1.handle(request)
	"
```
