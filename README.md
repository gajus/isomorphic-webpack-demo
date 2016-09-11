# isomorphic-webpack-boilerplate

A boilerplate showing how to setup [isomorphic-webpack](https://github.com/gajus/isomorphic-webpack).

## Setup

To start the server:

```sh
git clone git@github.com:gajus/isomorphic-webpack-boilerplate.git
cd ./isomorphic-webpack-boilerplate
npm install
export DEBUG=express:application,isomorphic-webpack
npm start
```

## Scope

This boilerpate is intentionally lightweight.

The generated output is limited to:

```html
<!doctype html>
<html>
  <head></head>
  <body>
    <div id='app'>
      <div class="app-___style___greetings" data-reactroot="" data-reactid="1" data-react-checksum="72097819">Hello, World!</div>
    </div>

    <script src='/static/app.js'></script>
  </body>
</html>
```
