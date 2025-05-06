const { Schema, model } = require('mongoose');

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  image : {
    type: String,
    default: "default-image.jpg"
  }
})

module.exports = model('Article', ArticleSchema, "articles");
// The third parameter "articles" is the name of the collection in MongoDB. If you don't specify it, Mongoose will use the pluralized version of the model name by default.
// In this case, it would create a collection named "articles" in the MongoDB database.
