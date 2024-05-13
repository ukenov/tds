# User Management Web Application

This project is a web application built with React.js and TypeScript for managing a list of users. It allows users to view, add, edit, and delete user records.

## Features

1. **User List**: Displays a list of users in a table format with columns for ID, First Name, Last Name, Email, Skills, and Registration Date.

2. **Add User**: Provides a form for adding a new user with fields for First Name, Last Name, Email, and Skills. Users can add multiple skills by entering them as a comma-separated list.

3. **Edit User**: Allows users to edit existing user records. Prepopulates the form with the current user data for easy editing.

4. **Delete User**: Enables users to delete a user record by their ID.

## Tools and Libraries

- **API**: Data for users is fetched from [JSONPlaceholder](https://my-json-server.typicode.com/ukenov/db/users)

- **Styling**: Tailwind CSS is used for styling the user interface.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.