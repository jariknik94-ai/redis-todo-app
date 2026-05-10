const express = require("express");

const bodyParser = require("body-parser");

const todoRoutes = require("./todo");

const app = express();

// Подключаем JSON parser
app.use(bodyParser.json());

// Подключаем маршруты
app.use("/api/todos", todoRoutes);

// Порт сервера
const PORT = 3000;

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
