---
publish: true
aliases:
  - UI Architectural Patterns
created: 2026-04-09T23:29:02.816+07:00
modified: 2026-04-12T02:37:12.668+07:00
published: 2026-04-12T02:37:12.668+07:00
creation-time: 2026-04-09 15:18
status: in progress
tags:
parent:
  - "[[software architecture]]"
---

UI architectural patterns separate concerns between data (Model), presentation (View), and interaction logic (Translator component).

## Common Layers

All UI architectural patterns share the following layers:

- **Model**: Interfaces data access and holds business logic
- **View**: Presents UI content to the user and receives user input

Each pattern has a **translator component** that handles interaction between the model and the view (e.g., controller, presenter, view-model).

![UI Architectural Patterns Layers|541](assets/image-102.png)

## Legend

- _Italic_: Definition / About
- **Bold**: Theorem / Property
- Standard: Procedure / Example / Cheatsheet

## Patterns

- _[[mvc-(model-view-controller)_202604091518|MVC (Model View Controller)]]_
- _[[mvp-(model-view-presenter)_202604091519|MVP (Model View Presenter)]]_
- _[[mvvm-(model-view-viewmodel)_202604091519|MVVM (Model View ViewModel)]]_
- _[[mvvm-c-(model-view-viewmodel-controller)_202604091519|MVVM-C (Model View ViewModel Controller)]]_
- _[[viper_202604091519|VIPER]]_
- [[mvc-c-(model-view-controller-coordinator)_202604091519|MVC-C (Model View Controller Coordinator)]] — Variant with navigation coordinator

## Core Components

- _[[model-(ui-pattern)_202604091520|Model]]_
- _[[view-(ui-pattern)_202604091520|View]]_
  - _[[view-(ui-pattern)_202604091520#Passive View|Passive View]]_
  - _[[view-(ui-pattern)_202604091520#Active View|Active View]]_
- _[[translator-component_202604091520|Translator Component]]_
  - _[[controller-(mvc)_202604091521|Controller]]_ — MVC, MVC-C
  - _[[presenter_202604091521|Presenter]]_ — MVP, VIPER
  - _[[viewmodel_202604091521|ViewModel]]_ — MVVM, MVVM-C
  - _[[coordinator_202604091522|Coordinator]]_ — MVVM-C, MVC-C
