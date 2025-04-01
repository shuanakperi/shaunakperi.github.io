document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("header").innerHTML = '<nav><a href="index.html">Home</a> | <a href="byo_intro.html">BYO Intro</a></nav>';
    document.getElementById("footer").innerHTML = '<p>&copy; 2025 Your Name</p>';

    const form = document.getElementById("byoForm");
    form.addEventListener("submit", handleSubmit);
    form.addEventListener("reset", handleReset);

    document.getElementById("addCourse").addEventListener("click", addCourseField);
});

function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
        alert("Please fill out all required fields correctly.");
        return;
    }

    displayFormData();
}

function validateForm() {
    const requiredFields = [
        "lastName", "firstName", "mascot", "image", 
        "imageCaption", "personalBackground", "professionalBackground", 
        "academicBackground", "webDevelopmentBackground", "computerPlatform"
    ];

    for (let field of requiredFields) {
        let input = document.getElementById(field);
        if (!input.value.trim()) return false;
    }

    const fileInput = document.getElementById("image");
    if (fileInput.files.length > 0) {
        const fileType = fileInput.files[0].type;
        if (!["image/png", "image/jpeg"].includes(fileType)) {
            alert("Image must be a PNG or JPG file.");
            return false;
        }
    }

    if (!document.getElementById("agree").checked) {
        alert("You must agree to the terms.");
        return false;
    }

    return true;
}

function displayFormData() {
    const form = document.getElementById("byoForm");
    let output = "<h3>Your BYO Intro Page</h3>";

    const fields = form.elements;
    for (let field of fields) {
        if (field.tagName !== "BUTTON" && field.type !== "submit" && field.type !== "reset" && field.type !== "checkbox") {
            output += `<p><strong>${field.name.replace(/([A-Z])/g, " $1")}:</strong> ${field.value}</p>`;
        }
    }

    const fileInput = document.getElementById("image");
    if (fileInput.files.length > 0) {
        const fileURL = URL.createObjectURL(fileInput.files[0]);
        output += `<p><strong>Image:</strong> <br><img src="${fileURL}" width="200"></p>`;
    }

    output += '<p><a href="byo_intro.html">Reset Form</a></p>';
    form.outerHTML = output;
}

function handleReset() {
    document.getElementById("coursesContainer").innerHTML = '<button type="button" id="addCourse">Add Course</button>';
    document.getElementById("addCourse").addEventListener("click", addCourseField);
}

function addCourseField() {
    const container = document.getElementById("coursesContainer");

    const div = document.createElement("div");
    div.className = "course-entry";

    const input = document.createElement("input");
    input.type = "text";
    input.name = "courses[]";
    input.placeholder = "Enter course name";

    const deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => div.remove());

    div.appendChild(input);
    div.appendChild(deleteBtn);
    container.appendChild(div);
}
