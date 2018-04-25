const express = require('express');
const React = require('react');
const { renderToString } = require('react-dom/server');
const serialize = require('serialize-javascript');
const App = require('./containers/App').default;
const assets = require('build/assets.json');
const routes = require('./routes').default;
const { matchPath, StaticRouter } = require('react-router-dom');
const { AppRegistry } = require('react-native-web');
AppRegistry.registerComponent('App', () => App)
const app = express();

app.get('*', (req, res, next) => {
  const activeRoute = routes.find((route) => matchPath(req.url, route)) || {};

  const promise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData(req.path)
    : Promise.resolve();

  promise.then((data) => {
    const { getStyleElement } = AppRegistry.getApplication('App', {});
    const context = { data };
    const markup = renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );
    res.send(`
      <html>
        <head>${renderToString(getStyleElement())}</head>
        <body>
          <div id="root">${markup}</div>
          ${assets.main.map(src => `<script src="${src}" defer></script>`)}
          <script>window.__INITIAL_DATA__ = ${serialize(data)}</script>
        </body>
      </html>
    `);
  }).catch(next);
});

if (process.env.NODE_ENV === 'production') {
  app.listen(process.env.PORT || 8080);
} else {
  module.exports.default = app;
}
