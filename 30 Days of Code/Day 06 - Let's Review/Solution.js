function processData (input) {
  //Enter your code here
  var parseArray = input.split(/\n/);
  for (var i = 1; i < parseArray.length; i++) {
    var tempString = parseArray[i];
    var evenString = '';
    var oddString = '';
    for (var j = 0; j < tempString.length; j++) {
      if (j % 2 === 0) {
        evenString = evenString + tempString.charAt(j);
      }else {
        oddString = oddString + tempString.charAt(j);
      }
    }
    console.log(evenString + ' ' + oddString);
  }

}

process.stdin.resume();
process.stdin.setEncoding('ascii');
_input = '';
process.stdin.on('data', function (input) {
  _input += input;
});

process.stdin.on('end', function () {
  processData(_input);
});
