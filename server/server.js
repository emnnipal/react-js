const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env') });

const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(
  '/',
  express.static(path.join(__dirname, '../build'), {
    setHeaders: (res, path) => {
      if (path.match(/(\.html)$/)) {
        return;
      }
      res.setHeader('Cache-Control', 'public, max-age=31536000');
    },
  })
);

app.use('/health-check', (_, res) => res.status(200).send('OK!'));

app.get('*', (_, res) => {
  res.setHeader('Cache-Control', 'no-cache');
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`[${new Date().toJSON()}]: Server listening on ${PORT}`);
});
