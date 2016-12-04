# isomorphic-webpack-demo

A demo showing how to setup [isomorphic-webpack](https://github.com/gajus/isomorphic-webpack).

## Setup

To start the server:

```sh
git clone git@github.com:gajus/isomorphic-webpack-demo.git
cd ./isomorphic-webpack-demo
npm install
export DEBUG=express:application,isomorphic-webpack
npm start
```

This will start the server on http://127.0.0.1:8000/.

## Scope of the demo

The demo is intentionally lightweight.

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

[Raise an issue](https://github.com/gajus/isomorphic-webpack-demo/issues) to request additions to this demonstration.
