# PQI TOOLS

![GitHub package.json version](https://img.shields.io/github/package-json/v/mrsantacruz86/PQI-Database.svg)

A set of audit tools create for His House Children's Home PQI department.
The app also provides several reporting features that allow to visulize, analize and share the results of the audits.

## Main dependencies

![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/mrsantacruz86/PQI-Database/bcryptjs.svg)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/mrsantacruz86/PQI-Database/express.svg)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/mrsantacruz86/PQI-Database/jsonwebtoken.svg)
![GitHub package.json dependency version (prod)](https://img.shields.io/github/package-json/dependency-version/mrsantacruz86/PQI-Database/mongoose.svg)

## Front-end

The app is structures as a single page application with its front-end running on ReactJS. The project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Back-end

The back-end run's on NodeJS and the http server of choice was ExpressJS.
For more information on node and express here is the documentation: [NodeJS](https://nodejs.org), [Express](http://expressjs.com)
 
The back-end is listening for requests on [http://localhost:3001](http://localhost:3001) and the front end reference this address trough a proxy connection specified in `./client/package.json`



## Available Scripts

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

`yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

`yarn install` or `yarn`

Node checks both: `./client/package.json` and `./package.json` and install the dependencies specified in those config files.

`yarn upgrade`

Thi command will upgrade all the existent dependencies in client side and server side to their lates stable version. Use this feature with caution, some of the newest versions of the dependencies might have incompatibilities and make the app to crash. 

## Deployment

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This app has been configure to deploy to heroku.
`heroku-cli` is required to perform this operation.

`heroku create "name-of-the-app"`

Type this line into your terminal to create a heroku app.

Before deployment it is important that the database is created through `mlab`, to do this use the folowing command.

`heroku addons:create mongolab`

Finally you use the command:

`yarn deploy`


## Settin up environment variables

If you are deploying through heroku you must enable let heroku nows abouth your Jason Web Tokens secret key. Failing to prvide this key will cause the authentication of you app to stop working and cause a potential break of your app. You can set up your environment variables by creating a `.env`file in the root directory of the app, then setup the env vars this way
```
JWT_SECRET=your_jwt_secret_key
PORT=3001
```

To check your environment variables in production you can type this command in the CLI:

```heroku config```

to setup the jwt key in production you can type this command in the CLI:

```heroku config:set JWT_SECRET=your_jwt_secret_key```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).