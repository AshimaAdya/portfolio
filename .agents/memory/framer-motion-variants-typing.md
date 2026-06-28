---
name: Framer Motion variant typing
description: TypeScript TS2322 when using transition.type inside Framer Motion variant objects — requires as const assertion.
---

**Rule:** When defining Framer Motion variants with a `transition.type` string (e.g. `"spring"`, `"tween"`), always assert the value `as const`.

**Why:** TypeScript infers `type: "spring"` as `string`, which is incompatible with the `Variants` type's expected literal union. The TS error is TS2322 and only surfaces during `tsc --noEmit`, not at runtime.

**How to apply:**
```ts
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring" as const, stiffness: 50, damping: 20 }
  }
};
```
Alternatively, import `Variants` from `framer-motion` and type the object explicitly.
