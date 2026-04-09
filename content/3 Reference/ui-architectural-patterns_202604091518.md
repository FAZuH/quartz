---
publish: true
aliases:
  - UI Architectural Patterns
created: 2026-04-09T15:18:51.028+07:00
modified: 2026-04-09T15:24:31.069+07:00
published: 2026-04-09T15:24:31.069+07:00
cssclasses: ""
creation-time: 2026-04-09 15:18
status: in progress
tags:
parent:
  - software architecture_202603060739
---


## Notes



UI architectural patterns separate concerns between data (Model), presentation (View), and interaction logic (Translator component).

## Common Layers

All UI architectural patterns share the following layers:

- **Model**: Interfaces data access and holds business logic
- **View**: Presents UI content to the user and receives user input

Each pattern has a **translator component** that handles interaction between the model and the view (e.g., controller, presenter, view-model).

![UI Architectural Patterns Layers](assets/image-102.png)

## Legend

- *Italic*: Definition / About
- **Bold**: Theorem / Property
- Standard: Procedure / Example / Cheatsheet

## Patterns

- *[[3 Reference/mvc-(model-view-controller)_202604091518\|MVC (Model View Controller)]]*
- *[[3 Reference/mvp-(model-view-presenter)_202604091519\|MVP (Model View Presenter)]]*
- *[[3 Reference/mvvm-(model-view-viewmodel)_202604091519\|MVVM (Model View ViewModel)]]*
- *[[3 Reference/mvvm-c-(model-view-viewmodel-controller)_202604091519\|MVVM-C (Model View ViewModel Controller)]]*
- *[[3 Reference/viper_202604091519\|VIPER]]*

## Variants

- [[3 Reference/mvc-c-(model-view-controller-coordinator)_202604091519\|MVC-C (Model View Controller Coordinator)]] — Variant with navigation coordinator

## Core Components

- *[[3 Reference/model-(ui-pattern)_202604091520\|Model]]*
- *[[3 Reference/view-(ui-pattern)_202604091520\|View]]*
- *[[3 Reference/translator-component_202604091520\|Translator Component]]*

## Translator Types by Pattern

- *[[3 Reference/controller-(mvc)_202604091521\|Controller]]* — MVC, MVC-C
- *[[3 Reference/presenter_202604091521\|Presenter]]* — MVP, VIPER
- *[[3 Reference/viewmodel_202604091521\|ViewModel]]* — MVVM, MVVM-C
- *[[3 Reference/coordinator_202604091522\|Coordinator]]* — MVVM-C, MVC-C

## View Variants

- *[[3 Reference/passive-view_202604091522\|Passive View]]*
- *[[3 Reference/active-view_202604091523\|Active View]]*