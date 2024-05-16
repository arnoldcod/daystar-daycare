// function validateForm() {
//     // Get form inputs
//     const dollName = document.getElementById('dollName').value.trim();
//     const quantity = parseInt(document.getElementById('quantity').value);
//     const price = parseInt(document.getElementById('price').value);
//     const description = document.getElementById('description').value.trim();
  
//     // Check if any field is empty
//     if (!dollName || !quantity || !price || !description) {
//         alert('Please fill out all fields.');
//         return false; // Prevent form submission
//     }
  
//     // Check if quantity and price are valid numbers
//     if (isNaN(quantity) || isNaN(price) || quantity <= 0 || price <= 0) {
//         alert('Please enter valid numbers for Quantity and price.');
//         return false; // Prevent form submission
//     }
  
//     return true; // Proceed with form submission
//   }
  


  // Function to calculate sellPrice based on quantity and price
  function calculatesellPrice() {
    const quantity = parseInt(document.getElementById('quantity').value);
    const price = parseInt(document.getElementById('price').value);
  
    // Calculate sellPrice
    const sellPrice = quantity * price;
  
    // Display calculated sellPrice in the sellPrice input field
    document.getElementById('sellPrice').value = sellPrice;
  }
  
  // Attach calculatesellPrice function to quantity and price input fields (on input change)
  document.getElementById('quantity').addEventListener('input', calculatesellPrice);
  document.getElementById('price').addEventListener('input', calculatesellPrice);