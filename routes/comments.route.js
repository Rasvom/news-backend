const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");

const router = Router();

router.get("/comments", commentsController.getComment);
router.post("/comments", commentsController.createComment);
router.delete("/comments/:id", commentsController.deleteComment);

module.exports = router;
