---
publish: true
aliases:
  - MVC-C (Model View Controller Coordinator)
created: 2026-04-09T15:19:49.513+07:00
modified: 2026-04-09T15:38:33.450+07:00
published: 2026-04-09T15:38:33.450+07:00
cssclasses: ""
creation-time: 2026-04-09 15:19
status: in progress
tags:
parent:
  - ui-architectural-patterns_202604091518
---


## Definition

MVC-C extends MVC by adding a **Coordinator** to handle navigation flow, separating navigation logic from Controllers. This pattern is useful for applications with complex navigation requirements.

```mermaid
flowchart LR
    subgraph View
        V[View]
    end
    subgraph Controller
        C[Controller]
    end
    subgraph Model
        M[Model]
    end
    subgraph Coordinator
        CO[Coordinator]
    end
    
    V -->|user input| C
    C -->|updates| M
    C <-->|navigation| CO
    CO -->|creates| V
    M -.->|notifies| V
```

## Flow

1. **View** receives user input, notifies **Controller**
2. **Controller** updates **Model** based on user input
3. **Controller** delegates navigation decisions to **Coordinator**
4. **Coordinator** manages screen transitions and creates new Views

## Coordinator Benefits

- **Separation of Navigation**: Navigation logic removed from Controllers
- **Reusable Controllers**: Controllers can be reused in different navigation contexts
- **Centralized Routing**: All navigation flows in one place
- **Deep Link Support**: Coordinators handle URL routing elegantly

## Use Case

Implemented in pwr-bot Discord UI components for managing complex view navigation and state transitions.

## When to Use

- Applications with complex navigation flows
- Multi-module applications
- Apps requiring deep linking
- Projects where Controllers become too heavy with navigation code

## Components

- [[3 Reference/model-(ui-pattern)_202604091520\|Model]]
- [[3 Reference/view-(ui-pattern)_202604091520\|View]]
- [[3 Reference/controller-(mvc)_202604091521\|Controller]]
- [[3 Reference/coordinator_202604091522\|Coordinator]]

## Related

- [[3 Reference/mvc-(model-view-controller)_202604091518\|MVC (Model View Controller)]]
- [[3 Reference/mvvm-c-(model-view-viewmodel-controller)_202604091519\|MVVM-C]]