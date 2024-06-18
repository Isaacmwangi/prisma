import { Router } from 'express';
import { checkSchema } from 'express-validator';
import {
  getAllEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
} from '../controllers/eventsController.mjs';
import { createValidationSchema } from '../utils/validationSchema.mjs';

const router = Router();

router.get('/api/events', getAllEvents);
router.get('/api/events/:id', getEventById);
router.post('/api/events', checkSchema(createValidationSchema), createEvent);
router.put('/api/events/:id', updateEvent);
router.delete('/api/events/:id', deleteEvent);

export default router;
