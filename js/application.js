$(document ).ready(function() {
  //Function for subtotal sum and total sum:
  var sum = function () {
    // getting the variables initial values:
  var total = 0;
  var subtotal = 0;
  var prices = $('.price');
  var qty = $('.quantity input');
    // calculating the subtotal of each item:
    for (var i = 0; i < qty.length; i++) {
      var price = Number($(prices[i]).text().replace('€', ''));
      var subtotal = (Number($(qty[i]).val())) * price;
      //console.log(subtotal);
      if (subtotal !== 0) {
      $($('.item-subtotal')[i]).text("€ " + subtotal);
      }
      else {
        $($('.item-subtotal')[i]).text("€--.--");
      }
      total += subtotal;
    }
    $('#total-price').text(total + " €");
    return total;

  }
    // Calling the sum function on these events:
    $(document).on('keyup click', '.Qty-input', function () {
      sum();
    });

    //Removing list item:
    //Animation and remove:
    function cuteHide(item) {
        item.animate({opacity: '0'}, 50, function(){
        item.animate({height: '0px'}, 50, function(){
        });
        item.remove();
        sum();
      });
    }
    //Click Event to remove list item:
    $(document).on('click', '.btn-remove', function() {
      var item = $(this).closest('tr');
      cuteHide(item);
    });

    //Add new item:
    $('#addItem').on('submit', function(event) {
      event.preventDefault();
    //Get value of the inputs:
    var item = $(this).children('[name=item]').val();
    var price = $(this).children('[name=price]').val();

    // Insert in html:
    $('tbody').prepend('<tr class="spacetable transit">' + 
    '<td class="item">' + item + '</td>' +
    '<td class="price">' + price + " €" + "</td>" +
    '<td class="quantity"><input class="Qty-input" type="number" min="0"/></td>' +
    '<td><button class="btn btn-danger btn-remove">Remove</button></td>' + 
    '<td class="item-subtotal">€--.--</td>' + 
    '</tr>');
    
     //Empty the add inputs:
     item = $(this).children('[name=item]').val('');
     price = $(this).children('[name=price]').val('');
    });

   
});




