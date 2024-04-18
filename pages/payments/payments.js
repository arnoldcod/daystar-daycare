// Get the modal
const modal = document.getElementById('paymentModal');

// Get the button that opens the modal
const btn = document.getElementById('openModalBtn');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};

// Payment Form Submission
document.getElementById('paymentForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form values
  const childName = document.getElementById('childName').value;
  const childAge = parseInt(document.getElementById('childAge').value);
  const periodOfStay = parseInt(document.getElementById('periodOfStay').value);
  const childId = document.getElementById('childId').value;
  const contact = document.getElementById('contact').value;
  const address = document.getElementById('address').value;
  const sitterId = document.getElementById('sitterId').value;
  const sitterPayment = parseFloat(document.getElementById('sitterPayment').value);
  const babyHalfDay = parseFloat(document.getElementById('babyHalfDay').value);
  const babyFullDay = parseFloat(document.getElementById('babyFullDay').value);
  const payerName = document.getElementById('payerName').value;
  const paymentDate = document.getElementById('paymentDate').value;
  const paymentTime = document.getElementById('paymentTime').value;

  // Calculate total payment
  const totalPayment = sitterPayment + babyHalfDay + babyFullDay;

  // Create payment details object
  const paymentDetails = {
    childName: childName,
    childAge: childAge,
    periodOfStay: periodOfStay,
    childId: childId,
    contact: contact,
    address: address,
    sitterId: sitterId,
    sitterPayment: sitterPayment,
    babyHalfDay: babyHalfDay,
    babyFullDay: babyFullDay,
    totalPayment: totalPayment,
    payerName: payerName,
    paymentDate: paymentDate,
    paymentTime: paymentTime
  };

  // Display payment in history
  displayPayment(paymentDetails);
});

// Display payment in history table
function displayPayment(paymentDetails) {
  const paymentList = document.getElementById('paymentList');
  const row = paymentList.insertRow();

 
  // Create cells for the row
  const nameCell = row.insertCell();
  const ageCell = row.insertCell();
  const stayCell = row.insertCell();
  const idCell = row.insertCell();
  const contactCell = row.insertCell();
  const addressCell = row.insertCell();
  const sitterNumberCell= row.insertCell();
  const sitterCell = row.insertCell();
  const halfDayCell = row.insertCell();
  const fullDayCell = row.insertCell();
  const totalCell = row.insertCell();
  const payerCell = row.insertCell();
  const dateCell = row.insertCell();
  const timeCell = row.insertCell();
  const actionsCell = row.insertCell();

  // Populate cells with data
  nameCell.textContent = paymentDetails.childName;
  ageCell.textContent = paymentDetails.childAge;
  stayCell.textContent = paymentDetails.periodOfStay;
  idCell.textContent = paymentDetails.childId;
  contactCell.textContent = paymentDetails.contact;
  addressCell.textContent = paymentDetails.address;
  sitterNumberCell.textContent = paymentDetails.sitterId;
  sitterCell.textContent = paymentDetails.sitterPayment + " UGX";
  halfDayCell.textContent = paymentDetails.babyHalfDay + " UGX" ;
  fullDayCell.textContent = paymentDetails.babyFullDay + " UGX" ;
  totalCell.textContent = paymentDetails.totalPayment + " UGX";
  payerCell.textContent = paymentDetails.payerName;
  dateCell.textContent = paymentDetails.paymentDate;
  timeCell.textContent = paymentDetails.paymentTime;

 

  // Create edit and delete buttons
  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('edit-btn');
  editButton.addEventListener('click', function() {
    // Call edit function with paymentDetails to edit
    editPayment(paymentDetails);
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('delete-btn');
  deleteButton.addEventListener('click', function() {
    // Call delete function with paymentDetails to delete
    deletePayment(paymentDetails, row);
  });

  // Append buttons to actions cell
  actionsCell.appendChild(editButton);
  actionsCell.appendChild(deleteButton);
}

// Edit payment function
function editPayment(paymentDetails) {
  // Prompt user to enter new data
  const newName = prompt("Enter the new name of the child:", paymentDetails.childName);
  const newAge = prompt("Enter the new age of the child:", paymentDetails.childAge);
  const newStay = prompt("Enter the new period of stay (hours):", paymentDetails.periodOfStay);
  const newId = prompt("Enter the new ID of the child:", paymentDetails.childId);
  const newContact = prompt("Enter the new contact number:", paymentDetails.contact);
  const newAddress = prompt("Enter the new address:", paymentDetails.address);
  const newSitterPayment = prompt("Enter the new sitter payment (UGX):", paymentDetails.sitterPayment);
  const newHalfDayPayment = prompt("Enter the new half-day babysitting payment (UGX):", paymentDetails.babyHalfDay);
  const newFullDayPayment = prompt("Enter the new full-day babysitting payment (UGX):", paymentDetails.babyFullDay);
  const newPayerName = prompt("Enter the new name of the payer:", paymentDetails.payerName);
  const newDate = prompt("Enter the new payment date:", paymentDetails.paymentDate);
  const newTime = prompt("Enter the new payment time:", paymentDetails.paymentTime);




  // Update payment details if new data is provided
  if (newName !== null) {
    paymentDetails.childName = newName;
  }
  if (newAge !== null) {
    paymentDetails.childAge = newAge;
  }
  if (newStay !== null) {
    paymentDetails.periodOfStay = newStay;
  }
  if (newId !== null) {
    paymentDetails.childId = newId;
  }
  if (newContact !== null) {
    paymentDetails.contact = newContact;
  }
  if (newAddress !== null) {
    paymentDetails.address = newAddress;
  }
  if (newSitterPayment !== null) {
    paymentDetails.sitterPayment = newSitterPayment;
  }
  if (newHalfDayPayment !== null) {
    paymentDetails.babyHalfDay = newHalfDayPayment;
  }
  if (newFullDayPayment !== null) {
    paymentDetails.babyFullDay = newFullDayPayment;
  }
  if (newPayerName !== null) {
    paymentDetails.payerName = newPayerName;
  }
  if (newDate !== null) {
    paymentDetails.paymentDate = newDate;
  }
  if (newTime !== null) {
    paymentDetails.paymentTime = newTime;
  }

  // Update the displayed data in the table
  const paymentList = document.getElementById('paymentList');
  const row = paymentList.rows[paymentList.rows.length - 1];
  row.cells[0].textContent = paymentDetails.childName;
  row.cells[1].textContent = paymentDetails.childAge;
  row.cells[2].textContent = paymentDetails.periodOfStay;
  row.cells[3].textContent = paymentDetails.childId;
  row.cells[4].textContent = paymentDetails.contact;
  row.cells[5].textContent = paymentDetails.address;
  row.cells[6].textContent = paymentDetails.sitterPayment;
  row.cells[7].textContent = paymentDetails.babyHalfDay;
  row.cells[8].textContent = paymentDetails.babyFullDay;
  row.cells[9].textContent = paymentDetails.payerName;
  row.cells[10].textContent = paymentDetails.paymentDate;
  row.cells[11].textContent = paymentDetails.paymentTime;
}



// Delete payment function
function deletePayment(paymentDetails, row) {
  // Ask for confirmation
  const confirmation = confirm("Are you sure you want to delete this payment?");

  // If user confirms
  if (confirmation) {
    // Remove the row from the table
    row.parentNode.removeChild(row);
    console.log('Delete payment:', paymentDetails);
  } else {
    // If user cancels, do nothing
    console.log('Delete cancelled');
  }
}

