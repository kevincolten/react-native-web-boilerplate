const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const App = require('./components/App').default;
const { AppRegistry } = require('react-native-web');
AppRegistry.registerComponent('App', () => App)
const app = express();

app.get('*', (req, res) => {
  const { getStyleElement } = AppRegistry.getApplication('App', {})
  res.send(`
    <html>
      <head>${ReactDOMServer.renderToString(getStyleElement())}</head>
      <body>
        <div id="root">${ReactDOMServer.renderToString(<App />)}</div>
      </body>
    </html>
  `);
});

if (process.env.NODE_ENV === 'production') {
  app.listen(process.env.PORT || 8080);
} else {
  module.exports.default = app;
}
