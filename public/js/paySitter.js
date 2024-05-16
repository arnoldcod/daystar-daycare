  // Function to calculate totalPay based on babyNumber and paidFee
  function calculatetotalPay() {
    const babyNumber = parseInt(document.getElementById('babyNumber').value);
    const paidFee = parseInt(document.getElementById('paidFee').value);
  
    // Calculate totalPay
    const totalPay = babyNumber * paidFee;
  
    // Display calculated totalPay in the totalPay input field
    document.getElementById('totalPay').value = totalPay;
  }
  
  // Attach calculatetotalPay function to babyNumber and paidFee input fields (on input change)
  document.getElementById('babyNumber').addEventListener('input', calculatetotalPay);
  document.getElementById('paidFee').addEventListener('input', calculatetotalPay);