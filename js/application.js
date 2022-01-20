$( document ).ready(function() {

  //Function for subtotal sum and total sum:
  var sum = function () {
    // getting the variables initial values:
  var total = 0;
  var subtotal = 0;
  var prices = $('.price');
  var qty = $('.quantity input');
    // calculating the subtotal of each item:
    
    for (var i = 0; i < qty.length; i++)
    {
    
      var price = Number($(prices[i]).text().replace('€', ''));
      
      var subtotal = (Number($(qty[i]).val())) * price;
      console.log(subtotal);
      if (subtotal !== 0) {
      $($('.item-subtotal')[i]).text("€ " + subtotal);
      }
      else {
        $($('.item-subtotal')[i]).text("€--.--");
      }
      total += subtotal;
    }
    $('#total-price').text("€ " + total);
    return total;
  }
    $(document).on('keyup', '.Qty-input', function () {
      sum();
    });
});




