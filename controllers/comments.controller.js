const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  getComment: async (req, res) => {
    try {
      const data = await Comment.find({}).populate("newsId");
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  createComment: async (req, res) => {
    try {
      await Comment.create({
        name: req.body.name,
        description: req.body.description,
        newsId: req.body.newsId,
      });
      res.json("Коментарий добавлен");
    } catch (error) {
      res.json(error);
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.findOneAndRemove(req.body.id);
      res.json("Комментарий удален");
    } catch (error) {
      res.json(error);
    }
  },
};
