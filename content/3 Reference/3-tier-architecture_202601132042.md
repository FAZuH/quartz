---
publish: true
aliases:
  - 3-Tier Architecture
created: 2026-04-09T23:07:38.945+07:00
modified: 2026-04-09T23:07:38.946+07:00
published: 2026-04-09T23:07:38.946+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-01-13 20:42
status: in progress
parent:
  - "[[n-tier-architecture_202601132042]]"
---

## Layers
**3-Tier Architecture** separates an application into three logical layers, each with distinct responsibilities:

### 1. Presentation Layer (UI/View)

- What users interact with
- Displays data, captures user input
- No business logic - only presentation logic (formatting, validation UI)
- Examples: web pages, mobile app screens, desktop UI

### 2. Business Logic Layer (BLL/Application Layer)

- Core application logic and rules
- Processes data, enforces business rules, coordinates workflows
- Independent of how data is displayed or stored
- Examples: calculating prices, validating orders, applying discounts

### 3. Data Access Layer (DAL/Persistence Layer)

- Manages data storage and retrieval
- Abstracts database operations from business logic
- Handles CRUD operations, queries, transactions
- Examples: SQL queries, ORM mappings, database connections

## Key Principles

- **Separation of Concerns** - Each layer has one job
- **Dependency Direction** - Presentation → Business Logic → Data Access (one-way)
- **Layer Independence** - Change one layer without affecting others (ideally)

## Physical vs Logical

- **Logical 3-tier** - Code organization (all on one server)
- **Physical 3-tier** - Separate servers (client machine, application server, database server)

---

## Benefits:

- Easier maintenance and testing
- Reusable business logic across different UIs
- Can swap data sources without changing business logic

## Drawbacks:

- Can be overkill for simple applications
- Performance overhead from layer boundaries
- Risk of anemic domain model (business logic scattered)
