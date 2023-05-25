const { Router } = require("express");
const {
  categoriesController,
} = require("../controllers/categories.controller");

const router = Router();

router.get("/categories", categoriesController.getCategory);
router.post("/categories", categoriesController.createCategory);
router.delete("/categories/:id", categoriesController.deleteCategory);

module.exports = router;
