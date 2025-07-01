/**
 * web server routes
 * @param {import('express').Express} app
 */
export default function (app) {
  app.get('/ping', (req, res) => {
    res.send('pong');
  });
}