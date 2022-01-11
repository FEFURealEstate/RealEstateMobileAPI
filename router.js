import express from 'express';
import Controller from './controller.js';

const router = express.Router();

router.get("/events", Controller.getEvents);
router.post("/event", Controller.createEvent);
router.delete("/eventDel", Controller.deleteEvent);
router.post("/eventUpd", Controller.updateEvent);

router.post("/login", Controller.login);
router.post("/logout", Controller.logout);

export default router;