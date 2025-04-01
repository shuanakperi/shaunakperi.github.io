document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("introForm").addEventListener("submit", function (event) {
        event.preventDefault();
        displayResults();
    });
});

function displayResults() {
    const formData = new FormData(document.getElementById("introForm"));
    let output = "<h3>Your Submitted Information:</h3><ul>";
    
    formData.forEach((value, key) => {
        if (key === "image" && value.size > 0) {
            const imageUrl = URL.createObjectURL(value);
            output += `<li><strong>${key}:</strong> <img src="${imageUrl}" alt="Uploaded Image" width="150"></li>`;
        } else {
            output += `<li><strong>${key}:</strong> ${value}</li>`;
        }
    });
    
    output += "</ul>";
    document.getElementById("result").innerHTML = output;
}

function addCourse() {
    const coursesDiv = document.getElementById("courses");
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.name = "course";
    coursesDiv.appendChild(document.createElement("br"));
    coursesDiv.appendChild(newInput);
}
