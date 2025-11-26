import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function createLessonsRouter(lessonFolderName) {
    const router = express.Router();
    const base = path.join(__dirname, '..', lessonFolderName);

    router.get('/overview', (req, res) => {
        res.sendFile(path.join(base, 'overview.html'));
    });
    router.get('/grammar', (req, res) => {
        res.sendFile(path.join(base, 'grammar.html'));
    });
    router.get('/reading', (req, res) => {
        res.sendFile(path.join(base, 'reading.html'));
    });
    router.get('/exercises', (req, res) => {
        res.sendFile(path.join(base, 'exercises.html'));
    });

    return router;
}