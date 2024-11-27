// your code here
document.getElementById("button").addEventListener("click", function() {
            // Get the values from the input fields
            const name = document.getElementById("name").value;
            const year = document.getElementById("year").value;

            // Ensure that the name and year fields are not empty
            if (name && year) {
                // Create the URL with query parameters
                const updatedUrl = `https://localhost:8080/?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

                // Update the text of the h3 element
                document.getElementById("url").textContent = updatedUrl;
            } else {
                // If any field is empty, show an alert
                alert("Please fill in both fields!");
            }
        });