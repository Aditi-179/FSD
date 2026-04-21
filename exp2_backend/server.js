require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// API Routes

// Get all contacts
app.get('/api/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts' });
  }
});

// Create a new contact
app.post('/api/contacts', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    
    // Basic validation
    if (!name || !email || !phone) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const newContact = new Contact({ name, email, phone });
    await newContact.save();
    res.status(201).json(newContact);
  } catch (err) {
    if (err.name === 'ValidationError') {
      res.status(400).json({ error: err.message });
    } else {
      res.status(500).json({ error: 'Failed to create contact' });
    }
  }
});

// Update a contact
app.put('/api/contacts/:id', async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      { name, email, phone },
      { new: true, runValidators: true }
    );
    
    if (!updatedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json(updatedContact);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update contact' });
  }
});

// Delete a contact
app.delete('/api/contacts/:id', async (req, res) => {
  try {
    const deletedContact = await Contact.findByIdAndDelete(req.params.id);
    if (!deletedContact) {
      return res.status(404).json({ error: 'Contact not found' });
    }
    res.json({ message: 'Contact deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete contact' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
