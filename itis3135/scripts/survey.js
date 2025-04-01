document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("introForm");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        displayResults();
    });

    form.addEventListener("reset", function() {
        document.getElementById("result").innerHTML = "";
    });
});

function addCourse() {
    let courseList = document.getElementById("courseList");
    let newCourse = document.createElement("input");
    newCourse.type = "text";
    newCourse.placeholder = "Enter course name";
    
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function() {
        courseList.removeChild(newCourse);
        courseList.removeChild(deleteButton);
    };
    
    courseList.appendChild(newCourse);
    courseList.appendChild(deleteButton);
}

function displayResults() {
    const name = document.getElementById("name").value;
    const nickname = document.getElementById("nickname").value;
    const image = document.getElementById("image").value;
    const background = document.getElementById("background").value;
    const professional = document.getElementById("professional").value;
    const academic = document.getElementById("academic").value;
    const software = document.getElementById("software").value;
    const platform = document.getElementById("platform").value;
    const funFact = document.getElementById("funFact").value;
    const share = document.getElementById("share").value;

    let courses = [];
    document.querySelectorAll("#courseList input").forEach(course => {
        if (course.value.trim() !== "") {
            courses.push(course.value.trim());
        }
    });

    let resultHTML = `
        <h2>${name} | ${nickname}</h2>
        <figure>
            <img src="${image}" alt="Profile image of ${name}">
            <figcaption>${name}'s Profile Picture</figcaption>
        </figure>
        <ul>
            <li><strong>Personal Background:</strong> ${background}</li>
            <li><strong>Professional Background:</strong> ${professional}</li>
            <li><strong>Academic Background:</strong> ${academic}</li>
            <li><strong>Programming/Software Background:</strong> ${software}</li>
            <li><strong>Primary Computer Platform:</strong> ${platform}</li>
            <li><strong>Courses:</strong>
                <ul>
                    ${courses.map(course => `<li>${course}</li>`).join("")}
                </ul>
            </li>
            <li><strong>Funny/Interesting Item:</strong> ${funFact}</li>
            <li><strong>I'd also like to share:</strong> ${share}</li>
        </ul>
        <button onclick="location.reload()">Reset</button>
    `;

    document.getElementById("result").innerHTML = resultHTML;
}
