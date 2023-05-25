const Category = require("../models/Category.model");

module.exports.categoriesController = {
  getCategory: async (req, res) => {
    try {
      const data = await Category.find({});
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  createCategory: async (req, res) => {
    try {
      const data = await Category.create({
        name: req.body.name,
      });
      res.json("Категория добавлена");
    } catch (error) {
      res.json(error);
    }
  },
  deleteCategory: async (req, res) => {
    try {
      const data = await findByIdAndRemove(req.body.id);
      res.json("Категория удалена");
    } catch (error) {
      res.json(error);
    }
  },
};
