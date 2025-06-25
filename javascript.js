// Greeting typing animation
var s = confirm("Are You a Student");
if (s) {
    let name = prompt("Please Enter Your Name");

    const greetingText = `Hi, ${name}!`;
    const container = document.createElement("div");
    container.classList.add("typing-container");

    const textElement = document.createElement("h1");
    container.appendChild(textElement);
    document.body.appendChild(container);

    // Typing logic
    let i = 0;
    function typeChar() {
        if (i < greetingText.length) {
            textElement.textContent += greetingText.charAt(i);
            i++;
            setTimeout(typeChar, 100);
        }
    }
    typeChar();
}

// Form validation
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let skills = document.querySelectorAll('input[type="checkbox"]:checked');
    let file = document.getElementById("resume").value;

    if (name === "" || phone === "" || email === "") {
        alert("Please fill all required fields!");
        return;
    }

    if (skills.length === 0) {
        alert("Please select at least one skill.");
        return;
    }

    if (file === "") {
        alert("Please upload your resume.");
        return;
    }

    let confirmSubmit = confirm("Do you want to submit the form?");
    if (confirmSubmit) {
        alert(`Thank you ${name}, your application has been submitted successfully!`);
        document.querySelector("form").reset();
    }
});
