//JS Basics
//Run npm test in the command line to test your solutions
module.exports = {
  reverseIt: function (str) {
    const letters = Array.from(str);
    const reverse = []
    for (var x = letters.length - 1; x >= 0; x--) {
      reverse.push(letters[x]);
    }

    return reverse.join('');
  },

  //uncomment and finish the reverseIt function. It will take in one parameter which is a String and
  //reverse it

  removeDups: function (arr) {
    const remDup = [];
    for (var i = 0; i < arr.length; i++) {
      if (remDup.includes(arr[i])) {
      }
      else {
        remDup.push(arr[i]);
      }
    }
    return remDup;
  },

  //uncomment and finish the removeDups function. It will take in one parameter which is an Array
  //remove all duplicates

  titleIt: function (str) {
  newStr = [];
    const arr = str.split(' ');
    arr.forEach( elem => {
      var word = Array.from(elem)
      var letter = word[0].toUpperCase();
      word[0] = letter;
      newStr.push(word.join(''))
    })
    return newStr.join(' ');
  },

  //uncomment and finish the titleIt function. It will take in one parameter which is a String and
  //capitalize the first letter of each word

  vowelCounter: function (str) {
  const arr = Array.from(str);
  var counter = 0;
  const work = arr.map( letter => letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u' ? counter++ : false)
  return counter;
},

  //uncomment and finish the vowelCounter function. It will take in one parameter which is a String and
  //return the number of vowels in the string

  isPrime: function (num) {
  var pr = true;
  for (var i = 2; i < num; i++ ) {
    if (num === 2 || num <= 0) {
      pr = true;
      return pr;
    }
    else if (num % i !== 0){
      pr = true;
    }
    else {
      pr = false;
      return pr;
    }
  }
  num < 0 ? pr = false : pr;
  return pr;
},

  //uncomment and finish the isPrime function. It will take in one parameter which is a Number and
  //return true if it is prime and false if it is not

  //what is the value of foo?
  //var foo = 10 + '20';
  //uncomment the foo property and give your answer as its value

  foo:'1020',

  //what is the outcome of the two console.logs below?
  //   var foo = "Hello";
  // (function() {
  //   var bar = " World";
  //   console.log(foo + bar);
  // })();
  // console.log(foo + bar);
  // uncomment the log1 and log2 properties and give your answers as their values

  log1: 'Hello World',
  log2: undefined
}
