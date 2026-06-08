---
publish: true
aliases:
  - View (UI Pattern)
created: 2026-04-09T23:29:02.819+07:00
modified: 2026-04-12T02:36:53.222+07:00
published: 2026-04-12T02:36:53.222+07:00
creation-time: 2026-04-09 15:20
status: in progress
tags:
parent:
  - "[[ui-architectural-patterns_202604091518|UI Architectural Patterns]]"
---

## Definition

The **View** layer is responsible for presenting UI content to the user and receiving user input.

```mermaid
flowchart TB
    V[View]
    
    V --> D[Display Content]
    V --> I[Receive Input]
    V --> B[Data Binding]
    
    D --> UI[UI Elements]
    I --> Events[User Events]
    B -.->|binds to| VM[ViewModel/Controller]
```

## Responsibilities

- **Presentation**: Renders UI elements and displays data
- **User Input**: Receives and forwards user interactions
- **Binding**: Connects to Model/ViewModel state (in MVVM patterns)

## Key Characteristics

- **Passive**: Contains minimal logic (ideally none)
- **Declarative**: Describes what to display, not how
- **Reusable**: Can be swapped without affecting business logic

## Passive View

**Passive View** is a View variant where the View gets data **only** through the translator component (Controller/Presenter) and has no direct knowledge of the Model.

```mermaid
flowchart LR
    subgraph View[Passive View]
        V[View]
    end
    subgraph Controller
        C[Controller]
    end
    subgraph Model
        M[Model]
    end
    
    V -->|user input| C
    C -->|updates| M
    M -->|data| C
    C -->|formatted data| V
    
    style V fill:#e1f5fe
    style M fill:#fff3e0
```

### Key Characteristics

- **No Model Access**: View cannot query Model directly
- **Data from Controller Only**: All data comes through Controller
- **Minimal Logic**: View is purely presentation-focused
- **High Testability**: Controller can be tested with mocked View

### Advantages

1. <u>Complete separation</u> between View and Model
2. Controller acts as single source of truth for View
3. Easier to mock View in Controller tests
4. View can be simple UI template

### Disadvantages

1. Controller must handle all data formatting
2. More boilerplate code for data passing
3. Potential performance overhead from full mediation

## Active View

**Active View** is a View variant where the View observes the Model directly for changes and queries the Model for updated data. The Controller only handles input events.

```mermaid
flowchart LR
    subgraph View[Active View]
        V[View]
    end
    subgraph Controller
        C[Controller]
    end
    subgraph Model
        M[Model]
    end
    
    V -->|user input| C
    C -->|updates| M
    M -.->|notifies changes| V
    V -.->|queries| M
    
    style V fill:#e1f5fe
    style M fill:#fff3e0
```

### Key Characteristics

- **Direct Model Access**: View queries Model for data
- **Observation Pattern**: View observes Model changes automatically
- **Lightweight Controller**: Controller only handles input routing
- **Reactive**: View updates automatically when Model changes

### Implementation Patterns

- **Observer Pattern**: View registers as observer of Model
- **Event Bus**: View subscribes to Model change events
- **Reactive Streams**: View binds to Model data streams

### Advantages

1. <u>More responsive</u> — View updates immediately when Model changes
2. Controller stays lightweight
3. Enables real-time data synchronization

### Disadvantages

1. Tighter coupling between View and Model
2. View tests need Model mocking
3. Harder to reason about data flow

## Comparison

| Aspect | Passive View | Active View |
|--------|--------------|-------------|
| Data Source | Controller only | Model directly |
| Model Awareness | None | Observes Model |
| Controller Role | Input + Data formatting | Input only |
| Testability | Higher (full mediation) | Lower (Model coupling) |

## Pattern Usage

| Pattern | View Role |
| ------- | --------- |
| [[mvc-(model-view-controller)_202604091518\|MVC]] | Notifies Controller of user input; displays formatted data |
| [[mvp-(model-view-presenter)_202604091519\|MVP]] | Delegates all logic to Presenter; displays Presenter-formatted data |
| [[mvvm-(model-view-viewmodel)_202604091519\|MVVM]] | Binds to ViewModel properties; declarative updates |
| [[viper_202604091519\|VIPER]] | Receives formatted data from Presenter; forwards user actions |

## Best Practices

- **Minimal Logic**: Avoid business logic in View
- **Statelessness**: View should be stateless when possible
- **Testability**: View should be easily mockable

## Related

- [[model-(ui-pattern)_202604091520|Model]]
- [[translator-component_202604091520|Translator Component]]
- [[mvc-(model-view-controller)_202604091518|MVC (Model View Controller)]]
