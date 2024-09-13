//This code below manages child data in an administration dashboard. Here's an explanation of each function:

let selectedChild = null;
let editedChildData = null;

function editChild() {  //It finds all input and select elements within the selected child card and enables them for editing
  if (selectedChild) {
    const formFields = selectedChild.querySelectorAll('input, select');
    formFields.forEach(field => {
      field.disabled = false;
    });
  }
}

function saveChild() { // It updates the edited child data object with the values entered in the form fields, disables the form fields after saving, and stores the updated data in the browser's local storage.
  if (editedChildData) {
    const childNumber = editedChildData.childNumber;
    const formFields = selectedChild.querySelectorAll('input, select');
    formFields.forEach(field => {
      editedChildData[field.name] = field.value;
      field.disabled = true; // Disable fields after saving
    });
    localStorage.setItem(`child_${childNumber}`, JSON.stringify(editedChildData));
    alert("Child data updated and saved successfully!");
    editedChildData = null;
  }
}

function deleteChild() { //It removes the child data from local storage, removes the selected child card from the DOM, and resets the selected child and edited child data to null.
  if (selectedChild) {
    const childNumber = editedChildData.childNumber;
    localStorage.removeItem(`child_${childNumber}`);
    selectedChild.remove();
    selectedChild = null;
    editedChildData = null;
    alert("Child data deleted successfully!");
  }
}

document.getElementById('childrenList').addEventListener('click', function(event) {
  const clickedChild = event.target.closest('.child-card'); //listens for clicks on child cards. When a child card is clicked, it selects the clicked child card, updates the selected child and edited child data, enables form fields for editing, and displays the child image.
  if (clickedChild) {
    if (selectedChild) {
      selectedChild.classList.remove('selected');  
    }
    selectedChild = clickedChild;
    selectedChild.classList.add('selected');
    const childNumber = selectedChild.querySelector('[name="childNumber"]').value;
    editedChildData = JSON.parse(localStorage.getItem(`child_${childNumber}`));
    const formFields = selectedChild.querySelectorAll('input, select');
    formFields.forEach(field => {
      field.disabled = false;
      field.value = editedChildData[field.name];
    });

    // Display child image
    const childImage = selectedChild.querySelector('.child-image');
    childImage.src = editedChildData.image;
    childImage.style.display = 'block';
  }
});

// show all the  children  list on page load (Dummy data)
document.addEventListener('DOMContentLoaded', function() {
  const childrenList = document.getElementById('childrenList');
  childrenList.innerHTML = '';  //removes all info in childrenList 
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i); //checks every info about children stored in local storage
    if (key.startsWith('child_')) { 
      const childData = JSON.parse(localStorage.getItem(key));
      const childCard = document.createElement('div'); // checks if the information is about a child. If it is, then it will pick it
      childCard.classList.add('child-card');
      childCard.innerHTML = 
        `<h2>${childData.name}</h2>
        <p>Date of Birth: ${childData.dob}</p>
        <p>Age: ${childData.age}</p>
        <p>Gender: ${childData.gender}</p>
        <p>Parent Names: ${childData.parentNames}</p>
        <p>Contact: ${childData.contact}</p>
        <p>Address: ${childData.address}</p>
        <p>Period of Stay: ${childData.periodOfStay}</p>
        <p>Child Brought By: ${childData.childBroughtBy}</p>
        <p>Arrival Time: ${childData.arrivalTime}</p>
        <p>Paid Fee(UGX):: ${childData.paidFee}</p>
        <p>Child Picked by: ${childData.childPickedBy}</p>
        <p>Departure Time: ${childData.departureTime}</p>
        <p>Child Number: ${childData.childNumber}</p>

        <input type="hidden" name="childNumber" value="${childData.childNumber}">
        `;
      childrenList.appendChild(childCard); // calls childCard on line 72
    }
  }
});

//inshort , this code allows users to edit, save, and delete child data in an administration dashboard, and it populates the child list on page load using data stored in local storage.
