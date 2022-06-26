# Pesto TDD Workshop

This repo is used in the Pesto's TDD 1hr workshop held on 25th June 2022 at 5PM IST.

## How to run test?

`npm run test`

This will also generate coverage

## How to run the project?

`npm run start`

## Coverage

`npm run test --coverage`

## What is TDD?

TDD means test driven development. In TDD we write the test-cases first and then write the code to make them pass. 

TDD is a prefer way of writing the test-cases in the projects. 

## Why to write Test-cases

1. Avoid bugs: Lot of bugs caught when the test-cases are written. Anytime a new feature is get added or a bug got fixed, test-cases helps to validate if rest of the code-base is safe from it.

2. Confidence: Test-cases helps in gaining confidence on their code-base.

3. Write 'accessible' code: React Testing Library force devs to write accessible JSX.

4. Base of documentation: Test-cases can act as the documentation and helps new joiners to understand what is happening in the code-base.

5. Quality code: Good test-cases force developers to write quality code.

## Type of testing?

1) Manual testing

2) Unit Testing

3) Integration Testing

4) End-to-End Testing

## What we will be doing in this repo?

We will be learning (implemented) unit testing. We are using React Testing Library (RTL) to write the test-cases.

## Tech-stack

1. ReactJS (used Create-react-app)

2. Typescript (for type checking)

3. React Testing Library (the default testing library comes with Create React App)

## Resources

[React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)


## Test-cases Anatomy

![](public/anatomy_test_case.jpg)

## Oragnaize Test-cases

1. Describe: To organize your test-cases we put our test-cases within `describe`. This known as `test-suite`.

2. test/it: To write the test-case we can either use `test()` or `it()`.

3. todo: To write the todo test-cases we use `test.todo()`

4. skip: To skip any test-case we use `test.skip()`