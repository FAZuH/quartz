---
publish: true
aliases:
  - Factory Method versus Abstract Factory
created: 2026-05-15T07:40:54.285+07:00
modified: 2026-05-15T07:43:12.026+07:00
published: 2026-05-15T07:43:12.026+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-05-15 07:40
status: in progress
parent:
  - "[[design-patterns_202605121551]]"
---


> [!warning]
> From Gemini 3.1 Pro

## Q

i'm studying design patterns from https://refactoring.guru/design-patterns/abstract-factory

factory method uses an abstract class for the Creator, and interface for the Product

meanwhile, abstract factory uses interface for the Creator. This creator provides methods for many different Product interfaces, unlike factory method which returns a single Product

why?

## A

The structural differences exist because the patterns solve fundamentally different problems.

**1. Single Product vs. Family of Products**

- **Factory Method** solves the problem of varying a <u>single component within a larger workflow</u>.

- **Abstract Factory** enforces compatibility across multiple related components. It <u>provides methods for many Product interfaces because its primary purpose is ensuring that the client receives a matching set of objects</u> (e.g., a Victorian Chair and a Victorian Sofa, rather than mixing a Victorian Chair with a Modern Sofa). Creating an Abstract Factory for a single product is architectural overengineering; it degenerates into a Factory Method.


**2. Abstract Class vs. Interface**

- **Factory Method relies on inheritance.** The Creator is typically an abstract class because it <u>contains existing business logic</u>. It executes operations that _use_ the Product, but leaves the specific instantiation of that Product to subclasses via the factory method. The abstract class provides the scaffolding.

- **Abstract Factory relies on object composition.** The Creator is typically an interface because it is purely a <u>dedicated creation object</u>. It contains no business logic of its own. It is injected into client code to decouple the client from concrete instantiation.


Factory Method dictates _how_ a class creates a dependency it needs for its own internal logic. Abstract Factory dictates _what_ creates a predefined suite of dependencies for an external client.
