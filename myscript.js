const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  
  // Replace this with your actual data
  const data = "Hello World";
  
  // Get the current time in ISO format
  const time = new Date().toISOString();
  
  // Create a JSON object with data and time properties
  const jsonData = {
    data,
    time
  };
  
  // Convert the JSON object to a string
  const jsonString = JSON.stringify(jsonData);
  
  res.end(jsonString);
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
