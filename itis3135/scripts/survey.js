const form = document.getElementById("introForm");
const resultDiv = document.getElementById("result");
const courseListDiv = document.getElementById("courseList");
const imageInput = document.getElementById("image");

function addCourse() {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "New Course";

    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Remove";
    removeBtn.onclick = () => {
        input.remove();
        removeBtn.remove();
    };

    courseListDiv.appendChild(input);
    courseListDiv.appendChild(removeBtn);
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    resultDiv.innerHTML = "";

    const requiredFields = [
        "lastname", "middleinitial", "firstname", "nickname", "background",
        "professional", "academic", "software", "platform", "funFact", "share"
    ];

    for (let id of requiredFields) {
        const field = document.getElementById(id);
        if (!field.value.trim()) {
            alert("Please fill out all fields.");
            return;
        }
    }

    const imageFile = imageInput.files[0];
    if (!imageFile || !["image/png", "image/jpg", "image/jpeg"].includes(imageFile.type)) {
        alert("Please upload a valid image file.");
        return;
    }

    const fullName = `${document.getElementById("firstname").value} ${document.getElementById("middleinitial").value}. "${document.getElementById("nickname").value}" ${document.getElementById("lastname").value}`;

    let coursesHTML = "<ol>";
    const courseInputs = courseListDiv.querySelectorAll("input");
    courseInputs.forEach(input => {
        if (input.value.trim()) {
            coursesHTML += `<li>${input.value}</li>`;
        }
    });
    coursesHTML += "</ol>";

    resultDiv.innerHTML = `
        <h2>Introduction</h2>
        <h3>${fullName}</h3>
        <figure>
            <img src="${URL.createObjectURL(imageFile)}" alt="Uploaded Image">
            <figcaption><i>This is me!</i></figcaption>
        </figure>
        <ul>
            <li><strong>Personal Background:</strong> ${document.getElementById("background").value}</li>
            <li><strong>Professional Background:</strong> ${document.getElementById("professional").value}</li>
            <li><strong>Academic Background:</strong> ${document.getElementById("academic").value}</li>
            <li><strong>Programming/Software Background:</strong> ${document.getElementById("software").value}</li>
            <li><strong>Primary Computer Platform:</strong> ${document.getElementById("platform").value}</li>
            <li><strong>Courses:</strong> ${coursesHTML}</li>
            <li><strong>Funny/Interesting Item:</strong> ${document.getElementById("funFact").value}</li>
            <li><strong>I'd also like to share:</strong> ${document.getElementById("share").value}</li>
        </ul>
    `;

    form.style.display = "none";
});


form.addEventListener("reset", () => {
    if (!confirm("Are you sure you want to reset the form?")) return;

    setTimeout(() => {
        resultDiv.innerHTML = "";
        form.style.display = "block";

        
        const inputs = Array.from(courseListDiv.querySelectorAll("input"));
        const buttons = Array.from(courseListDiv.querySelectorAll("button"));
        inputs.slice(1).forEach(input => input.remove()); 
        buttons.forEach(btn => btn.remove());
    }, 0);
});
