---
publish: true
aliases:
  - Decorator Design Pattern
  - Decorator
created: 2026-06-04T04:19:52.198+07:00
modified: 2026-06-07T17:46:42.092+07:00
published: 2026-06-07T17:46:42.092+07:00
tags:
  - 
creation-time: 2026-06-04 04:19
status: in progress
parent:
  - "[[design-patterns_202605121551]]"
---

**Decorator** design pattern (often referred to also as **Wrapper**) "wraps" a base object with additional features.

This pattern can be used when modifying the behavior of external objects.

## Example

For example, a `DataSource`.  In this case, we create a "base" decorator `DataSourceDecorator` and implement it with our decorators `EncryptionDecorator` and `CompressionDecorator`.

We can then use this decorators on our concrete data sources, e.g., `FileDataSource` or `S3DataSource`. We can wrap them with `EncryptionDecorator`, with `CompressionDecorator`, or even both!

## Application

- Assign an extra behavior to an existing an object at runtime, before or after the actual behavior.

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
	
	class Component {
		<<interface>>
		+execute()
	}
	
	class ConcreteComponent {
		+execute()
	}
	
	class BaseDecorator {
		<<abstract>>
		-Component wrapee
		+new(Component c)
		+execute()
	}
	
	class ConcreteDecorator {
		+execute()
		+extra()
	}
	
	Client --> Component
	Component <|.. ConcreteComponent
	Component <|.. BaseDecorator
	BaseDecorator <|.. ConcreteDecorator
	
	note for BaseDecorator "execute() {
	    self.wrapee.execute()
	}"
	note for ConcreteDecorator "execute() {
	    super.execute()
		self.extra()
	}"
```
