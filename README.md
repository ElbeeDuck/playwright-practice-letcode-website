# Playwright Test Automation - LetCode

This repository contains automated tests written in Playwright for practicing UI testing on the [LetCode](https://letcode.in/) website. The tests cover various UI elements and interactions to help understand Playwright's capabilities.

## Overview
This practice is very much a work in progress - as I try and work out how to test each element in Playwright and learn about various automated testing techniques. The goal is to explore different Playwright features while improving my automation testing skills.

## Getting Started

### Prerequisites
- Install [Node.js](https://nodejs.org/) (recommended LTS version)
- Install Playwright via npm:
  ```sh
  npm install -D @playwright/test
  ```
- Install Playwright dependencies:
  ```sh
  npx playwright install
  ```

### Running Tests
To execute the tests, run the following command:
```sh
npx playwright test
```

For headed mode (visible browser UI):
```sh
npx playwright test --headed
```

To run a specific test file:
```sh
npx playwright test tests/example.spec.js
```

### Debugging
Use Playwright's UI mode to debug tests:
```sh
npx playwright test --ui
```
Or add a debug statement within a test:
```js
await page.pause();
```

## Test Scenarios
The tests include:
- Drag and drop functionality
- Sorting items
- Handling sliders
- Working with forms and buttons
- Interacting with alerts and modals
- etc

## Contributions
This project is for learning purposes, but feel free to suggest improvements or share your own test cases

## License
This repository is open for learning purposes and does not have a specific license attached.


