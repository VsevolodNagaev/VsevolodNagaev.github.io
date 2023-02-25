      var data = "Hello World"; // Replace with your actual data
      var time = new Date().toISOString(); // Get the current time in ISO format

      // Create a JSON object with data and time properties
      var jsonData = {
          "data": data,
          "time": time
      };

      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            }
      };
      xhttp.open("POST", "https://your-esp32-ip-address/data", true);
      xhttp.setRequestHeader("Content-type", "application/json");
      xhttp.send(JSON.stringify(jsonData));


      // Log the JSON string to the console
      console.log(jsonString);
