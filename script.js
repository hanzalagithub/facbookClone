// script.js
document.addEventListener("DOMContentLoaded", function() {
    populateDateOfBirth();
});

function populateDateOfBirth() {
    let daySelect = document.getElementById("day");
    let monthSelect = document.getElementById("month");
    let yearSelect = document.getElementById("year");

    for (let i = 1; i <= 31; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
    }

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    for (let i = 0; i < 12; i++) {
        let option = document.createElement("option");
        option.value = months[i];
        option.textContent = months[i];
        monthSelect.appendChild(option);
    }

    let currentYear = new Date().getFullYear();
    for (let i = currentYear; i >= 1900; i--) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        yearSelect.appendChild(option);
    }
}

function generatePDF() {
    // Use the new namespace
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF();

    let firstName = document.getElementById("first-name").value;
    let surname = document.getElementById("surname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let gender = document.querySelector('input[name="gender"]:checked').value;

    doc.text(20, 20, `First Name: ${firstName}`);
    doc.text(20, 30, `Surname: ${surname}`);
    doc.text(20, 40, `Email: ${email}`);
    doc.text(20, 50, `Password: ${password}`);
    doc.text(20, 60, `Date of Birth: ${day} ${month} ${year}`);
    doc.text(20, 70, `Gender: ${gender}`);

    doc.save('signup-details.pdf');
}
