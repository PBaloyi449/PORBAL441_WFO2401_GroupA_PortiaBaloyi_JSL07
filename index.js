document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal initially
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
      e.preventDefault();

      // 🚨 Get input values
      const studentNameInput = document.getElementById('studentName');
      const personalMessageInput = document.getElementById("personalMessage");
      const courseNameInput = document.getElementById("courseName"); 

      const studentName = studentNameInput.value;
      const personalMessage = personalMessageInput.value;
      const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

      if (studentName.trim() === '' || personalMessage.trim() === '') {
          alert('Please fill in all fields');
          return;
      }

      // 🚨 Generate certificate content dynamically
      certificateContent.innerHTML = `
          <h1>Certificate of Achievement</h1>
          <p>This is to certify that</p>
          <h2>${studentName}</h2>
          <p>has almost completed the</p>
          <h3>Course: ${courseName}</h3>
          <p>with legendary perseverance and world-class bad-assery for never giving up🏆</p>
          <p>${personalMessage}</p>
      `;
    
      // Create the img element
      const imgElement = document.createElement('img');
      imgElement.src = 'logo.png';
      imgElement.alt = "Codespace logo";
    
      // Apply CSS styles to the img element
      imgElement.style.width = '100%'; // Make the width of the img element 100% of its container
      imgElement.style.height = 'auto'; // Maintain the aspect ratio of the image
    
      // Insert the img element after the second last p element in certificateContent
      const secondLastParagraph = certificateContent.querySelectorAll('p')[certificateContent.querySelectorAll('p').length - 2];
      secondLastParagraph.parentNode.insertBefore(imgElement, secondLastParagraph.nextSibling);
    
      // Display the modal
      modal.style.display = 'block';
    
      // Clear the form inputs
      studentNameInput.value = '';
      personalMessageInput.value = '';
      if(courseNameInput) courseNameInput.value = '';
  });

  //  🚨 Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
      modal.style.display = 'none';
  });
});
