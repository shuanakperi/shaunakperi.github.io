
const lastName = document.getElementById("lastname");
const middleInitial = document.getElementById("middleinitial");
const firstName = document.getElementById("firstname");
const nickName = document.getElementById("nickname");
const imageInput = document.getElementById("image");
const personalBackground = document.getElementById("background");
const professionalBackground = document.getElementById("professional");
const academicBackground = document.getElementById("academic");
const softwareBackground = document.getElementById("software");
const computerPlatform = document.getElementById("platform");
const funFact = document.getElementById("funFact");
const shareMore = document.getElementById("share");
const courseListDiv = document.getElementById("courseList");
const resultDiv = document.getElementById("result");
const form = document.getElementById("introForm");


const getFields = () => [
    lastName, middleInitial, firstName, nickName,
    personalBackground, professionalBackground,
    academicBackground, softwareBackground,
    computerPlatform, funFact, shareMore
].filter(Boolean);

const emptyFields = () => {
    return getFields().some((field) => field.value.trim() === "");
};

const addCourse = () => {
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "New Course";
    const removeBtn = document.createElement("button");
    removeBtn.type = "button";
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
        input.remove();
        removeBtn.remove();
    });
    courseListDiv.appendChild(input);
    courseListDiv.appendChild(removeBtn);
};

window.addCourse = addCourse; 

const getCourseListHTML = () => {
    const inputs = courseListDiv.querySelectorAll("input");
    let list = "<ol>";
    inputs.forEach(input => {
        if (input.value.trim() !== "") {
            list += `<li>${input.value}</li>`;
        }
    });
    list += "</ol>";
    return list;
};


form.addEventListener("submit", (e) => {
    e.preventDefault();
    resultDiv.innerHTML = "";

    if (emptyFields()) {
        alert("Please fill out all fields.");
        return;
    }

    const imageFile = imageInput.files[0];
    if (!imageFile || !["image/png", "image/jpg", "image/jpeg"].includes(imageFile.type)) {
        alert("Please upload a valid image (PNG, JPG, JPEG).");
        return;
    }

    const fullName = `${firstName.value} ${middleInitial.value}. "${nickName.value}" ${lastName.value}`;

    resultDiv.innerHTML = `
        <h2>Introduction</h2>
        <h3>${fullName}</h3>
        <figure>
            <img src="${URL.createObjectURL(imageFile)}" alt="Uploaded Image">
            <figcaption><i>Here's a photo of me!</i></figcaption>
        </figure>
        <ul>
            <li><strong>Personal Background:</strong> ${personalBackground.value}</li>
            <li><strong>Professional Background:</strong> ${professionalBackground.value}</li>
            <li><strong>Academic Background:</strong> ${academicBackground.value}</li>
            <li><strong>Software/Programming Background:</strong> ${softwareBackground.value}</li>
            <li><strong>Primary Computer Platform:</strong> ${computerPlatform.value}</li>
            <li><strong>Courses:</strong> ${getCourseListHTML()}</li>
            <li><strong>Funny/Interesting Fact:</strong> ${funFact.value}</li>
            <li><strong>I'd also like to share:</strong> ${shareMore.value}</li>
        </ul>
    `;

    form.style.display = "none";
});


form.addEventListener("reset", () => {
    if (!confirm("Are you sure you want to reset the form?")) return;

    setTimeout(() => {
        resultDiv.innerHTML = "";
        form.style.display = "block";
        
        Array.from(courseListDiv.querySelectorAll("input")).forEach((input, index) => {
            if (index > 0) input.remove();
        });
        Array.from(courseListDiv.querySelectorAll("button")).forEach(btn => btn.remove());
    }, 0);
});
