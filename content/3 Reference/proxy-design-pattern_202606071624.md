---
publish: true
aliases:
  - Proxy Design Pattern
  - Proxy
created: 2026-06-07T16:24:29.014+07:00
modified: 2026-06-08T22:47:58.274+07:00
published: 2026-06-08T22:47:58.274+07:00
tags:
  - 
creation-time: 2026-06-07 16:24
status: in progress
parent:
  - "[[design-patterns_202605121551]]"
---

**Proxy** design pattern lets you provide a substitute or placeholder for another object. The client uses proxy as if using with the original object.

The **proxy** controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

## Structure

Example with access control

```mermaid
---
config:
  layout: elk 
  class: 
    hideEmptyMembersBox: true
---
classDiagram
	class Client
	class ServiceInterface {
		<<interface>>
		+operation()
	}
	class Proxy {
		-Service realService
		+new(Service)
		+checkAccess()
		+operation()
	}
	class Service {
		...
		+operation()
	}
	
	Client --> ServiceInterface
	ServiceInterface <|.. Service
	ServiceInterface <|.. Proxy
	Proxy *--> Service
	
	
	note for Proxy "operation() {
		if (self.checkAccess()) {
			self.realService.operation()
		}
	}"
```

## Applicability

- Lazy initialization: Create object only when first needed
- Access control: The proxy can pass the request to the service object only if the client’s credentials match some criteria (middlewares)
- Caching
- Smart reference: Drop when no clients is using it

## Relations with Other Patterns

![[adapter-vs-proxy-vs-decorator_202606071804#^e91d50|e91d50]]

- [[facade-design-pattern_202606040522|Facade]] is similar with **Proxy** in that both buffer a complex entity.
  Unlike Facade, **Proxy** <u>has the same interface as its service object</u>
- Proxy usually <u>manages the life cycle</u> of its service object on its own,
  whereas the composition of Decorators is <u>always controlled by the client</u>
