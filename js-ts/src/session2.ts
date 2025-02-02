/**
 * type annotation
 * type inference
 * typeof operator
 * formValidator func for type inference
 *
 * some notes relate to type inference
 *
 * type alias
 * in terminal we can make command alias. a big command make it into small.
 * crypto.randomUUID()
 * [ (satisfies User) VS (as User) ] both are wrong (haha), altimate solution type annotation.
 * type casting
 * addr: User['address]   // returns an array
 * addr: User['address][number]   // returns a single data
 * will user (as) but have to learn the use case of it.
 *
 *
 *
 *
 *
 *
 * function type
 * function signature
 *          -> type CB = () => void
 *
 *
*/







// Why Type Inference Matters?

// Readability: Reduces clutter by eliminating unnecessary type annotations.
// Developer Efficiency: Saves time by not requiring explicit types for obvious cases.
// Error Prevention: Automatically enforces type safety based on inferred types.
// Scalability: In large codebases, consistent use of inference ensures fewer manual changes during refactoring.
// Fewer Bugs: Misaligned types are caught during development rather than at runtime.
// Best Practices for Using Type Inference:

// Trust TypeScript: Use inference where possible, but provide explicit types for:
// Public APIs
// Function parameters
// Complex or ambiguous types
// Combine with Explicit Types: Use type inference for local variables but provide types for more complex structures.
// Avoid any: Relying on inference discourages the use of the any type, improving type safety

