const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
  name: String,
  description: String,
  newsId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "News",
  },
});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
