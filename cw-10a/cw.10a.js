var gimme = function (inputArray) {
  for (var i = 0; i < inputArray.length; i++) {
    if ((inputArray[0] > inputArray[1] && inputArray[0] < inputArray[2]) || (inputArray[0] <inputArray[1] && inputArray[0] > inputArray[2])) {
    return 0;
    }
    else if ((inputArray[1] > inputArray[0] && inputArray[1] < inputArray[2]) || (inputArray[1] <inputArray[0] && inputArray[1] > inputArray[2])) {
      return 1;
    }
    else if ((inputArray[2] > inputArray[0] && inputArray[2] < inputArray[1]) || (inputArray[2] <inputArray[0] && inputArray[2] > inputArray[1])) {
      return 2;
    }
  }
};