# UI Automation for automationexercise.com

This project contains Playwright end-to-end tests for the scenarios listed at [automationexercise.com/test_cases](https://automationexercise.com/test_cases).

## Setup

1. Install dependencies:
   ```
   npm install
   ```
2. Install browsers (if not already):
   ```
   npx playwright install
   ```

## Running Tests

To run all tests:
```
npx playwright test
```

Test files are located in the `tests/` directory. Each test case is implemented as a separate file.

## Adding Test Cases
See `tests/README.md` for instructions on adding more test cases.

---
For more information, see the [Playwright documentation](https://playwright.dev/). 