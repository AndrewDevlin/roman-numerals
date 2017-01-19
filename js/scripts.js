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
    if (convertI(number) != undefined) {
      output = output + "V" + (convertI(number));
    } else {
      output = output + "V";
    }
  } else if (convertI(number) != undefined) {
    output = output + convertI(number);
  }

  return output;
};

var convertX = function(number) {
  var output = '';

  if (number < 50 && number > 9) {
    for (index = number; index > 9; index = number) {
      output = output + "X";
      number = number - 10;
    }
    output = output + convertV(number);
  } else {
    output = output + convertV(number);
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
  $("#roman-numeral .btn").click(function(event) {
    event.preventDefault();

    var userInput = parseInt($("input#user-number").val());

    userInput = convertX(userInput);

    $(".user-roman").text(userInput);

  });

});
