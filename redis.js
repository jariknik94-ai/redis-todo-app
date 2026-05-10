// Подключаем библиотеку redis
const redis = require("redis");

// Создаем Redis-клиент
const client = redis.createClient();

// Событие успешного подключения
client.on("connect", () => {
    console.log("Подключено к Redis");
});

// Событие ошибки
client.on("error", (err) => {
    console.error("Ошибка Redis:", err);
});

// Подключаемся к Redis
client.connect();

// Экспортируем клиент
module.exports = client;
