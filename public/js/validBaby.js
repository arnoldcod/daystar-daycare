const validation =  (event)=> {
    let error = 0;

const name = document.getElementById("name");
const dob = document.getElementById("dob");
const gender = document.getElementById("gender");
const parentNames = document.getElementById("parentNames");
const parentContact = document.getElementById("parentContact");
const address = document.getElementById("address");
const childNumber = document.getElementById("childNumber");





const nameError = document.getElementById("nameError");
const dobError = document.getElementById("dobError");
const parentNamesError = document.getElementById("parentNamesError");
const genderError = document.getElementById("genderError");
const parentContactError = document.getElementById("parentContactError");
const addressError = document.getElementById("addressError");
const childNumberError = document.getElementById("childNumberError");




 

// name validation
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


 // name validation
if (parentNames.value ==  "") {
    parentNames.style.border = "1px solid red";
    parentNamesError.textContent = "Please enter full name!";
    parentNamesError.style = "color: red;";
    error++;
    // error = error +1;
  } else {
    parentNames.style.border = "1px solid green";
    parentNamesError.textContent = "";
  }
 


  //contact validation
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


 //childNumber validation
 let childNumberRegex = /^(DSB)\d{3}$/;
 if (!childNumber.value.match(childNumberRegex)) {
   childNumber.style.border = "1px solid red";
   childNumberError.textContent = "Enter a valid childNumber , HINT: enter DSB*** digits";
   childNumberError.style =
     "color:red; font-size:11px; font-family:Arial, Helvetica, Sans-serif";
   // return false;
   error++;
 } else {
   childNumber.style.border = "1px solid green";
   childNumberError.textContent = "";
 }



 if (error > 0) {
   event.preventDefault();
 }
}