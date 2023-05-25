const { Router } = require("express");
const {newsController} = require("../controllers/news.controller");

const router = Router();

router.get("/news", newsController.getNews);
router.post("/news", newsController.createNews);
router.patch("/news", newsController.patchNews);
router.post("/news/:id", newsController.getNewsById);
router.post("/news/:id", newsController.getNewsCategory);
router.delete("/news/:id", newsController.deleteNews);

module.exports = router;
