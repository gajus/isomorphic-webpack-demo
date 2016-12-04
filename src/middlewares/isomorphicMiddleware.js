import {
  renderToString
} from 'react-dom/server';

const renderFullPage = (body) => {
  // eslint-disable-next-line no-restricted-syntax
  return `
  <!doctype html>
  <html>
    <head></head>
    <body>
      <div id='app'>${body}</div>

      <script src='/static/app.js'></script>
    </body>
  </html>
  `;
};

const handleRoute = (res) => {
  // eslint-disable-next-line global-require
  const app = require('./../app').default;

  const rendered = renderToString(app);

  res
    .status(200)
    .send(renderFullPage(rendered));
};

export default (req, res) => {
  handleRoute(res);
};
