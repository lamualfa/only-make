<h1 align="center">only-make</h1>

<p align="center">✨ One-liner helper to initialize complex local dependent variable.</p>
<p align="center">
  <a href="https://www.npmjs.com/package/only-make"><img src="https://img.shields.io/badge/v9.9.9-f00" alt="NPM version"></a>
  <a href="https://github.com/lamualfa/only-make/blob/main/license"><img src="https://img.shields.io/badge/WTFPL-a020f0" alt="License"></a>
</p>
<blockquote align="center">Inspired by Rust's <a href="https://doc.rust-lang.org/reference/expressions/block-expr.html">Block Expressions</a>.</blockquote>

<br>

| Before                                                                                     | After                                                                                     |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------- |
| ![before](https://github.com/user-attachments/assets/cf22a531-7a7f-4ec8-aba1-1ca93c6a465d) | ![after](https://github.com/user-attachments/assets/afeca08d-74e2-4abf-aa27-16ba4b702262) |

<br>

![hr](https://user-images.githubusercontent.com/39755201/159233055-3bd55a37-7284-46ad-b759-5ab0c13b3828.png)

## Features

- 🔥 Zero dependencies
- ⚡ Only 1 line of source code
- 🚀 Supports on all Browser & Node.js versions
- ✅ Fully typed

## Installation

```bash
npm install only-make
```

## Recipes

- [Features](#features)
- [Installation](#installation)
- [Recipes](#recipes)
  - [Basic](#basic)
  - [Asynchronous](#asynchronous)
  - [Golang Like Error Handling](#golang-like-error-handling)
        - [Synchronously](#synchronously)
        - [Asynchronously](#asynchronously)
  - [Access `this`](#access-this)

### Basic

```js
import { make } from 'only-make'

const value = make(() => {
  // Make & return the value
})
```

### Asynchronous

```js
import { make } from 'only-make'

const value = await make(async () => {
  // Make & return the value
})
```

### Golang Like Error Handling

###### Synchronously

```js
import { make } from 'only-make'

const [value, error] = make(() => {
  // If success
  return [new_value, null]

  // If error
  return [null, new_error]
})

if (!error) {
  // Handle `error`
}

// Use `value` safely
```

###### Asynchronously

```js
import { make } from 'only-make'

const [value, error] = await make(async () => {
  // If success
  return [new_value, null]

  // If error
  return [null, new_error]
})

if (!error) {
  // Handle `error`
}

// Use `value` safely
```

### Access `this`

```js
import { make } from 'only-make'

class MyClass {
  doSomething() {
    const value = make(() => {
      // Use `this`
    })
  }
}
```
