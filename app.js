const express = require('express');

const app = express(); // inicializacion

const Puerto = process.env.Puerto || 3000; // prepara el puerto

// methods

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/', (req, res) => {
  res.send('Post request to the homepage');
});

app.listen(Puerto, () => {
  console.log(`Running Resthub on port ${Puerto}`);
});

// import route

const userouter = require('./router/userouter');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', userouter);
