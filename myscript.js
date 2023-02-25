const http = require('http');

const hostname = 'https://vsevolodnagaev.github.io/index.html';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  
  var data = "Hello World"; // Replace with your actual data
  var time = new Date().toISOString(); // Get the current time in ISO format

  // Create a JSON object with data and time properties
  var jsonData = {
      "data": data,
      "time": time
  };

  // Convert the JSON object to a string
  var jsonString = JSON.stringify(jsonData);
  
  res.end(jsonString);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
