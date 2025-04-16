---
{"creation-time":"2025-03-08 22:10","status":"ongoing","tags":null,"parent":["[[database]]","[[benchmarking]]"],"publish":true,"PassFrontmatter":true}
---


## About TPC-C

TPC-C (Transaction Processing Performance Council Benchmark C) is a standardized **benchmark designed to simulate a complex, online transaction processing (OLTP) workload**.

It models a wholesale supplier managing orders, with transactions such as entering new orders, processing payments, delivering orders, checking stock levels, and monitoring warehouse performance.

The benchmark measures **how well a database system handles such workloads under varying conditions**.

## About TPC-C throughput

TPC-C throughput refers to the **rate at which the database system can process transactions**, typically measured in **transactions per minute (tpmC)**. It quantifies the system's capacity to handle a workload efficiently.

**Higher throughput indicates better performance**, but it can degrade if the system becomes overloaded or encounters contention (e.g., lock conflicts or resource bottlenecks).

## About concurrency

Concurrency refers to the **number of simultaneous transactions or users accessing the database at the same time**. In TPC-C, this is often represented by the number of active client connections or threads executing transactions concurrently.

In MySQL, concurrency is influenced by settings like the **transaction isolation level** (e.g., Read Committed) and parameters like `innodb_spin_wait_delay`, which controls how long threads spin before yielding during lock contention in the InnoDB storage engine.

## Relationship between throughput and concurrency

As concurrency increases, throughput initially scales up because the system can handle more work in parallel.

However, beyond an optimal point, throughput may degrade due to:

- **Lock Contention**: Multiple transactions competing for the same resources (e.g., rows or locks).

- **Resource Saturation**: CPU, memory, or I/O limits being reached.

- **Configuration Impact**: In your case, setting the isolation level to Read Committed (less strict than Repeatable Read) reduces locking overhead, potentially improving concurrency, while tweaking `innodb_spin_wait_delay` mitigates delays in InnoDB’s mutex handling, aiming to sustain throughput at higher concurrency.

## Summary
- **TPC-C Throughput**: How many transactions MySQL can handle per minute.
- **Concurrency**: How many users or transactions are hitting the database at once.
