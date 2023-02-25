// getTime.js

// Get the current time
const currentTime = new Date();

// Create a JSON object with the current time
const timeObj = {
  time: currentTime.toLocaleString(),
};

// Set the content type to JSON
response.setHeader('Content-Type', 'application/json');

// Send the JSON object as the response
response.send(JSON.stringify(timeObj));
