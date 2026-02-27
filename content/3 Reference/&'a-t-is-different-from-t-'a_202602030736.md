---
publish: true
aliases:
  - "&'a T is different from T: 'a"
created: 2026-02-22T19:23:58.295+07:00
modified: 2026-02-22T19:23:58.296+07:00
published: 2026-02-22T19:23:58.296+07:00
tags:
  - 
cssclasses: ""
creation-time: 2026-02-03 07:36
status: baby
parent:
  - "[[rust]]"
---

>[!NOTE]
> This is a generalization of [[3 Reference/&'static-t-is-different-from-t-'static_202602030735\|&'static T is different from T: 'static]].  Also related with [[3 Reference/t-is-a-superset-of-disjoint-sets-&t-and-&mut-t_202602030721\|T is a superset of disjoint sets &T and &mut T]]

`&'a T` requires and implies `T: 'a` since a reference to `T` of lifetime `'a` cannot be valid for `'a` if `T` itself is not valid for `'a`. For example, the Rust compiler will never allow the construction of the type `&'static Ref<'a, T>` because if `Ref` is only valid for `'a` we can't make a `'static` reference to it.

`T: 'a` includes all `&'a T` but the reverse is not true (implied by [[3 Reference/t-is-a-superset-of-disjoint-sets-&t-and-&mut-t_202602030721\|T is a superset of &T]]).

```rust
// only takes ref types that can outlive 'a
fn t_ref<'a, T: 'a>(t: &'a T) {}

// takes any types that can outlive 'a
fn t_bound<'a, T: 'a>(t: T) {}

// owned type which contains a reference
struct Ref<'a, T: 'a>(&'a T);

fn main() {
    let string = String::from("string");

    t_bound(&string); // ✅
    t_bound(Ref(&string)); // ✅
    t_bound(&Ref(&string)); // ✅

    t_ref(&string); // ✅
    t_ref(Ref(&string)); // ❌ - expected ref, found struct
    t_ref(&Ref(&string)); // ✅

    // string can outlive 'static which is longer than 'a
    t_bound(string); // ✅
}
```

**Key Takeaways**

- `T: 'a` is more general and more flexible than `&'a T`
- `T: 'a` accepts owned types, owned types which contain references, and references
- `&'a T` only accepts references
- if `T: 'static` then `T: 'a` since `'static` >= `'a` for all `'a`


https://github.com/pretzelhammer/rust-blog/blob/master/posts/common-rust-lifetime-misconceptions.md#3-a-t-and-t-a-are-the-same-thing