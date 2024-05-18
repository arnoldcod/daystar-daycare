const validation =  (event)=> {
    let error = 0;

const name = document.getElementById("name");
const dob = document.getElementById("dob");

const gender = document.getElementById("gender");
const contact = document.getElementById("contact");
const address = document.getElementById("address");




const nameError = document.getElementById("nameError");
const dobError = document.getElementById("dobError");

const genderError = document.getElementById("genderError");
const contactError = document.getElementById("contactError");
const addressError = document.getElementById("addressError");





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







 


 if (error > 0) {
   event.preventDefault();
 }
}