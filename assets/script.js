
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
