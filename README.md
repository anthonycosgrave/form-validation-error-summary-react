# Accessbile form validation with an Error Summary in React

This project includes a simple form-level error summary that appears when validation fails on submission. The pattern is inspired by guidance from the [GOV.UK Design System](https://design-system.service.gov.uk/components/error-summary/) and [eBay’s client-side form validation pattern](https://opensource.ebay.com/mindpatterns/messaging/form-validation/) and has been adapted as part of a small React application for learning purposes.

Using React state, effects, and refs to explore established accessibility patterns such as:  
- moving focus to an error summary.
- linking errors to their associated fields. 
- preserving keyboard operability.

## Getting started

1. `npm install`  
2. `npm run dev`  
3. Open `http://localhost:5173` to view the form  

To run tests:

`npx playwright tests`

## Error summary and validation feedback

When submission fails, focus is moved programmatically to the error summary so that people are immediately informed that errors are present. Those using screen reader will have the errors announced to them. Each error is presented as text and linked to the relevant form field, allowing people to quickly navigate to and correct invalid inputs.

Inline error messages are associated with their inputs using `aria-describedby`, ensuring that error information is available to assistive technologies while the field is focused.

## PasswordInput component

A reusable password input with show/hide toggle functionality. Password requirements are displayed upfront to prevent errors, and the toggle button's state changes are announced to screen readers via an `aria-live` region. The component demonstrates accessible form patterns including proper labeling, `aria-describedby` for associating requirements and errors, and keyboard operability.

## Keyboard navigation

Keyboard interaction and focus behaviour are tested across browsers to verify that:

- Focus is correctly managed on validation failure.
- Error links are reachable and operable using the keyboard.
- Normal tab order is preserved when no errors are present.

Sequential tab order within the error summary is not strictly asserted after programmatic focus, as browser engines differ in how they handle focus history.

Tests instead focus on accessibility outcomes - focus placement, keyboard reachability, and correct navigation - rather than browser-specific tab mechanics.

### WebKit Tab Order/Keyboard Accessibility Issue 

Keyboard accessibility is not enabled by default on MacOS. People have to [enable themselves at the OS or Safari level](https://dequeuniversity.com/mac/keyboard-access-mac). It does not appear to be available via Playwright.  

None of the suggested workarounds I found in these links worked for me:  
- https://github.com/microsoft/playwright/issues/2114  
- https://github.com/microsoft/playwright/issues/5609  
- https://github.com/modernweb-dev/web/issues/1919


## WCAG Success criteria

This project demonstrates conformance with the following WCAG success criteria:

**[3.3.1 — Error Identification](https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html) (Level A)**  
"If an input error is automatically detected, the item that is in error is identified and the error is described to the user in text."

**[3.3.3 — Error Suggestion](https://www.w3.org/WAI/WCAG21/Understanding/error-suggestion.html) (Level AA) (conditionally)**  
"If an input error is detected and suggestions for correction are known, they are provided."

**[3.3.2 — Labels or Instructions](https://www.w3.org/WAI/WCAG21/Understanding/labels-or-instructions.html) (Level A)**  
"Labels or instructions are provided when content requires user input."

**[2.4.3 — Focus Order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html) (Level A) (contextually)**  
"If a web page can be navigated sequentially and the navigation sequences affect meaning or operation, focusable components receive focus in an order that preserves meaning and operability."

**[2.4.1 — Bypass Blocks](https://www.w3.org/WAI/WCAG21/Understanding/bypass-blocks.html) (Level A) (indirectly)**
* Users can jump directly to invalid fields
* Error summary links move focus to the field in error
* Keyboard and screen reader users benefit equally

**[2.1.1 — Keyboard](https://www.w3.org/WAI/WCAG21/Understanding/keyboard.html) (Level A)**  
"All functionality of the content is operable through a keyboard interface."

**[SC 1.4.1 - Use Of Color](https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html) (Level A)**
"Color is not the only way of distinguishing information."

## Tech Stack

* [Vite](https://vite.dev/)  
* [React](https://react.dev/)  
* [Axe-core](https://github.com/dequelabs/axe-core)  
* [Playwright](https://playwright.dev/)  
* [NVDA](https://www.nvaccess.org/)
* [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1)