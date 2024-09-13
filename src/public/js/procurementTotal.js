  // Calculate total price based on item quantity and unit price
  document.getElementById('itemQuantity').addEventListener('input', function() {
    calculateTotalPrice();
  });
  document.getElementById('itemUnitPrice').addEventListener('input', function() {
    calculateTotalPrice();
  });

  function calculateTotalPrice() {
    var quantity = parseFloat(document.getElementById('itemQuantity').value);
    var unitPrice = parseFloat(document.getElementById('itemUnitPrice').value);
    var totalPrice = quantity * unitPrice;
    document.getElementById('totalPrice').value = totalPrice.toFixed(2);
  }
