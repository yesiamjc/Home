const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://meetreports:1234@cluster0.4yvbnj1.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// POST data 


db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define the Meeting model and schema
const meetingSchema = new mongoose.Schema({
  meetingId: String,
  date: String,
  time: String,
  topic: String,
  summary: String,
});

const Meeting = mongoose.model('Meeting', meetingSchema);

// Route for handling form submission
app.post('/submit-meeting', (req, res) => {
  const { meetingId, date, time, topic, summary } = req.body;

  const newMeeting = new Meeting({
    meetingId,
    date,
    time,
    topic,
    summary,
  });

  newMeeting.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred' });
    } else {
      res.status(200).json({ message: 'Meeting submitted successfully' });
    }
  });
});

// Route for retrieving meeting data
app.get('/meetings', (req, res) => {
  Meeting.find({}, (err, meetings) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'An error occurred' });
    } else {
      res.status(200).json(meetings);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
