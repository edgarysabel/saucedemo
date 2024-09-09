# QA Automation Challenge

This project is a web test automation framework using [Cypress](https://www.cypress.io/) version 13, written in JavaScript. It tests the webpage [Sauce Demo](https://saucedemo.com/) for UI.

These were the scenerios were automated:

    1. Log In
    2. Log Out
    3. Add an item to Cart
    4. Remove an item from the Cart
    5. Checkout an item in the Cart

## Tech Stack

- [Javascript.](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
- [Nodejs.](https://nodejs.org/en/about/)
- [Cypress.io](https://docs.cypress.io/guides/overview/why-cypress)
- [FalsoJS](https://ngneat.github.io/falso/)

## Run Locally

#### Required to run project

- [Node.js](https://nodejs.org/en/download/)

###

- Clone repository:

```bash
  git clone https://github.com/edgarysabel/saucedemo.git
```

- Install dependencies:

```bash
  npm install
```

- Run project in headless mode:

```bash
  npm run cy:run
```

- Run project in headed mode:

```bash
  npm run cy:open
```

This will run all the tests.

## Project Structure

#### UI testing configuration

The file cypress.env.json under root directory contains needed credentails for UI testing. Working credentials are currently included with the project.

```bash
  {
  "FRONTEND_URL": "https://saucedemo.com/",
  }

```

## Must Know

- To use problem user, change user on login in the test case.

- A custom POM Pattern with Javascript and Cypress was used.

- The static data is stored on `fixture` for each test case.
