---
publish: true
aliases:
  - Abstract Factory
created: 2026-05-15T07:35:05.862+07:00
modified: 2026-06-09T18:18:25.628+07:00
published: 2026-06-09T18:18:25.628+07:00
tags:
  - 
creation-time: 2026-05-15 07:35
status: in progress
parent:
  - "[[design-patterns_202605121551|Design Patterns]]"
---

Suppose we have different kind of furnitures: Chair, Table, Bed. Each furniture with different variants: Art Deco, Victorian, Modern.

Usually clients wants to buy different furnitures but from one variant only.

**Abstract Factory** is an "extension" of [[factory-method_202605121919|Factory Method]] that allows us to <u>group factory method of the same variants of Products in one place</u>.

With **Abstract Factory**, clients can choose a factory that can produce different furnitures but only for one variant - each factories "group" different furnitures for a variant.

## Structure

```mermaid
---
config:
  layout: elk 
  class: 
    hideEmptyMembersBox: true
---
classDiagram
	namespace product {
		class ProductA {
			<<interface>>
		}
		class ProductB {
			<<interface>>
		}
		class ConcreteProductA1 { }
		class ConcreteProductB1 { }
		class ConcreteProductA2 { }
		class ConcreteProductB2 { }
	}
	
	namespace factory {
		class Factory {
			<<interface>>
			+createProductA() ProductA
			+createProductB() ProductB
		}
	
		class ConcreteFactoryX {
			+createProductA() ProductA
			+createProductB() ProductB
		}
		class ConcreteFactoryY {
			+createProductA() ProductA
			+createProductB() ProductB
		}
	}
	
	class Client {
		-Factory factory
		+new(Factory factory)
	}
	
	Factory <|.. ConcreteFactoryX
	Factory <|.. ConcreteFactoryY
	
	ProductA <|.. ConcreteProductA1
	ProductB <|.. ConcreteProductB1
	ConcreteProductA2 ..|> ProductA
	ConcreteProductB2 ..|> ProductB
	
	Factory ..> ProductA
	Factory ..> ProductB
	
	Client --> Factory
```

## Notes

use this often in repositories/data layer. I have a `Repository` for each table in our db, and we want to aggregate all repository for a single data backend in one interface. I aggregate it to `Repositories`, which in this pattern is a `Factory` of `Repository`. For an sqlite database, it'd be `SqliteRepositories`

If we want to add more data backends such as S3, I can create another object that implements `Repositories`, such as `S3Repositories`
