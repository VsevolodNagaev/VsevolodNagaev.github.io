<!DOCTYPE html>
<html>
<head>
	<title>JSON Example</title>
	<script>
		var data = "Hello World"; 
		var time = new Date().toISOString(); 

		
		var jsonData = {
			"data": data,
			"time": time
		};

		var jsonString = JSON.stringify(jsonData);
		console.log(jsonString);
	</script>
</head>
<body>
	<p>Open the developer console to see the JSON output.</p>
</body>
</html>
