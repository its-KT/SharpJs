// Write your code below:
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Get values from form
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    // Store data in local storage
    var userDetails = {
        username: username,
        email: email,
        phone: phone
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    
    // Alert user and clear form
    alert("User details submitted successfully!");
    document.getElementById("userForm").reset();
});
