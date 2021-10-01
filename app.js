// Variables
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const router = require('./router/userouter');

const app = express(); // inicializacion

// eslint-disable-next-line no-unused-vars
const server = http.createServer(app);

const Puerto = process.env.Puerto || 3000; // prepara el puerto

mongoose.connect('mongodb://localhost/books');

// Set API response
router.get('/', (req, res) => {
  res.json({
    status: 'API Its Working',
    message: 'Welcome to RESThub',
  });
});

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

app.use('/api', userouter);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', userouter);

// Import books controller
const BooksController = require('./controller/usercontroller');

// Books routes
const books = express.Router();

books.route('books');
books.get(BooksController.findAllbooks);
books.post(BooksController.addBook);

books.route('/books/:id');
books.get(BooksController.findById);
books.put(BooksController.updateBook);
books.delete(BooksController.deleteBook);

app.use('/api', books);

// Connection mongoose
// eslint-disable-next-line no-unused-vars
mongoose.connect('mongodb://localhost/books', (err, res) => {
  if (err) {
    console.log(`ERROR: connecting to Database. ${err}`);
  }
  app.listen(3000, () => {
    console.log('Node server running on https://localhost:3000');
  });
});

// Export API Routes
module.exports = router;
