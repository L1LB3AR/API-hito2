const mongoose = require('mongoose');

const { Schema } = mongoose.Schema;
// Setup schema

const bookSchema = new Schema({
  title: { type: String },
  pages: { type: Number },
  genre: {
    type: String,
    enum: ['Mystery', 'Drama', 'Romantic', 'Sci-Fi'],
  },

});

// Export model

module.exports = mongoose.model('Books', bookSchema);
