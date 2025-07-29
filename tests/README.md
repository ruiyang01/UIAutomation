# Playwright Test Cases for automationexercise.com

This folder contains Playwright test scripts for the scenarios listed at [automationexercise.com/test_cases](https://automationexercise.com/test_cases).

## Structure
- Each test case is implemented as a separate `.spec.js` file.
- Test Case 1 (`test-case-01-register-user.spec.js`) is fully implemented as a template.
- To add more test cases, copy the template and update the steps as per the scenario.

## Running Tests

From the project root, run:

```
npx playwright test
```

## Adding More Test Cases
1. Copy `test-case-01-register-user.spec.js` to a new file, e.g., `test-case-02-login-user.spec.js`.
2. Update the test name and steps according to the scenario from the [test cases list](https://automationexercise.com/test_cases).
3. Use Playwright locators and assertions to automate the steps.

---
For more information, see the [Playwright documentation](https://playwright.dev/). 