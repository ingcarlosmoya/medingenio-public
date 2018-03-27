// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC1qrmjfJ-rQ4ZgPdOzS-W4OwfAHugYHbc",
    authDomain: "medingenio-public.firebaseapp.com",
    databaseURL: "https://medingenio-public.firebaseio.com",
    projectId: "medingenio-public",
    storageBucket: "medingenio-public.appspot.com",
    messagingSenderId: "213462689185"
  }
};
