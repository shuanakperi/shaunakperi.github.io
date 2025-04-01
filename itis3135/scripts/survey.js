document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("introForm");
    const coursesDiv = document.getElementById("courses");
    let courseCount = 1;
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      
      
      const formData = new FormData(form);
      let resultHTML = "<h3>Your Intro Page Preview</h3>";
  
      formData.forEach((value, key) => {
        resultHTML += `<p><strong>${key}:</strong> ${value}</p>`;
      });
  
      document.getElementById("result").innerHTML = resultHTML;
    });
  
    form.addEventListener("reset", function () {
      document.getElementById("result").innerHTML = "";
    });
  
    window.addCourse = function () {
      courseCount++;
      const newCourseInput = document.createElement("input");
      newCourseInput.type = "text";
      newCourseInput.id = `course${courseCount}`;
      newCourseInput.name = `course${courseCount}`;
      coursesDiv.insertBefore(newCourseInput, coursesDiv.lastElementChild);
    };
  });
  