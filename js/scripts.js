// Back-end logic

var romanNumbers = function(number) {
  var output = '';
  if (number === 1) {
    output = "I";
  } else if (number === 5) {
      output = "V";
  } else if (number === 10) {
      output = 'X';
  } else if (number ===50) {
      output = 'L';
  } else if (number === 100) {
      output = 'C';
  } else if (number === 500) {
      output = 'D';
  } else if (number === 1000) {
      output = 'M';
  }
  return output;
};

var toHigh = function(number) {
  if (number > 3999 || number < 0) {
    return true;
  } else {
    return false;
  }
};


// Front-end logic

$(document).ready(function() {
  $("form#roman-numeral").click(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#user-number").val());
    alert(toHigh(userInput));
    $(".user-roman").text(romanNumbers(userInput));

  });

});
