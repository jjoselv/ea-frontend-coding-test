# EA Frontend Coding Test

By: Juan José López Villar

## Description

This application consists in a small standalone, no server, with mock data, CMS Explorer, that renders the data in a tree-like fashion and can handle sentences addition and deletion, and when a node is selected, it shows the details of the node.

It uses **react-redux** to handle the application's state, it's inline-styled with [emotion-js](https://github.com/emotion-js/emotion), and uses **Font Awesome icons**.

The code is divided in to parts, the **application** code, which handle the main logic, the connection with redux's store, and the **components** code, which is independent of the business logic and can be reused.

## TODO

There is a large plethora of enhancements and requirements that this application should fulfill to pass a minimum quality standard, **that for timely reasons**, have not been accomplished, and is as follows:

* Connection with a dummy/real backend, from which the app would fetch the data, it is completly WRONG to have the mock data in the initial state of the reducer 😟 . I'd probably use redux-saga for this, since I have used it before and I think is very versatile.
* Proper styling, that should follow the application's syle guide and, for maintainability reasons, can rely on having the styles separate from the code.
* Enhancing the SpeachTree, and it's child components' functionality, having a toolbar with necessary tools (expand all, remove selected, refresh, etc.), supporting filtering, grouping, a list view.
* A proper 'New Node' modal to fill the new node's info as well as asking for confirmation to delete one.
* Implementing routing, te be able to navigate through the page (probably I'd choose the new reach-router, since it is more elegant and takes a11y into account).
* Internationalization and localization (i18n and L10n), of the application and it's strings, since it would not have sense to have this application without these requirements, even more in a Localization Project.
* Testing the components and the logic, through unit and integration tests.

















## Create React App Info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
