const express = require("express");

const router = express.Router();

const redisClient = require("./redis");


// CREATE TODO
router.post("/", async (req, res) => {

    const { id, title } = req.body;

    if (!id || !title) {
        return res.status(400).json({
            error: "ID и title обязательны"
        });
    }

    await redisClient.hSet("todos", id, title);

    res.status(201).json({
        message: "TODO добавлено"
    });
});


// READ ALL TODOS
router.get("/", async (req, res) => {

    const todos = await redisClient.hGetAll("todos");

    res.json(todos);
});


// UPDATE TODO
router.put("/:id", async (req, res) => {

    const { id } = req.params;

    const { title } = req.body;

    if (!title) {
        return res.status(400).json({
            error: "Title обязателен"
        });
    }

    const exists = await redisClient.hExists("todos", id);

    if (!exists) {
        return res.status(404).json({
            error: "TODO не найден"
        });
    }

    await redisClient.hSet("todos", id, title);

    res.json({
        message: "TODO обновлен"
    });
});


// DELETE TODO
router.delete("/:id", async (req, res) => {

    const { id } = req.params;

    const exists = await redisClient.hExists("todos", id);

    if (!exists) {
        return res.status(404).json({
            error: "TODO не найден"
        });
    }

    await redisClient.hDel("todos", id);

    res.json({
        message: "TODO удален"
    });
});

module.exports = router;
