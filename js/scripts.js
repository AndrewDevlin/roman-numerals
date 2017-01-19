// Back-end logic

var convertI = function(number) {
  var output = '';

  if (number < 5 && number > 0) {
    for (var index = 1; index <= number; index += 1) {
      output = output + "I";
    }
    return output;
  }
};

var convertV = function(number) {
  var output = '';

  if (number > 4 && number < 10) {
    number = number - 5;
    output = output + "V" + (convertI(number));
  }

  return output;
};

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

var tooHigh = function(number) {
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

    userInput = convertV(userInput);

    $(".user-roman").text(userInput);

  });

});
