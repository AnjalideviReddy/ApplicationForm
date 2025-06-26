// Greeting Prompt
var s = confirm("Are You a Student");
if (s) {
    let name = prompt("Please Enter Your Name");

    const greetingText = `Hi, ${name}!`;

    // Create container
    const container = document.createElement("div");
    container.className = "typing-container";

    // Create typing element
    const textElement = document.createElement("h1");
    textElement.className = "typing-text";
    container.appendChild(textElement);
    document.body.appendChild(container);

    // Typing animation logic
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


// Form Submit Redirect
function handleFormSubmit(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();
    const skills = document.querySelectorAll('input[type="checkbox"]:checked');
    const resume = document.getElementById("resume").files[0];
    const photo = document.getElementById("photo").files[0];

    if (!name || !phone || !email || skills.length === 0 || !resume || !photo) {
        alert("Please fill all required fields correctly.");
        return;
    }

    if (photo.size > 1 * 1024 * 1024) {
        alert("Photo must be less than 1MB.");
        return;
    }

    // Optional: Check resume file size
   document.getElementById('resume').addEventListener('change', function () {
    const file = this.files[0];
    const maxSize = 5 * 1024 * 1024; // 5 MB

    if (file && file.size > maxSize) {
        alert('Resume file size must be less than 5MB!');
        this.value = '';
        document.getElementById('resume-name').textContent = "No file chosen";
    } else if (file) {
        document.getElementById('resume-name').textContent = file.name;
    }
});

    // Redirect to thank you page
    window.location.href = `thankyou.html?name=${encodeURIComponent(name)}`;
}

// File name display
document.getElementById('resume').addEventListener('change', function () {
    const fileName = this.files[0] ? this.files[0].name : "No file chosen";
    document.getElementById('resume-name').textContent = fileName;
});

document.getElementById('photo').addEventListener('change', function () {
    const file = this.files[0];
    if (file && file.size > 1 * 1024 * 1024) {
        alert('Photo size must be less than 1MB!');
        this.value = '';
        document.getElementById('photo-name').textContent = "No file chosen";
    } else if (file) {
        document.getElementById('photo-name').textContent = file.name;
    }
});
