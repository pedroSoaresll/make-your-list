# Make Your List

![deployment badge status](https://vercelbadge.vercel.app/api/pedroSoaresll/wedding-gifts)
![checkly badge status](https://api.checklyhq.com/v1/badges/checks/44cf6b91-3576-42fe-bed2-ca5de9fd7122?style=flat&theme=default&responseTime=true)

The main goal of this repository is to put technologies learned into practice. You can follow what is been to arrive following the issues, and working in progress following the pull requests opened.

This is a simple application that creates a space to have your lists separated from other people. This approach is a good way to share your URL generated to friends or family to share your list of items.

The main technology used to build this project was React.js using the [CRA (Create React App)](https://create-react-app.dev).

## Features already implemented

- [x] CRA usage
- [x] Typescript usage
- [x] Lighthouse running on Github Actions on every pull request
- [x] .nvmrc setting the node version
- [x] Code format: Eslint and Prettier setup
- [x] Chakra UI usage as the design system
- [x] Axios usage as the network handler
- [x] React-Query as the state distribution to requests
- [x] React-Hook-Form as the formulary handler
- [x] React-Router-Dom as the page handler
- [x] Unit tests implemented using Jest
- [x] MSW (Mock Service Worker) usage to intercept requests for test environment only
- [x] Service Worker installed to cache bundles.
- [x] Github Actions on every pull request targeting the branch "main" integrating the app (CI)
- [x] Vercel integration to deployment (CD)
- [x] Checkly integration to check every 12 hours the status of the application
- [ ] Sentry as the monitoring service for the application
- [ ] Sonarqube as the code quality and code security analyzer
- [ ] Cypress as the end-to-end tool testing the application
- [ ] Multi-language support

## Environments

If you want to enter this application to see how it is, follow the links below:

- [Production](https://makeyourlist.vercel.app/) The app tries to connect to the real backend server.
- [Preview](https://github.com/pedroSoaresll/make-your-list/deployments/activity_log?environment=Preview) The app runs based on mocks intercepting the requests to the backend server. After accessing that link choose to view a deployment version.

## Running application locally

After cloning the repository, open a terminal inside the repository directory and follow the steps below.

Install dependencies

```sh
npm i
```

Copy and rename the file `.env.example` to `.env`

If you want MSW to intercept the requests to the backend server keep the `REACT_APP_USE_API_MOCKED=true` in the `.env` file.

You can also set your backend server domain by changing the `REACT_APP_LISTS_API``

Start the application development server

```sh
npm start
```

To run unit tests:

```sh
npm test
```

> This command also will generated a coverage report
