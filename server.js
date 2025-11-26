import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import ruRouter from "./ru/routers/ru_router.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "ru/main.html"));
});
app.use('/ru', ruRouter);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "ru/404.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на порте: ${PORT}`));