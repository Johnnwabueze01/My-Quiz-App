//An Array passing the numbers, questions, options and answers
let questions = [
    {
        numb: 1,
        question: "How do you create a function in JavaScript?",
        answer: "a.)  function myFunction() {}",
        options: [
            "a.)  function myFunction() {}",
            "b.)  def myFunction() {}",
            "c.)  function: myFunction() {}",
            "d.)  create myFunction() {}"
        ]
    },
    {
        numb: 2,
        question: "What will the following code return: Boolean(10 > 9)?",
        answer: "a.)  true",
        options: [
            "a.)  true",
            "b.)  false",
            "c.)  NaN",
            "d.)  null"
        ]
    },
    {
        numb: 3,
        question: "How do you write 'Hello World' in an alert box?",
        answer: "a.)  alert('Hello World');",
        options: [
            "a.)  alert('Hello World');",
            "b.)  msg('Hello World');",
            "c.)  alertBox('Hello World');",
            "d.)  msgBox('Hello World');"
        ]
    },
    {
        numb: 4,
        question: "Which of the following is a correct way to declare a variable in JavaScript?",
        answer: "a.)  let myVar;",
        options: [
            "a.)  let myVar;",
            "b.)  variable myVar;",
            "c.)  v myVar;",
            "d.)  varr myVar;"
        ]
    },
    {
        numb: 5,
        question: "How can you detect the client's browser name?",
        answer: "a.)  navigator.appName",
        options: [
            "a.)  navigator.appName",
            "b.)  browser.name",
            "c.)  client.navName",
            "d.)  browser.appName"
        ]
    },
    {
        numb: 6,
        question: "Which method finds the HTML element by ID?",
        answer: "a.)  document.getElementById()",
        options: [
            "a.)  document.getElementById()",
            "b.)  document.getElementByName()",
            "c.)  document.findId()",
            "d.)  document.getId()"
        ]
    },
    {
        numb: 7,
        question: "How do you find the number with the highest value of x and y?*",
        answer: "a.)  Math.max(x, y)",
        options: [
            "a.)  Math.max(x, y)",
            "b.)  ceil(x, y)",
            "c.)  top(x, y)",
            "d.)  Math.ceil(x, y)"
        ]
    },
    {
        numb: 8,
        question: "How does a while loop start?",
        answer: "d.)  while (condition) {}",
        options: [
            "a.)  while (condition)",
            "b.)  while condition",
            "c.)  while {condition}",
            "d.)  while (condition) {}"
        ]
    },
    {
        numb: 9,
        question: "How can you add a single-line comment in JavaScript?",
        answer: "a.)  // comment",
        options: [
            "a.)  // comment",
            "b.)  # comment",
            "c.)   comment  ",
            "d.)  ** comment"
        ]
    },
    {
        numb: 10,
        question: "What is the purpose of the isNaN function?",
        answer: "a.)  To check if a value is not a number",
        options: [
            "a.)  To check if a value is not a number",
            "b.)  To check if a number is negative  ",
            "c.)  To convert a string to a number",
            "d.)  To check if a number is an integer  "
        ]
    },
    {
        numb: 11,
        question: "22. Which of the following is a loop structure in JavaScript?",
        answer: "a.)  for",
        options: [
            "a.)  for",
            "b.)  each",
            "c.)  loop",
            "d.)  repeat"
        ]
    },
    {
        numb: 12,
        question: "How do you create an object in JavaScript?",
        answer: "a.)  var obj = {};",
        options: [
            "a.)  var obj = {};",
            "b.)  var obj = Object();`  ",
            "c.)  var obj = new Object;",
            "d.)  var obj = create Object();"
        ]
    },
    {
        numb: 13,
        question: "Which method converts a JSON text to a JavaScript object?",
        answer: "a.)  JSON.parse()",
        options: [
            "a.)  JSON.parse()",
            "b.)  JSON.stringify()",
            "c.)  JSON.convert()",
            "d.)  JSON.toObject()"
        ]
    },
    {
        numb: 14,
        question: "Which of the following is not a JavaScript data type?",
        answer: "a.)  float",
        options: [
            "a.)  float",
            "b.)  string",
            "c.)  boolean",
            "d.)  undefined"
        ]
    },
    {
        numb: 15,
        question: "How do you declare a constant in JavaScript?",
        answer: "a.)  const PI = 3.14;",
        options: [
            "a.)  const PI = 3.14;",
            "b.)  constant PI = 3.14;",
            "c.)  var PI = 3.14;",
            "d.)  let PI = 3.14;"
        ]
    },
    {
        numb: 16,
        question: "What is the output of `typeof null` in JavaScript?",
        answer: "a.)  object",
        options: [
            "a.)  object",
            "b.)  null",
            "c.)  undefined",
            "d.)  string"
        ]
    },
    {
        numb: 17,
        question: "Which function is used to serialize an object into a JSON string in JavaScript?",
        answer: "a.)  JSON.stringify()",
        options: [
            "a.)  JSON.stringify()",
            "b.)  JSON.parse()",
            "c.)  JSON.serialize()",
            "d.)  JSON.encode()"
        ]
    },
    {
        numb: 18,
        question: "How can you create an array in JavaScript?",
        answer: "a.)  var arr = ['apple', 'banana', 'cherry'];",
        options: [
            "a.)  var arr = ['apple', 'banana', 'cherry'];",
            "b.)  var arr = array('apple', 'banana', 'cherry');",
            "c.)  var arr = array{'apple', 'banana', 'cherry'};",
            "d.)  var arr = list('apple', 'banana', 'cherry');"
        ]
    },
    {
        numb: 19,
        question: "What is the output of 2 + '2' in JavaScript?",
        answer: "d.)  undefined",
        options: [
            "a.)  22",
            "b.)  4",
            "c.)  NaN",
            "d.)  undefined"
        ]
    },
    {
        numb: 20,
        question: "How do you write an 'if' statement in JavaScript?",
        answer: "a.)  if (x > y)",
        options: [
            "a.)  if (x > y)",
            "b.)  if x > y then",
            "c.)  if x > y",
            "d.)  if x > y {}"
        ]
    },
    {
        numb: 21,
        question: "How can you convert a number to a string in JavaScript?",
        answer: "d.)  Both a) and c)",
        options: [
            "a.)  number.toString()",
            "b.)  number.convertToString()",
            "c.)  String(number)",
            "d.)  Both a) and c)"
        ]
    },
    {
        numb: 22,
        question: "What will the following code return: Boolean(3 < 2)?",
        answer: "a.)  false",
        options: [
            "a.)  false",
            "b.)  true",
            "c.)  null",
            "d.)  NaN"
        ]
    },
    {
        numb: 23,
        question: "Which of the following is a way to define a string variable in JavaScript?",
        answer: "d.)  All of the above",
        options: [
            "a.)  let str = 'Hello';",
            "b.)  let str = 'Hello';",
            "c.)  let str = `Hello`;",
            "d.)  All of the above"
        ]
    },
    {
        numb: 24,
        question: "How do you get the length of a string in JavaScript?",
        answer: "a.)  str.length",
        options: [
            "a.)  str.length",
            "b.)  length(str)",
            "c.)  str.size",
            "d.)  str.count"
        ]
    },
    {
        numb: 25,
        question: "Which of the following is a reserved word in JavaScript?",
        answer: "d.)  switch",
        options: [
            "a.)  default",
            "b.)  goto",
            "c.)  open",
            "d.)  switch"
        ]
    },
    {
        numb: 26,
        question: "How can you add an element to the beginning of an array?",
        answer: "a.)  array.unshift()",
        options: [
            "a.)  array.unshift()",
            "b.)  array.push()",
            "c.)  array.addFirst()",
            "d.)  array.prepend()"
        ]
    },
    {
        numb: 27,
        question: "What is the output of 1 == '1'?",
        answer: "a.)  true",
        options: [
            "a.)  true",
            "b.)  false",
            "c.)  null",
            "d.)  undefined"
        ]
    },
    {
        numb: 28,
        question: " Which of the following will log 'undefined' in the console?",
        answer: "c.)  console.log(typeof notDefinedVar);",
        options: [
            "a.)  console.log(typeof undefinedVar);",
            "b.)  console.log(typeof nullVar);",
            "c.)  console.log(typeof notDefinedVar);",
            "d.)  console.log(typeof 'undefined');"
        ]
    },
    {
        numb: 29,
        question: "What does === mean in JavaScript?",
        answer: "a.)  Strict equality",
        options: [
            "a.)  Strict equality",
            "b.)  Loose equality",
            "c.)  Assignment",
            "d.)  Greater than or equal"
        ]
    },
    {
        numb: 30,
        question: "Which of the following is not a valid JavaScript loop?",
        answer: "a.)  foreach",
        options: [
            "a.)  foreach",
            "b.)  while",
            "c.)  for",
            "d.)  do...while"
        ]
    },
    {
        numb: 31,
        question: "How do you create an array with 5 elements, all set to `null`?",
        answer: "a.)  var arr = Array(5).fill(null);",
        options: [
            "a.)  var arr = Array(5).fill(null);",
            "b.)  var arr = Array.fill(null, 5);",
            "c.)  var arr = [null, 5];",
            "d.)  var arr = [null * 5];"
        ]
    },
    {
        numb: 32,
        question: "Which of the following is not a valid JavaScript operator?",
        answer: "d.)  <>",
        options: [
            "a.)  &&",
            "b.)  ||",
            "c.)  ??",
            "d.)  <>"
        ]
    },
    {
        numb: 33,
        question: " What will `console.log('3' + 2);` output?",
        answer: "a.)  32",
        options: [
            "a.)  32",
            "b)  5",
            "c.)  NaN",
            "d.)  Error"
        ]
    },
    {
        numb: 34,
        question: "How do you remove the last element from an array?",
        answer: "a.)  array.pop()",
        options: [
            "a.)  array.pop()",
            "b.)  array.shift()",
            "c.)  array.removeLast()",
            "d.)  array.deleteLast()"
        ]
    },
    {
        numb: 35,
        question: "How do you get a random number between 0 and 1 in JavaScript?",
        answer: "a.)  Math.random()",
        options: [
            "a.)  Math.random()",
            "b.)  Math.rnd()",
            "c.)  Math.rand()",
            "d.)  random()"
        ]
    },
    {
        numb: 36,
        question: "What will be the output of `typeof null`?",
        answer: "a.)  object",
        options: [
            "a.)  object",
            "b.)  null",
            "c.)  undefined",
            "d.)  string"
        ]
    },
    {
        numb: 37,
        question: "How do you create a Date object in JavaScript?",
        answer: "a.)  var d = new Date();",
        options: [
            "a.)  var d = new Date();",
            "b.)  var d = Date();",
            "c.)  var d = new Date;",
            "d.)  var d = date();"
        ]
    },
    {
        numb: 38,
        question: "How do you find the number with the lowest value of x and y?",
        answer: "a.)  Math.min(x, y)",
        options: [
            "a.)  Math.min(x, y)",
            "b.)  Math.low(x, y)",
            "c.)  Math.floor(x, y)",
            "d.)  Math.small(x, y)"
        ]
    },
    {
        numb: 39,
        question: "How do you add an event listener to an element in JavaScript?",
        answer: "a.)  element.addEventListener('click', myFunction);",
        options: [
            "a.)  element.addEventListener('click', myFunction);",
            "b.)  element.on('click', myFunction);",
            "c.)  element.listen('click', myFunction);",
            "d.)  element.bind('click', myFunction);"
        ]
    },
    {
        numb: 40,
        question: "Which method returns the character at a specified index in a string?",
        answer: "a.)  charAt()",
        options: [
            "a.)  charAt()",
            "b.)  getChar()",
            "c.)  charAtIndex()",
            "d.)  getCharAt()"
        ]
    },
    {
        numb: 41,
        question: " How do you remove a property from anobject?",
        answer: "a.)  delete object.poperty;",
        options: [
            "a.)  delete object.poperty;",
            "b.)  remove object.poperty;",
            "c.)  unset object.poperty;",
            "d.)  deleteProperty object.poperty;"
        ]
    },
    {
        numb: 42,
        question: "How do you convert a string to an integer in JavScript?",
        answer  : "a.)  paseInt()",
        options: [
            "a.)  paseInt()",
            "b.)  parsFloat()",
            "c.)  toInt()",
            "d.)  umber()"
        ]
    },
    {
        numb: 43,
        question: "How do you declare a class in JavScript?",
        answer: "a.)  class Mylass {}",
        options: [
            "a.)  class Mylass {}",
            "b.)  class: Mylass {}",
            "c.)  new Mylass {}",
            "d.)  define class Mylass {}"
        ]
    },
    {
        numb: 44,
        question: "Which of the following is not a falsy value in JavScript?",
        answer: "a.)  1",
        options: [
            "a.)  1",
            "b.)  0",
            "c.)  null",
            "d.)  udefined"
        ]
    },
    {
        numb: 45,
        question: "How do you check if an array includes a specific lement?",
        answer: "a.)  array.includes(element)",
        options: [
            "a.)  array.includes(element)",
            "b.)  array.contains(lement)",
            "c.)  array.has(lement)",
            "d.)  array.check(lement)"
        ]
    },
    {
        numb: 46,
        question: "Which of the following is a primitive data type in JavScript?",
        answer: "a.)  string",
        options: [
            "a.)  string",
            "b.)  array",
            "c.)  object",
            "d.)  function"
        ]
    },
    {
        numb: 47,
        question: "What is the value of `2 ** 3` in JavScript?",
        answer: "a.)  8",
        options: [
            "a.)  8",
            "b.)  6",
            "c.) 16",
            "d.)  12"
        ]
    },
    {
        numb: 48,
        question: "Which method is used to join all elements of an array into astring?",
        answer: "a.)  array.join()",
        options: [
            "a.)  array.join()",
            "b.)  array.oncat()",
            "c.)  array.jointring()",
            "d.)  array.totring()"
        ]
    },
    {
        numb: 49,
        question: "How do you declare a function expression in JavaScript?",
        answer: "d.)  Both a) and c)",
        options: [
            "a.)  var myFunc = functin() {};",
            "b.)  function myFuc() {};",
            "c.)  let myFunc = functin() {};",
            "d.)  Both a) and c)"
        ]
    },
    {
        numb: 50,
        question: "What is the output of ('5' + 2) in JavScript?",
        answer: "a.)  '52'",
        options: [
            "a.)  '52'",
            "b.)  7",
            "c.)  NaN",
            "d.)  Error"
        ]
    },
];