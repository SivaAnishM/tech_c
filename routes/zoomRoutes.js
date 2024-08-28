import express from 'express';
import { scheduleMeeting } from '../controllers/zoomController.js';

const router = express.Router();

router.post('/schedule', scheduleMeeting);

export default router;
