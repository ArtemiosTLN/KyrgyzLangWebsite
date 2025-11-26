import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import lessonsRouter from "./lessons_router.js";

const router = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get('/nouns', (req, res) => {
  res.sendFile(path.join(__dirname, '..', "parts_of_speech", 'nouns.html'));
});

router.get('/numerals', (req, res) => {
  res.sendFile(path.join(__dirname, '..', "parts_of_speech", 'numerals.html'));
});

router.get('/personal_pronouns', (req, res) => {
  res.sendFile(path.join(__dirname, '..', "parts_of_speech", 'personal_pronouns.html'));
});

export default router;