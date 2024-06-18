
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllEvents = async (req, res) => {
  try {
    const events = await prisma.event.findMany();
    res.json(events);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const event = await prisma.event.findUnique({
      where: { id: parseInt(id) },
    });
    if (!event) {
      return res.status(404).send('Event not found');
    }
    res.json(event);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const createEvent = async (req, res) => {
  try {
    const { body } = req;
    const newEvent = await prisma.event.create({ data: body });
    res.status(201).json(newEvent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create event', message: err.message });
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedEvent = await prisma.event.update({
      where: { id: parseInt(id) },
      data: body,
    });
    res.json(updatedEvent);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    await prisma.event.delete({ where: { id: parseInt(id) } });
    res.sendStatus(200);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
