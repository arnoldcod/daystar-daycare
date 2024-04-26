$(document).ready(function(){
    // Add to cart button click handler
    $(".add-to-cart").click(function(){
      var name = $(this).data("name");
      var price = $(this).data("price");
      var imageId = $(this).data("image-id");
      var imageUrl = $("#" + imageId + "-input").val(); // Get the value of the file input field
      
      // Send the item data to the server
      $.ajax({
        type: 'POST',
        url: '/cart/add',
        data: { name: name, price: price, imageUrl: imageUrl },
        success: function(response) {
          console.log('Item added to cart:', response.cart);
          // Optionally, update the cart display here
        },
        error: function(err) {
          console.error('Error adding item to cart:', err.responseJSON.message);
        }
      });
    });
  });
  