const validation =  (event)=> {
     let error = 0;

const name = document.getElementById("name");
const dob = document.getElementById("dob");
const email = document.getElementById("email");
const password = document.getElementById("password");
const gender = document.getElementById("gender");
const contact = document.getElementById("contact");
const address = document.getElementById("address");
const nin = document.getElementById("nin");
const recommenderName = document.getElementById("recommenderName");
const religion = document.getElementById("religion");
const levelOfEducation = document.getElementById("levelOfEducation");



const nameError = document.getElementById("nameError");
const dobError = document.getElementById("dobError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const genderError = document.getElementById("genderError");
const contactError = document.getElementById("contactError");
const addressError = document.getElementById("addressError");
const ninError = document.getElementById("ninError");
const recommenderNameError = document.getElementById("recommenderNameError");
const religionError = document.getElementById("religionError");
const levelOfEducationError = document.getElementById("levelOfEducationError");





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
  }


 //full name validation
if (name.value ==  "") {
    name.style.border = "1px solid red";
    nameError.textContent = "Please enter full name!";
    nameError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    name.style.border = "1px solid green";
    nameError.textContent = "";
  }


  //date of birth validation
  if (dob.value ==  "") {
    dob.style.border = "1px solid red";
    dobError.textContent = "Please enter Date Of Birth!";
    dobError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    dob.style.border = "1px solid green";
    dobError.textContent = "";
  }



   //gender validation
if (gender.value ==  "") {
    gender.style.border = "1px solid red";
    genderError.textContent = "Please enter Gender!";
    genderError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    gender.style.border = "1px solid green";
    genderError.textContent = "";
  }



   //contact validation
   let phoneDigits = /^\d{10}$/;
   if (contact.value == "") {
     contact.style.border = "1px solid red";
     contactError.textContent = "Please Enter Phone Number";
     contactError.style =
       "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
 
     // return false;
     error++;
   } else if (!contact.value.match(phoneDigits)) {
     contact.style.border = "1px solid red";
     contactError.textContent = "Enter a valid contact number";
     contactError.style =
       "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
 
     // return false;
     error++;
   } else {
     contact.style.border = "1px solid green";
     contactError.textContent = "";
   }


     //address validation
if (address.value ==  "") {
    address.style.border = "1px solid red";
    addressError.textContent = "Please enter address!";
    addressError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    address.style.border = "1px solid green";
    addressError.textContent = "";
  }


  //nin validation
  let ninRegex = /^(CF|CM)\d{8}[A-Z]{4}$/;
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


   //recommenderName validation
if (recommenderName.value ==  "") {
    recommenderName.style.border = "1px solid red";
    recommenderNameError.textContent = "Please enter recommender Name!";
    recommenderNameError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    recommenderName.style.border = "1px solid green";
    recommenderNameError.textContent = "";
  }

     //religion validation
if (religion.value ==  "") {
    religion.style.border = "1px solid red";
    religionError.textContent = "Please enter religion!";
    religionError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    religion.style.border = "1px solid green";
    religionError.textContent = "";
  }


       //level Of Education validation
if (levelOfEducation.value ==  "") {
    levelOfEducation.style.border = "1px solid red";
    levelOfEducationError.textContent = "Please enter level Of Education!";
    levelOfEducationError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    levelOfEducation.style.border = "1px solid green";
    levelOfEducationError.textContent = "";
  }




  if (error > 0) {
    event.preventDefault();
  }
}