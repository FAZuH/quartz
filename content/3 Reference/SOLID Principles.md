---
publish: true
created: 2026-03-25T15:22:40.640+07:00
modified: 2026-03-25T15:22:40.640+07:00
published: 2026-03-25T15:22:40.640+07:00
creation-time: 2025-02-28 16:43
status: complete
tags:
parent:
  - "[[object oriented programming]]"
---

## Single Responsibility

Class should only have one clear reason to change (one responsibility).

## Open/Closed Principles

Class should be open to extension ([[Pillars of OOP#inheritance|inheritance]]), but closed for modification.

## Liskov Substitution

Ensures subclass can substitute its superclass.

1. **Parameter** type of overrides should match or more abstract of

   `foo(Parent)` to

   ✅`foo(GrandParent)`

   ❌`foo(Child)`

   Break if client passes `Parent` to `foo`, but `foo` is actually expecting `Child`, tried to access fields not available on `Parent`

2. **Return** type of overrides should **match or subtype** of

   `Parent foo()` to

   ✅`Child foo()`

   ❌`GrandParent foo()`

   Breaks when client tries to access fields on `Parent`, but not available on `GrandParent`

3. Overriden **shouldn't throw more** than it's base

   Breaks when additional exceptions were not expected by client, and were raised

4. Subclass **shouldn't strengthen pre conditions** (increasing requirements established by superclass)

   Breaks when client believes the object it's passing satisfies the conditions set by superclass of another object, but the object is actually a subclass of the superclass that needs extra conditions

5. Subclass **shouldn't weaken post conditions** (failing to uphold guarantees established by superclass)

   Breaks when client expects objects that passes certain conditions, but subclass actually doesn't satisfy it

6. Subclass should **preserve** [[Invariants]] of superclass

   Breaks when superclass expects `studentCount` to be non negative, but subclass makes it negative

7. Subclass **shouldn't modify private fields** of superclass

   Allowing subclasses to access private fields can lead to tight coupling between the superclass and its subclasses

   The superclass may enforce certain [[Invariants|invariants]] through its public methods. Direct access to private fields by the subclass can bypass these checks

## Interface Segregation

Break down "fat" interfaces into more specific ones. not all classes are able to satisfy a bloated interface.

Class shouldn't be forced to conform to its interfaces.

## Dependency Inversion Principle

[[Class Levels#class-levels|High level]] should depend on abstractions. [[Class Levels#class-levels|Low level]] should depend on abstractions

On early app development, low level classes are often developed first before high level classes. dependency inversion principle suggests changing the direction of the dependency

Where to use Dependency Inversion:

you don't need interfaces everywhere. The rule of thumb is — if you'd ever want to swap the implementation, or test the consumer in isolation, make it a interface.

![[Screenshot_2024-07-26-14-48-01-701_com.adobe.reader-edit.jpg]]

![[Screenshot_2024-07-26-14-48-14-738_com.adobe.reader-edit.jpg]]
