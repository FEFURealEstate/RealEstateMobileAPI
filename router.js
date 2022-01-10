import express from 'express';
import Controller from './controller.js';

const router = express.Router();

router.get("/events", Controller.getEvents)
router.post("/event", Controller.createEvent)
router.delete("/eventDel", Controller.deleteEvent)
router.patch("/eventUpd", Controller.updateEvent)

export default router;