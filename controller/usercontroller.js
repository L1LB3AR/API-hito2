/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable no-shadow */
const mongoose = require('mongoose');

const Book = mongoose.model('Books');

// GET - Return all the books
exports.findAllbooks = function (req, res) {
  Book.find((err, books) => {
    if (err) res.send(500, err.message);

    console.log('GET /books');
    res.status(200).jsonp(books);
  });
};

// GET - Return a Book with specified ID
exports.findById = function (req, res) {
  Book.findById(req.params.id, (err, books) => {
    if (err) {
      return res.send(500, err.message);
    }

    console.log(`GET /books/${req.params.id}`);
    res.status(200).jsonp(books);
  });
};

// POST - Insert a new Book
exports.addBook = function (req, res) {
  console.log('Post');
  console.log(req.body);

  // eslint-disable-next-line no-use-before-define
  const Book = new Book({
    title: req.body.title,
    pages: req.body.pages,
    genre: req.body.genre,
  });

  Book.save((err, book) => {
    if (err) return res.status(500).send(err.message);

    res.status(200).jsonp(book);
  });
};

// PUT - Update a book already exists
exports.updateBook = function (req, res) {
  Book.findById(req.params.id, (err, books) => {
    books.title = req.body.petId;
    books.pages = req.body.pages;
    books.genre = req.body.genre;

    books.save((err) => {
      if (err) return res.status(500).send(err.message);
      res.status(200).jsonp(books);
    });
  });
};

// DELETE - Delete a Book with specified ID
exports.deleteBook = function (req, res) {
  Book.findById(req.params.id, (err, books) => {
    books.remove((err) => {
      if (err) return res.status(500).send(err.message);
      res.status(200).send();
    });
  });
};
