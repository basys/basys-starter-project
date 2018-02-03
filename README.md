# Getting started
```sh
npm install
npm run basys dev
```

# Commands
`basys dev` - run webpack development server, automatically restarted backend server and this app builder.

`basys build` - bundle the project and prepare a build ready for production deployment in `dist/` directory.

`basys start` - start a server for launching a production build on developer's machine for testing purposes.

`basys lint` - perform linting of the project source code

`basys lint:fix` - automatically fix linting errors where possible and overwrite the code

`basys test:e2e` - run end-to-end tests

If you don't have a global `basys-cli` package installed, you can run these commands as `npm run basys dev`.
