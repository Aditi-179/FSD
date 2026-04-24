const express = require('express');
const router = express.Router();
const Registration = require('../models/Registration');

// POST /registrations - Register user
router.post('/', async (req, res) => {
  try {
    const { name, email, eventName } = req.body;

    // Check if user is already registered for the same event
    const existingRegistration = await Registration.findOne({ email, eventName });
    if (existingRegistration) {
      return res.status(400).json({ message: 'User already registered for this event' });
    }

    const newRegistration = new Registration({ name, email, eventName });
    await newRegistration.save();

    res.status(201).json({ message: 'Registration successful', registration: newRegistration });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Email is already in use for another event. Please use unique email per registration for this demo or adjust the schema.' });
    }
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// GET /registrations - View registrations
router.get('/', async (req, res) => {
  try {
    const registrations = await Registration.find().sort({ createdAt: -1 });
    res.status(200).json(registrations);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// DELETE /registrations/:id - Cancel registration
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRegistration = await Registration.findByIdAndDelete(id);

    if (!deletedRegistration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    res.status(200).json({ message: 'Registration cancelled successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

module.exports = router;
