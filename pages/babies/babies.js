//this function is triggered when an image file is selected for uploading. It displays a preview of the selected image before it is uploaded
function previewImage(event) {
    const preview = document.getElementById('preview');
    preview.style.display = 'block';
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function(e) {   
      preview.src = e.target.result;   // the src attribute of the preview image to the data URL of the selected file, which represents the image as a base64-encoded string.
    }
    reader.readAsDataURL(file);
  }
  
  
  
  
  
  //this event listener is attached to the registration form's submit event. It prevents the default form submission behavior and instead handles the form data submission to local storage. 
  document.getElementById("registrationForm").addEventListener("submit", function(event) {
      event.preventDefault(); //to prevent the page from refreshing.
      const formData = new FormData(event.target);
      const formObject = {};
      formData.forEach((value, key) => {
        formObject[key] = value;  //converts the FormData object into a plain JavaScript object (formObject) using forEach() method.
      });
      const childData = JSON.stringify(formObject);  //converts the formObject into a JSON string (childData) using JSON.stringify().
      const childNumber = formObject["childNumber"]; //extracts the child number from the form data.
      localStorage.setItem(`child_${childNumber}`, childData); // stores the child data in the browser's local storage with a key formatted as child_<childNumber>.
      alert("Registration successful! Data stored for child number " + childNumber);
      event.target.reset();
      // Redirect to child display page after registration
      window.location.href = "/pages/babies/renderBabies.html";
    });
  