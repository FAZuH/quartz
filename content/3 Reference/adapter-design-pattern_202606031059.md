---
publish: true
aliases:
  - Adapter Design Pattern
  - Adapter
created: 2026-06-03T10:59:05.385+07:00
modified: 2026-06-09T18:22:47.243+07:00
published: 2026-06-09T18:22:47.243+07:00
tags:
  - 
creation-time: 2026-06-03 10:59
status: in progress
parent:
  - "[[design-patterns_202605121551]]"
---

Object that converts an object's interface to another.

Why not call a helper method directly? This pattern is useful when our client code depends an interface, not a concrete type.

By creating an adapter to that interface, we can accept different types of data.

```rust
impl ClientInterface for Adapter {
    fn display_profile(&self, user: User) { ... }
}

impl ClientInterface for LegacyAdapter {
    fn display_profile(&self, user: LegacyUser) { ... } // different source type, same interface
}
```

The client just holds a `&dyn ClientInterface` and doesn't care which adapter is behind it. Calling a helper directly couples the client to both the data type and the transformation logic.

## Approaches

https://refactoring.guru/design-patterns/adapter introduces two approaches for implementing this design pattern:

### Object adapter

Uses <u>composition</u>: Implements the interface of one object and wraps the other one

```mermaid
---
config:
  layout: elk 
  class: 
    hideEmptyMembersBox: true
---
classDiagram
	class Client
	
	class Service {
		<<interface>>
		+method(Data)
	}
	
	class Adapter {
		-Service adaptee
		-convertToServiceFormat(Data) SpecialData
		+method(Data)
	}
	
	class OtherService {
		...
		+serviceMethod(SpecialData)
	}
	
	Client --> Service
	Service <|.. Adapter
	Adapter --> OtherService
	
	note for Adapter "specialData = convertToServiceFormat(data)
	return adaptee.serviceMethod(specialData)"
```

### Class adapter

Uses <u>inheritance</u>: Inherits interface from both objects at once.

```mermaid
---
config:
  layout: elk 
  class: 
    hideEmptyMembersBox: true
---
classDiagram
	class Client
	
	class ExistingClass {
		...
		+method(Data)
	}
	
	class Service {
		...
		+serviceMethod(SpecialData)
	}
	
	class Adapter {
		...
		-convertToServiceFormat(Data) SpecialData
		+method(Data)
	}
	
	Client --> ExistingClass
	ExistingClass <|-- Adapter
	Service <|-- Adapter
	
	note for Adapter "specialData = convertToServiceFormat(data)
	return serviceMethod(specialData)"
```
