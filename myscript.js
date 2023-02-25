    <script>
      alert("Hello, world!");
      var data = "Hello World"; // Replace with your actual data
      var time = new Date().toISOString(); // Get the current time in ISO format

      // Create a JSON object with data and time properties
      var jsonData = {
          "data": data,
          "time": time
      };

      // Convert the JSON object to a string
      var jsonString = JSON.stringify(jsonData);

      // Log the JSON string to the console
      console.log(jsonString);
    </script>
