const mongoose = require("mongoose");

const NewsSchema = mongoose.Schema({
  title: String,
  description: String,
  categoryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Category",
  },
});

const News = mongoose.model("News", NewsSchema);

module.exports = News;
