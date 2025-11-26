import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import lessonsRouter from "./lessons_router.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/alphabet', (req, res) => {
  res.sendFile(path.join(__dirname, '..', "writing", 'alphabet.html'));
});

router.get('/consonants', (req, res) => {
  res.sendFile(path.join(__dirname, '..', "writing", 'consonants.html'));
});

router.get('/vowels', (req, res) => {
  res.sendFile(path.join(__dirname, '..', "writing", 'vowels.html'));
});

export default router;