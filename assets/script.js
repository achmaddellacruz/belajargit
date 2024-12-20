<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic JavaScript Example</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>Welcome to JavaScript Basics</h1>
    <p id="text">Click the button to change this text.</p>
    <button id="changeTextBtn">Change Text</button>

    <script>
        // Select the paragraph and button elements
        const paragraph = document.getElementById("text");
        const button = document.getElementById("changeTextBtn");

        // Add an event listener to the button
        button.addEventListener("click", function() {
            // Change the text content of the paragraph
            paragraph.textContent = "Hello, JavaScript is awesome!";
        });
    </script>
</body>
</html>
