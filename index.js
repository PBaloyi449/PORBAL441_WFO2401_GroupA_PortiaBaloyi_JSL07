// Wait for the DOM content to be fully loaded before executing the JavaScript code
document.addEventListener('DOMContentLoaded', function () {
  
    // Get references to important elements in the HTML document
    const cardForm = document.getElementById('cardForm'); // Form element
    const modal = document.getElementById('modal'); // Modal element
    const certificateContent = document.getElementById('certificateContent'); // Certificate content area
    const closeModal = document.querySelector('.close'); // Close button inside modal
  
    // Hide the modal initially
    modal.style.display = 'none';
  
    // Event listener for the form submission
    cardForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the default form submission behavior
  
        // Get input values from form fields
        const studentNameInput = document.getElementById('studentName');
        const personalMessageInput = document.getElementById("personalMessage");
        const courseNameInput = document.getElementById("courseName"); 
  
        const studentName = studentNameInput.value; // Student name input value
        const personalMessage = personalMessageInput.value; // Personal message input value
        const courseName = courseNameInput ? courseNameInput.value : "a course"; // Course name input value (fallback to "a course" if no input)
  
        // Check if required fields are filled
        if (studentName.trim() === '' || personalMessage.trim() === '') {
            alert('Please fill in all fields');
            return;
        }
  
        // Generate certificate content dynamically using input values
        certificateContent.innerHTML = `
            <h1>Certificate of Achievement</h1>
            <p>This is to certify that</p>
            <h2>${studentName}</h2>
            <p>has almost completed the</p>
            <h3>Course: ${courseName}</h3>
            <p>with legendary perseverance and world-class bad-assery for never giving up🏆</p>
            <p>${personalMessage}</p>
        `;
      
        // Create the img element for logo
        const imgElement = document.createElement('img');
        imgElement.src = 'logo.png'; // Image source
        imgElement.alt = "Codespace logo"; // Image alt attribute
      
        // Apply CSS styles to the img element
        imgElement.style.width = '100%'; // Make the width of the img element 100% of its container
        imgElement.style.height = 'auto'; // Maintain the aspect ratio of the image
      
        // Insert the img element after the second last p element in certificateContent
        const secondLastParagraph = certificateContent.querySelectorAll('p')[certificateContent.querySelectorAll('p').length - 2];
        secondLastParagraph.parentNode.insertBefore(imgElement, secondLastParagraph.nextSibling);
      
        // Display the modal
        modal.style.display = 'block';
      
        // Clear the form inputs
        studentNameInput.value = ''; // Clear student name input
        personalMessageInput.value = ''; // Clear personal message input
        if(courseNameInput) courseNameInput.value = ''; // Clear course name input (if available)
    });
  
    // Event listener for closing the modal when the close button is clicked
    closeModal.addEventListener('click', function () {
        modal.style.display = 'none'; // Hide the modal
    });
  });
  