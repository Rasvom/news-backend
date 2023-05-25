const News = require("../models/News.model");

module.exports.newsController = {
  getNews: async (req, res) => {
    try {
      const data = await News.find().populate("categoryId");
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getNewsById: async (req, res) => {
    try {
      const data = await News.findById(req.body.newsId).populate("categoryId");
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  getNewsCategory: async (req, res) => {
    try {
      const data = await News.find(req.body.categoryId).populate("categoryId");
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  createNews: async (req, res) => {
    try {
      await News.create({
        title: req.body.title,
        description: req.body.description,
        categoryId: req.body.categoryId,
      });
      res.json("Новость добавлена");
    } catch (error) {
      res.json(error);
    }
  },
  deleteNews: async (req, res) => {
    try {
      await findByIdAndRemove(req.body.id);
      res.json("Новость удалена");
    } catch (error) {
      res.json(error);
    }
  },
  patchNews: async (req, res) => {
    try {
      await News.findByIdAndUpdate(req.body.id, {
        title: req.body.title,
        description: req.body.description,
        categoryId: req.body.categoryId,
      });
      res.json("Новость обновлена");
    } catch (error) {
      res.json(error);
    }
  },
};
