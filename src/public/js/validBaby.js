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
    const parentNames = document.getElementById("parentNames");
    const parentContact = document.getElementById("parentContact");
    const address = document.getElementById("address");
    const childNumber = document.getElementById("childNumber");
  
    // Get error display elements
    const nameError = document.getElementById("nameError");
    const dobError = document.getElementById("dobError");
    const parentNamesError = document.getElementById("parentNamesError");
    const genderError = document.getElementById("genderError");
    const parentContactError = document.getElementById("parentContactError");
    const addressError = document.getElementById("addressError");
    const childNumberError = document.getElementById("childNumberError");
  
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
  
    // Parent names validation
    if (parentNames.value === "") {
      parentNames.style.border = "1px solid red";
      parentNamesError.textContent = "Please enter full name!";
      parentNamesError.style = "color: red;";
      error++;
    } else {
      parentNames.style.border = "1px solid green";
      parentNamesError.textContent = "";
    }
  
    // Parent contact validation
    const phoneDigits = /^\d{10}$/;
    if (parentContact.value === "") {
      parentContact.style.border = "1px solid red";
      parentContactError.textContent = "Please Enter Phone Number";
      parentContactError.style =
        "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
      error++;
    } else if (!parentContact.value.match(phoneDigits)) {
      parentContact.style.border = "1px solid red";
      parentContactError.textContent =
        "Enter a valid parentContact number, HINT: enter 10 digits";
      parentContactError.style =
        "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
      error++;
    } else {
      parentContact.style.border = "1px solid green";
      parentContactError.textContent = "";
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
  
    // Child number validation
    const childNumberRegex = /^(DSB)\d{3}$/;
    if (!childNumber.value.match(childNumberRegex)) {
      childNumber.style.border = "1px solid red";
      childNumberError.textContent =
        "Enter a valid childNumber, HINT: enter DSB*** digits";
      childNumberError.style =
        "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
      error++;
    } else {
      childNumber.style.border = "1px solid green";
      childNumberError.textContent = "";
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