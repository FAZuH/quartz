---
publish: true
aliases:
  - Rust's Journey to Async/Await
created: 2026-04-25T11:10:41.484+07:00
modified: 2026-04-25T11:31:07.040+07:00
published: 2026-04-25T11:31:07.040+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-04-25 11:10
status: in progress
parent:
  - "[[literature-list_202603241105]]"
literature/title: Rust's Journey to Async/Await
literature/author: Steve Klabnik
literature/type: Video
literature/genre:
literature/status:
literature/rating:
literature/source: https://www.youtube.com/watch?v=lJ3NC-R3gSI
literature/start: 2026-04-25T11:10:00
literature/end:
---

Cool video about the journey/history of how Rust implements asynchronous non-blocking code!

Starts off with terms & their definitions.

Talks about how Rust is a system programming language, and it HAS to be lightweight, but adding an async runtime into the language adds an additional overhead.

In the beginning, Rust used green threads as opposed to native threads. But it does not make sense for a systems programming language, so it was eventually separated into libgreen. People also wanted to build network systems in Rust, and version 1.0 was looming, so they had to decide.

JS introduced the concept of event loop and promises. It had a messy nested callback issue, so they added promise chaining, before eventually adding an `await` syntax, which is an asynchronous keyword that looks synchronous.

```js
// Callback: Pass function. It gets called when done
get((result) => process(result));

// Promise: get() returns a promise, you chain .then()
const promise = get()
promise.then((result) => process(result));

// Async/await: syntactic sugar over promises
const result = await get();
process(result);
```

Scala introduced the concept of Futures. Scala is also a statically typed language like Rust, so it is more compatible. So Rust added a `Future` trait with `Future::poll` for the community to develop a runtime crate with (tokio for example).

The community also argued extensively about the await syntax. One of the main reasons is due to the `?` operator:

```rust
await future;

// with `?` operator:
await future?;
await (future?);
(await future)?;
?await future;

// especially with nested awaits:
(await (await future)?)?
```

Rust eventually decided on these. It is uniquely used in Rust

```rust
let fut = get();
get.await?;

// nested
get.await?.await?;
```

Some people viscerally hated it. Many people disliked it, but favored it after few minutes of using it.