This project attempts to illustrate the idea of prefab game objects in JavaScript while avoiding object-oriented programming features like classes or the language's builtin prototype-based inheritance system.

Usage:

`npm run generate`

---

**Data value reuse**: A prefab isntance can override the data values defined in a parent object. In JavaScript, the `...` *spread* syntax easily allows the values of one object to be expanded as the initializers for another. In this project, the pink color of `elementalTemplate` is used to provide defaults for the Argon and Cobalt objects.

**Data shape reuse**: A prefab instance can structurally extend one or more other structure. In this project, `rectObject` inherits structure from both `baseObject` (the base for all game objects) and `spatialAttributes` (a mixin).

**Behavior reuse**: A prefab instance can inherit behavior from a parent by either copying a reference to the parent's behavior implementation or delegating to it dynamically. In this project, the default for `guyObject` is to override the rendering behavior that might otherwise be used by the `rectObject` parent. However, it would be reasonable for the implementation of `render_guy` to delegate to `render_rect` (not shown here). 