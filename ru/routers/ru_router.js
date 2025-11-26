import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import lessonsRouter from "./lessons_router.js";
import writingRouter from "./writing_router.js";
import partsOfSpeechRouter from "./parts_of_speech_router.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'main.html'));
});

router.get('/contacts', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'contacts.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'about_us.html'));
});

router.use('/lesson_1', lessonsRouter("lesson_1"));
router.use('/lesson_2', lessonsRouter("lesson_2"));
router.use('/lesson_3', lessonsRouter("lesson_3"));
router.use('/lesson_4', lessonsRouter("lesson_4"));
router.use('/writing', writingRouter);
router.use('/parts_of_speech', partsOfSpeechRouter);

export default router;