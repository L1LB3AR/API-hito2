const mongoose = require('mongoose');

const Books = mongoose.model('books');

// GET - Return all the books
exports.findAllbooks = function (req, res) {
  Books.find((err, books) => {
    if (err) res.send(500, err.message);

    console.log('GET /books');
    res.status(200).jsonp(books);
  });
};

// GET - Return a Book with specified ID
exports.findById = function (req, res) {
  Books.findById(req.params.id, (err, books) => {
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

  const booksmodel = new Books({
    title: req.body.title,
    pages: req.body.pages,
    genre: req.body.genre,
  });

  booksmodel.save((err, books) => {
    if (err) {
      return res.status(500).send(err.message);
    }
    res.status(200).jsonp(books);
  });
};
