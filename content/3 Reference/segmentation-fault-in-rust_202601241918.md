---
publish: true
aliases:
  - Segmentation Fault in Rust
created: 2026-04-09T23:07:39.579+07:00
modified: 2026-04-09T23:07:39.579+07:00
published: 2026-04-09T23:07:39.579+07:00
tags:
  - 
creation-time: 2026-01-24 19:18
status: in progress
parent:
  - "[[rust]]"
---

> Happens when a program tries to access memory outside of its memory segmentation.

Common causes include:

1. **Stack overflow**: Size of stack exceeds its allocated maximum
   - Infinite recursion/deep nested calls
   - Large variables (usually tuples/array)
   - VLAs in unsafe code (variable-length arrays via FFI)
   - Compiler bug (very rare)

2. **Null pointer dereference** - OS marks null pointer or `0x0` as inaccessible/protected
   ```rust
   unsafe {
       let ptr: *const i32 = std::ptr::null();
       let _ = *ptr;  // SIGSEGV
   }
   ```

3. **Use-after-free**: Trying to access a pointer after it has been freed (dangling pointer)
   - Heap (majority)
     ```rust
     unsafe {
     	let ptr = Box::into_raw(Box::new(42));
     	drop(Box::from_raw(ptr));
     	let _ = *ptr;  // Use-after-free
     }
     ```
   - Stack
     ```rust
     fn dangling() -> &'static i32 {
     	let x = 42;
     	unsafe { &*(&x as *const i32) }  // Returns pointer to stack memory
     }
     // x deallocated when function returns
     // Using the returned reference = use-after-free
     ```
   - Static
     ```rust
     unsafe {
     	static mut PTR: *mut i32 = std::ptr::null_mut();
     	PTR = Box::into_raw(Box::new(42));
     	drop(Box::from_raw(PTR));
     	let _ = *PTR;  // Use-after-free
     }
     ```

4. **Writing to read-only** memory (.rodata: string literals, static immutable data)

5. **Out-of-bounds**: <u>Reading</u> beyond allocated memory
   ```rust
   let arr = [1, 2, 3];
   let val = arr[1000];  // Read past bounds
   ```

6. **Buffer overflow**: <u>Writing</u> beyond allocated memory
   ```rust
   let mut arr = [1, 2, 3];
   arr[1000] = 42;  // Write past bounds
   ```

7. **Accessing unmapped memory**: Accessing memory not allocated to process
   ```rust
   unsafe {
       let ptr = 0xDEADBEEF as *const i32;
       let _ = *ptr;  // SIGSEGV - address not mapped
   }
   ```
