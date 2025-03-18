// Function to handle the "View Details" button click
function viewProjectDetails(projectId) {
    alert(`You're viewing details for ${projectId}!`);
}

// Form submission handling
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple form validation
    if (name && email && message) {
        alert(`Thank you for your message, ${name}!`);
        // Clear form fields
        document.getElementById("contact-form").reset();
    } else {
        alert("Please fill in all fields.");
    }
});
