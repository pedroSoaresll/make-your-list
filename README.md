# Make Your List

![deployment badge status](https://vercelbadge.vercel.app/api/pedroSoaresll/wedding-gifts)
![checkly badge status](https://api.checklyhq.com/v1/badges/checks/44cf6b91-3576-42fe-bed2-ca5de9fd7122?style=flat&theme=default&responseTime=true)

The main goal of this repository is to put technologies learned into practice. You can follow what is been to arrive following the issues, and working in progress following the pull requests opened.

This is a simple application that creates a space to have your lists separated from other people. This approach is a good way to share your URL generated to friends or family to share your list of items.

The main technology used to build this project was **React.js** using the [CRA (Create React App)](https://create-react-app.dev).

## Backend repository

The backend for this project has been developed by [Arthur Soares](https://github.com/Arthur-ext) in this repository [Make Your List API](https://github.com/Arthur-ext/make-your-list-api)

## Environments

If you want to enter this application to see how it is, follow the links below:

- [Production](https://makeyourlist.vercel.app/) The app tries to connect to the real backend server.
- [Preview](https://github.com/pedroSoaresll/make-your-list/deployments/activity_log?environment=Preview) The app runs based on mocks intercepting the requests to the backend server. After accessing that link chooses to view a deployment version.

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

## Running application locally

After cloning the repository, open a terminal inside the repository directory and follow the steps below.

Install dependencies

```sh
npm i
```

Copy and rename the file `.env.example` to `.env`

If you want MSW to intercept the requests to the backend server keep the `REACT_APP_USE_API_MOCKED=true` in the `.env` file.

You can also set your backend server domain by changing the `REACT_APP_LISTS_API`

Start application

```sh
npm start
```

To run unit tests:

```sh
npm test
```

> This command also will generated a coverage report

To build the app:

```sh
npm run build
```

## Where is the app deployed?

This repository is integrated with [Vercel](https://vercel.com) to deploy new versions on each environment of this app, production and previews.

When opening a new pull request, Vercel rapidly starts a build to deploy that source code to a preview environment.

When merged a pull request to the branch main, Vercel starts a deployment to the production environment.

## Github Action workflow

This repository has a workflow built to integrate the source code on every pull request opened to the default branch, "main".

The workflow consists of these steps:

- Install dependencies
- Code lint
- Code format
- test
- build
- Lighthouse check

Workflow map:

![image](https://user-images.githubusercontent.com/11558773/186775163-04809fba-219b-4acd-9a11-2a8cbdee98d2.png)

## Dependabot

Dependabot is activated to every Monday check if this repository has a dependency vulnerability.

If Dependabot finds a dependency vulnerable, it'll open a pull request describing and suggesting a change upgrading usually upgrading the package version.

## Author

[Pedro Oliveira](https://github.com/pedroSoaresll)
