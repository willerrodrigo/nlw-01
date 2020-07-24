<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src=".github/logo.svg" width="250px" />
</h1>

<h2 align="center">
   ♻️ NextLevelWeek 1.0 ♻️
</h2>

<p align="center">
 <img src="https://img.shields.io/static/v1?label=PRs&message=welcome&color=7159c1&labelColor=000000" alt="PRs welcome!" />

  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=7159c1&labelColor=000000">
</p>

<p align="center">
  <a href="#computer-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-built-with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Get in touch</a>
  </p>

## :computer: Project 

 Ecoleta is an application that aims to help people find places that collect specific types of waste, encouraging people to recycle more.

<p align="center">
  <img alt="Ecoleta" src=".github/ecoleta.png" width="100%">
</p>

## :rocket: Built with

This project was developed with the following technologies:

<details>
  <summary>Backend</summary>

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [TypeORM](https://typeorm.io/)
-   [Typescript](https://www.typescriptlang.org/)
-   [TS-Node-Dev](https://www.npmjs.com/package/ts-node-dev)
-   [Celebrate](https://github.com/arb/celebrate)
-   [Tsyringe](https://github.com/microsoft/tsyringe)
-   [uuidv4](https://www.npmjs.com/package/uuidv4)
-   [Cors](https://www.npmjs.com/package/cors)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>

<details>
  <summary>Frontend</summary>

-   [React](https://pt-br.reactjs.org/)
-   [Typescript](https://www.typescriptlang.org/)
-   [Styled Components](https://styled-components.com/)
-   [Context API](https://reactjs.org/docs/context.html)
-   [React-toggle](https://github.com/aaronshaf/react-toggle)
-   [React-spring](https://www.react-spring.io/)
-   [uuidv4](https://www.npmjs.com/package/uuidv4)
-   [Axios](https://www.npmjs.com/package/axios)
-   [React Dropzone](https://github.com/react-dropzone/react-dropzone)
-   [React Icons](https://react-icons.netlify.com/#/)
-   [Leaflet](https://leafletjs.com/)
-   [React Leaflet](https://react-leaflet.js.org/)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>

<details>
  <summary>Mobile</summary>

-   [React](https://pt-br.reactjs.org/)
-   [React Native](https://reactnative.dev/)
-   [Expo](https://expo.io/learn)
-   [Styled Components](https://styled-components.com/)
-   [Typescript](https://www.typescriptlang.org/)
-   [React Navigation](https://reactnavigation.org/)
-   [Axios](https://www.npmjs.com/package/axios)
-   [Expo Google Fonts](https://github.com/expo/google-fonts)
-   [Expo Location](https://docs.expo.io/versions/latest/sdk/location/)
-   [Expo Mail Composer](https://docs.expo.io/versions/latest/sdk/mail-composer/)
-   [React Native Appearance](https://github.com/expo/react-native-appearance)
-   [React Native Picker Select](https://www.npmjs.com/package/react-native-picker-select)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

</details>

## :information_source: How to run

### Requirements

To run the application you will need:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)

Now clone the repository and install the dependencies.

### Server
```bash
# to clone the repository
$ git clone https://github.com/willerrodrigo/nlw-01.git

# go into the server folder
$ cd nlw-01/server

# install the server dependencies
$ yarn

# run Migrates
$ yarn knex:migrate

# run Seeds
$ yarn knex:seed

# start server
$ yarn dev

# running on port 3333
```

### Web

```bash
# in another tab of the terminal install the web dependencies and run it 
$ cd web
$ yarn
$ yarn start
```

### Mobile

The Application was developed using Expo. It is a free and open source toolchain built around React Native to facilitate the process of running and testing applications. [Click here](https://expo.io/learn) to get start with Expo.

```bash
# install the dependencies
cd mobile
yarn
```

In order to run the application on your device, you need to change the ip config.

[api.ts](https://github.com/willerrodrigo/nlw-01/blob/master/mobile/src/services/api.ts)
```javascript
  baseURL: 'http://192.168.0.101:3333',
```
replace 192.168.0.101 with your machine's ip.

Now with everything on place, run the application.

```bash

# to run the app
yarn start

```
Expo will open a page in your browser, scan the QRcode on the page and wait for the app to load.

## :memo: License

This project is under the MIT license. See the [LICENSE](https://github.com/willerrodrigo/nlw-01/blob/master/LICENSE) for more information

## :mailbox_with_mail: Get in touch!

<a href="https://www.linkedin.com/in/willer-rodrigo-silva-b23b0116a" target="_blank" >
  <img alt="Linkedin - Willer Rodrigo" src="https://img.shields.io/badge/Linkedin--%23F8952D?style=social&logo=linkedin">
</a>&nbsp;&nbsp;&nbsp;

---

Made with :coffee: and ❤️ by Willer Rodrigo.