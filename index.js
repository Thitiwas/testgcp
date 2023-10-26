const express = require('express');
var cors = require('cors')
const app = express();

app.use(cors('*'))

app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});

app.post('/', (req, res) => {
  console.log('in');
  console.log(req);
  res.status(200).send('OK')
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`helloworld: listening on port ${port}`);
});