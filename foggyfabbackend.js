const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Endpoint to receive requests from Minecraft plugin
app.post('/player-joined', (req, res) => {
  // Extract relevant information from the request
  const { playerName, serverDetails } = req.body;

  // Process the information as needed (e.g., store in a database, trigger Alexa response, etc.)

  // Return a response to the Minecraft plugin
  res.status(200).json({ message: 'Request received successfully' });
});

// Endpoint to handle requests from Alexa Skill
app.post('/alexa-request', (req, res) => {
  // Extract relevant information from the request
  const { intent, slots } = req.body;

  // Process the Alexa request and generate a response

  // Return the response to the Alexa Skill
  res.status(200).json({ response: 'Hello from the backend!' });
});

// Start the server
app.listen(3000, () => {
  console.log('Backend server running on port 3000');
});
