**Playwright Automated Testing - LetCode Website**

**Overview**

This repository contains Playwright test scripts for practicing automated testing using LetCode. 
The LetCode website provides various UI elements to interact with, making it a great platform for learning Playwright automation.
This practice is very much a work in progress - as I try and work out how to test each element in playwright and learn about various automated testing techniques.
The goal is to explore different Playwright features while improving automation testing skills.

**Prerequisites**

Ensure you have the following installed:

Node.js (v16 or later recommended)

Playwright

**Installation**

Clone this repository and install dependencies:

# Clone the repository
git clone <your-repo-url>
cd <your-repo-folder>

# Install dependencies
npm install

**Running Tests**

To run all tests, use:

npx playwright test

To run a specific test file:

npx playwright test tests/sort.spec.js

To run tests in headed mode (see the browser UI):

npx playwright test --headed

**Test Scenarios**

The tests cover different interactions with LetCode:

Sorting Tests - Drag-and-drop functionality

Slider Tests - Moving sliders and validating results

Form Inputs - Validating text input fields and buttons

etc

**Debugging**

Run tests with debug mode:

npx playwright test --debug

Take screenshots during tests:

await page.screenshot({ path: 'screenshot.png' });

**Notes**

Playwright browsers are installed automatically.

Tests are written using Playwright Test Runner.

More test cases will be added as practice progresses.

**Contributions**

Since this is a practice project, contributions are not required but feedback is welcome and would be very gratefully received!

**License**

This project is for learning purposes only.

