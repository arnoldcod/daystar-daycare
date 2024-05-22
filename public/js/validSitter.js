// Function to display an alert
function showAlert(message, type) {
    const alertPlaceholder = document.getElementById('alertPlaceholder');
    alertPlaceholder.innerHTML = `
      <div class="alert alert-${type} alert-dismissible" role="alert">
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    `;
  }
  
  // Function to validate the form
  const validation = (event) => {
    let error = 0;
  
    // Get form elements
    const name = document.getElementById("name");
    const dob = document.getElementById("dob");
    const gender = document.getElementById("gender");
    const contact = document.getElementById("contact");
    const address = document.getElementById("address");
    let nin = document.getElementById("nin");
    const recommenderName = document.getElementById("recommenderName");
    const religion = document.getElementById("religion");
    const levelOfEducation = document.getElementById("levelOfEducation");
    const sitterNumber = document.getElementById("sitterNumber");
  
    // Get error display elements
    const nameError = document.getElementById("nameError");
    const dobError = document.getElementById("dobError");
    const genderError = document.getElementById("genderError");
    const contactError = document.getElementById("contactError");
    const addressError = document.getElementById("addressError");
    let ninError = document.getElementById("ninError");
    const recommenderNameError = document.getElementById("recommenderNameError");
    const religionError = document.getElementById("religionError");
    const levelOfEducationError = document.getElementById("levelOfEducationError");
    const sitterNumberError = document.getElementById("sitterNumberError");
  
    // Name validation
    if (name.value === "") {
      name.style.border = "1px solid red";
      nameError.textContent = "Please enter full name!";
      nameError.style = "color: red;";
      error++;
    } else {
      name.style.border = "1px solid green";
      nameError.textContent = "";
    }
  
    // Date of birth validation
    if (dob.value === "") {
      dob.style.border = "1px solid red";
      dobError.textContent = "Please enter Date Of Birth!";
      dobError.style = "color: red;";
      error++;
    } else {
      dob.style.border = "1px solid green";
      dobError.textContent = "";
    }
  
    // Gender validation
    if (gender.value === "") {
      gender.style.border = "1px solid red";
      genderError.textContent = "Please enter Gender!";
      genderError.style = "color: red;";
      error++;
    } else {
      gender.style.border = "1px solid green";
      genderError.textContent = "";
    }
  
  
    //  contact validation
    const phoneDigits = /^\d{10}$/;
    if (contact.value === "") {
      contact.style.border = "1px solid red";
      contactError.textContent = "Please Enter Valid Phone Number, HINT: enter 10 digits";
      contactError.style =
        "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
      error++;
    } else if (!contact.value.match(phoneDigits)) {
      contact.style.border = "1px solid red";
      contactError.textContent =
        "Enter a valid contact number, HINT: enter 10 digits";
      contactError.style =
        "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
      error++;
    } else {
      contact.style.border = "1px solid green";
      contactError.textContent = "";
    }
  
    // Address validation
    if (address.value === "") {
      address.style.border = "1px solid red";
      addressError.textContent = "Please enter address!";
      addressError.style = "color: red;";
      error++;
    } else {
      address.style.border = "1px solid green";
      addressError.textContent = "";
    }


      //nin validation
  let ninRegex = /^(CF|CM)\d{8}[A-Z]{2}$/;
  if (!nin.value.match(ninRegex)) {
    nin.style.border = "1px solid red";
    ninError.textContent = "Enter a valid NIN : HINT: enter CF/CM*8digits*2letters ";
    ninError.style =
      "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
    // return false;
    error++;
  } else {
    nin.style.border = "1px solid green";
    ninError.textContent = "";
  }


    
    // Recommender Name validation
    if (recommenderName.value === "") {
        recommenderName.style.border = "1px solid red";
        recommenderNameError.textContent = "Please enter recommender name!";
        recommenderNameError.style = "color: red;";
        error++;
      } else {
        recommenderName.style.border = "1px solid green";
        recommenderNameError.textContent = "";
      }


    // Religion validation
    if (religion.value === "") {
        religion.style.border = "1px solid red";
        religionError.textContent = "Please enter religion!";
        religionError.style = "color: red;";
        error++;
      } else {
        religion.style.border = "1px solid green";
        religionError.textContent = "";
      }



      // Level Of Education  validation 
    if (levelOfEducation.value === "") {
        levelOfEducation.style.border = "1px solid red";
        levelOfEducationError.textContent = "Please enter level of education!";
        levelOfEducationError.style = "color: red;";
        error++;
      } else {
        levelOfEducation.style.border = "1px solid green";
        levelOfEducationError.textContent = "";
      }



  
    // Sitternumber validation
    const sitterNumberRegex = /^(DSS)\d{3}$/;
    if (!sitterNumber.value.match(sitterNumberRegex)) {
      sitterNumber.style.border = "1px solid red";
      sitterNumberError.textContent =
        "Enter a valid sitterNumber, HINT: enter DSS*** digits";
      sitterNumberError.style =
        "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
      error++;
    } else {
      sitterNumber.style.border = "1px solid green";
      sitterNumberError.textContent = "";
    }
  
    let isValid = true;
  
    // Get form elements
    const form = document.forms['validationForm'];
    const elements = form.elements;
  
    // Check all inputs
    for (let element of elements) {
      if (element.type !== 'submit' && !element.value) {
        isValid = false;
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
      } else if (element.type !== 'submit') {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
      }
    }
  
    // Show alert based on validation result
    if (isValid) {
      showAlert('Data has been submitted successfully!', 'success');
    } else {
      showAlert('Please fill out all fields.', 'danger');
    }
  
    // CSS to apply red/green borders
    const style = document.createElement('style');
    style.innerHTML = `
      .is-invalid { border-color: red; }
      .is-valid { border-color: green; }
    `;
    document.head.appendChild(style);
  
    // Prevent form submission if there are errors
    if (error > 0) {
      event.preventDefault();
    }
  };