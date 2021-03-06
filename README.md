# 👩🏽‍💻 Pesto TDD Workshop

This repo is used in the Pesto's TDD 1hr workshop held on 25th June 2022 at 5PM IST.

## How to run test?

`npm run test`

This will also generate coverage

## How to run the project?

`npm run start`

## Coverage

`npm run test --coverage`

## ❓ What is TDD?

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

## How does it look in code?

![](public/anatomy-code.jpg)

## Deep dive

We are using Jest and React-testing-library which comes default with create-react-app. If you want to install it then here are the commands:

`npm install --save-dev @testing-library/react`

### Why React-Testing-Library?

React Testing Library is using dom-testing utitlity. It provides an easy and friendly way to test the code. It has query methods which helps the users to write test-case in an easy way.

The prinicipal of the React-testing-libray is "Write test cases the way your users will use the software".

It means you don't need to go in all nitty-gritty but focus only on how user is going to use the software or application. Eg: for your user it doesn't matter how the API request is happening and where but what the user would be interested in data.So, your priority should be testing the data rather than getting into detail testing the API.

[React testing Library](https://testing-library.com/)

### Query Methods

React Testing Library provides query method which is a way to query the elements in the document. There are 3 ways one can query:

1. getBy*

2. queryBy*

3. findBy*

The difference between `get`, `query`, and `find` is what it returns when there is no matching result.

`getBy*`: When there is no match found it will return a descriptive error.

`queryBy*`: When there is no match found it will return  NULL.

`findBy*`: It returns Promise. When there is no match found then Promise will be rejected or if more than one element is found after a default timeout of 1000ms.

#### Using Query Methods

There are multiple query methods available to query the elements from the DOM. Eg. `getByRole`, `getByText`. If there are multiple elements then we can use `getAllByRole`, `getAllByText`.

## Testing Scenario

1. Testing the component is render

2. Testing the JSX of component (HTML tags)

3. Testing the content

4. Testing the attributes

5. Testing the events

6. Snapshot testing

7. Tesitng Props

8. Testing API content

