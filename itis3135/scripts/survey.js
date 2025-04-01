
document.getElementById('introForm').addEventListener('submit', function(event) {
    if (!document.getElementById('name').value || !document.getElementById('mascot').value || !document.getElementById('image').value || !document.getElementById('imageCaption').value) {
      alert("Please fill out all required fields.");
      event.preventDefault();
    }
  });
  
  
  function resetForm() {
    document.getElementById('introForm').reset();
    document.getElementById('result').innerHTML = '';
  }
  
  
  let courseCount = 1;
  function addCourse() {
    courseCount++;
    let newCourse = document.createElement('div');
    newCourse.innerHTML = `
      <input type="text" id="course${courseCount}" name="course${courseCount}">
      <button type="button" onclick="deleteCourse(this)">Delete</button>`;
    document.getElementById('courses').appendChild(newCourse);
  }
  
  
  function deleteCourse(button) {
    button.parentElement.remove();
  }
  
  
  document.getElementById('introForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let formData = new FormData(event.target);
    
    let resultHTML = `
      <h2>Your Introduction Page</h2>
      <p><strong>Name:</strong> ${formData.get('firstName')} ${formData.get('middleInitial')} ${formData.get('lastName')}</p>
      <p><strong>Nickname:</strong> ${formData.get('nickname')}</p>
      <p><strong>Mascot:</strong> ${formData.get('mascot')}</p>
      <p><strong>Image Caption:</strong> ${formData.get('imageCaption')}</p>
      <p><strong>Personal Background:</strong> ${formData.get('personalBackground')}</p>
      <p><strong>Professional Background:</strong> ${formData.get('professionalBackground')}</p>
      <p><strong>Academic Background:</strong> ${formData.get('academicBackground')}</p>
      <p><strong>Web Development Background:</strong> ${formData.get('webDevelopmentBackground')}</p>
      <p><strong>Primary Platform:</strong> ${formData.get('primaryPlatform')}</p>
      <p><strong>Funny Thing:</strong> ${formData.get('funnyThing')}</p>
      <p><strong>Anything Else?</strong> ${formData.get('anythingElse')}</p>
      <p><strong>Courses Currently Taking:</strong> ${getCourses()}</p>
    `;
    
    document.getElementById('result').innerHTML = resultHTML;
});

function getCourses() {
    let courses = [];
    document.querySelectorAll('[id^="course"]').forEach(course => {
        if (course.value.trim() !== '') {
            courses.push(course.value);
        }
    });
    return courses.length > 0 ? courses.join(', ') : 'No courses listed';
}

function addCourse() {
    let courseCount = document.querySelectorAll('[id^="course"]').length + 1;
    let newCourseInput = document.createElement("input");
    newCourseInput.type = "text";
    newCourseInput.id = `course${courseCount}`;
    newCourseInput.name = `course${courseCount}`;
    document.getElementById("courses").insertBefore(newCourseInput, document.getElementById("courses").lastElementChild);
}
