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
    for (var index = number; index > 9; index = number) {
      output = output + "X";
      number = number - 10;
    }
    output = output + convertV(number);
  } else {
    output = output + convertV(number);
  }

  return output;
};

var convertL = function(number) {
  var output = '';

  if (number > 49 && number < 100) {
    for (var index = number; index > 49; index -= 50) {
      output = output + "L";
    }
  }
  if (convertX(number % 50) != undefined) {
    output = output + convertX(number % 50);
  }
  return output;
};

var convertC = function(number) {
  var output = '';

  if (number > 99 && number < 500) {
    for (var index = number; index > 99; index -= 100) {
      output = output + "C";
    }
  }
  if (convertL(number % 100) != undefined) {
    output = output + convertL(number % 100);
  }
  return output;
};

var convertD = function(number) {
  var output = '';

  if (number > 499 && number < 1000) {
    for (var index = number; index > 499; index -= 500) {
      output = output + "D";
    }
  }
  if (convertC(number % 500) != undefined) {
    output = output + convertC(number % 500);
  }
  return output;
};

var convertM = function(number) {
  var output = '';

  if (number > 999 && number < 4000) {
    for (var index = number; index > 999; index -= 1000) {
      output = output + "M";
    }
  }
  if (convertD(number % 1000) != undefined) {
    output = output + convertD(number % 1000);
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

    userInput = convertM(userInput);

    $(".user-roman").text(userInput);

  });

});
