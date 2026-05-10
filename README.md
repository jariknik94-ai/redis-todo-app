# Redis TODO API

## Описание проекта

Проект представляет собой REST API для управления TODO задачами с использованием Redis в качестве хранилища данных.

Реализованы CRUD операции:
- Создание задачи
- Получение списка задач
- Обновление задачи
- Удаление задачи

---

## Установка Redis

### Ubuntu/Debian

```bash
sudo apt update
sudo apt install redis
sudo systemctl start redis-server
redis-cli ping
