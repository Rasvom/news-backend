const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use(require("./routes/news.route.js"));
app.use(require("./routes/categories.route.js"));
app.use(require("./routes/comments.route.js"));

mongoose
  .connect(
    "mongodb+srv://rasvom:qwerty1234@cluster0.2rrmmtm.mongodb.net/newsData?retryWrites=true&w=majority"
  )
  .then(() => console.log("Успешно соединились с сервером MongoDB"))
  .catch(() => console.log("Ошибка при соединении с сервером MongoDB"));

app.listen(4000, () => {
  console.log("Сервер запущен успешно");
});
