

let email = document.getElementById("email");
let fullName = document.getElementById('fullname'); //for input tag id
let dob = document.getElementById('dob'); //for input tag id
let age = document.getElementById('age'); //for input tag id
let parentName = document.getElementById('parentName'); //for input tag id
let parentContact = document.getElementById('parentContact'); //for input tag id
let address = document.getElementById('address'); //for input tag id
let childNumber= document.getElementById('childNumber'); //for input tag id
let userName = document.getElementById('username'); //for input tag id
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");
let nin = document.getElementById("nin");
let gender = document.getElementById("gender");
let zip = document.getElementById("zip");
let kin = document.getElementsByName("kin");
let terms = document.getElementById("terms");


let emailError = document.getElementById("emailError");
let fullNameError = document.getElementById('fullnameerror'); //for small tag id
let dobError = document.getElementById('dobError'); //for small tag id
let ageError = document.getElementById('ageError'); //for small tag id
let parentNameError = document.getElementById('parentNameError'); //for small tag id
let parentContactError = document.getElementById('parentContactError'); //for small tag id
let addressError = document.getElementById('addressError'); //for small tag id
let childNumberError= document.getElementById('childNumberError'); //for input tag id
let userNameError = document.getElementById('usernameError'); //for small tag id
let passwordError = document.getElementById("passwordError");
let confirmpasswordError = document.getElementById("confirmpasswordError");
let ninError = document.getElementById("ninError");
let genderError = document.getElementById("genderError");
let zipError = document.getElementById("zipError");
let kinError = document.getElementById("kinError");
let termsError = document.getElementById("termsError");

const validation = (event) => {
  let error = 0;

  if (fullName.value == "") {
    fullName.style.border = "1px solid red";
    fullNameError.textContent = "Please enter Fullname!";
    fullNameError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    fullName.style.border = "1px solid green";
    fullNameError.textContent = "";
  }

  //DOB validation
  if (dob.value == "") {
    dob.style.border = "1px solid red";
    dobError.textContent = "Please enter date of Birth!";
    dobError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    dob.style.border = "1px solid green";
    dobError.textContent = "";
  }


  //age validation
  if (age.value == "") {
    age.style.border = "1px solid red";
    ageError.textContent = "Please enter age!";
    ageError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    age.style.border = "1px solid green";
    ageError.textContent = "";
  }

  //Parent Name Validation
  if (parentName.value == "") {
    parentName.style.border = "1px solid red";
    parentNameError.textContent = "Please enter Parent name!";
    parentNameError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    parentName.style.border = "1px solid green";
    parentNameError.textContent = "";
  }

  //Parent Contact Validation
  //phone number validation
  let phoneDigits = /^\d{10}$/;
  if (parentContact.value == "") {
    parentContact.style.border = "1px solid red";
    parentContactError.textContent = "Please Enter Phone Number";
    parentContactError.style =
      "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";

    // return false;
    error++;
  } else if (!parentContact.value.match(phoneDigits)) {
    parentContact.style.border = "1px solid red";
    parentContactError.textContent = "Enter a valid parentContact number";
    parentContactError.style =
      "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";

    // return false;
    error++;
  } else {
    parentContact.style.border = "1px solid green";
    parentContactError.textContent = "";
  }


  //Address Validation
  if (address.value == "") {
    address.style.border = "1px solid red";
    addressError.textContent = "Please enter Parent Contact!";
    addressError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    address.style.border = "1px solid green";
    addressError.textContent = "";
  }


  //child Validation
  if (childNumber.value == "") {
    childNumber.style.border = "1px solid red";
    childNumberError.textContent = "Please enter Child Number!";
    childNumberError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    childNumber.style.border = "1px solid green";
    childNumberError.textContent = "";
  }





  //User name validation
  if (userName.value == "") {
    userName.style.border = "1px solid red";
    userNameError.textContent = "Please enter User Name!";
    userNameError.style = "color: red;";
    error++;
  } else {
    userName.style.border = "1px solid green";
    userName.textContent = " ";
  }

  //Email validation
  let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //format of the email(regular expressions)
  if (email.value == "") {
    //checking if the input field is empty
    email.style.border = "1px solid red";
    emailError.textContent = "Please enter email address";
    emailError.style =
      "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
    // return false;
    error++;
  } else if (!email.value.match(emailRegex)) {
    //if the email doesnt match the regular expression
    email.style.border = "1px solid red";
    emailError.textContent = "Email format should be names@mail.com";
    emailError.style = "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
    // return false;
    error++;
  } else {
    //successful email
    email.style.border = "1px solid green";
    emailError.textContent = "";
  }

  //password validation
  if (password.value == "") {
    password.style.border = "1px solid red";
    passwordError.textContent = "Please Enter Password";
    passwordError.style =
      "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
    // return false;
    error++;
  } else if (password.value.length <= 5) {
    //specifying the number of characters the password should have(atleast 6)
    password.style.border = "1px solid red";
    passwordError.textContent = "Password must be more than 5 Characters";
    passwordError.style =
      "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
    // return false;
    error++;
  } else {
    //successful password
    password.style.border = "1px solid green";
    passwordError.textContent = "";
    if ((confirmpassword.value = "")) {
      confirmpassword.style.border = "1px solid red";
      confirmpasswordError.textContent = "The passwords do not match";
      confirmpasswordError.style =
        "color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif";
      // return false;
      error++;
    } else if (confirmpassword.value !== password.value) {
      //Password confirmation
      confirmpassword.style.border = "1px solid red";
      confirmpasswordError.textContent = "The passwords do not match";
      confirmpasswordError.style =
        "color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif";
      // return false;
      error++;
    } else {
      confirmpassword.style.border = "1px solid green";
      confirmpasswordError.textContent = "";
    }
  }


  //nin validation
  let ninRegex = /^(CF|CM)[A-Za-z0-9]{12}$/;
  if (!nin.value.match(ninRegex)) {
    nin.style.border = "1px solid red";
    ninError.textContent = "Enter a valid NIN ";
    ninError.style =
      "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
    // return false;
    error++;
  } else {
    nin.style.border = "1px solid green";
    ninError.textContent = "";
  }

  let formValid = false; //by default, the input is false, checked or not
  for (var i = 0; i < kin.length; i++) { //confirming if the radio button has been checked
    if (kin[i].checked) {
      formValid = true; //changes validation to true if checked
      break;
    }
  }

  // Radio buttons validation
  if (!formValid) {
    kinError.textContent = "Please select kin";
    kinError.style =
      "color:red; font-size:12px; font-family:Arial, Helvetica, Sans-serif";
    // return false;
    error++;
  } else {
    kinError.textContent = "";
  }
  if (error > 0) {
    event.preventDefault();
  }
};

