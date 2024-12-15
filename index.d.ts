declare module 'only-make' {
  export const make: <T>(makeValue: T | (() => T)) => T
}
