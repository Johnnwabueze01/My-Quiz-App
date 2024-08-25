//getting required elements
const start_btn = document.querySelector(".start_btn button");
const info_Box = document.querySelector(".info_Box");
const exit_btn = document.querySelector(".buttons .quit");
const continue_btn = document.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = quiz_box.querySelector(".timer .time_sec")
const timeline = quiz_box.querySelector("header .time_line")
const timeoff = quiz_box.querySelector("header .time_text")

//if start quiz button ic clicked
start_btn.onclick = ()=>{
    info_Box.classList.add("activeinfo");//shows info box
}

//if exit button is clicked
exit_btn.onclick = ()=>{
    info_Box.classList.remove("activeinfo");//hides info box
}

//if exit button is clicked
continue_btn.onclick = ()=>{
    info_Box.classList.remove("activeinfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    starttimer(15);
    starttimerline(0)
}

let que_count = 0;
let que_numb = 1;
let counter;
let counterline;
let timevalue = 15;
let widthvalue = 0;
let userscore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    result_box.classList.remove("activeresult");
    quiz_box.classList.add("activeQuiz");
    let que_count = 0;
    let que_numb = 1;
    let timevalue = 15;
    let widthvalue = 0;
    let userscore = 0;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    starttimer(timevalue)
    clearInterval(counterline);
    starttimerline(widthvalue);
    next_btn.style.display = "none";
    timeoff.textContent = "Time Left";



}

quit_quiz.onclick = ()=>{
    window.location.reload();
}

//if next button is clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    starttimer(timevalue)
    clearInterval(counterline);
    starttimerline(widthvalue);
    next_btn.style.display = "none";
    timeoff.textContent = "Time Left";

    }else{
        clearInterval(counter);
        clearInterval(counterline);
        console.log("Question Completed");
        showResultBox();
    }
}

//getting questions and options from Array
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let que_tag = "<span>"+ questions[index].numb + ". " + questions[index].question +"</span>";
   let option_tag = '<div class="option">'+ questions[index].options[0] +'<span></span></div>'
                   + '<div class="option">'+ questions[index].options[1] +'<span></span></div>'
                  + '<div class="option">'+ questions[index].options[2] +'<span></span></div>'
                    + '<div class="option">'+ questions[index].options[3] +'<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option")
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionselected(this)");
        
    }
}

let tickicon = '<div class="icon tick"><i class="fas fa-check"></i></div>'
let crossicon = '<div class="icon cross"><i class="fas fa-times"></i></div>'


function optionselected(answer){
    clearInterval(counterline);
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let alloptions = option_list.children.length;
    if(userAns == correctAns){
        userscore += 1;
        console.log(userscore);
        answer.classList.add("correct");
      console.log("Answer is Correct");
      answer.insertAdjacentHTML("beforeend", tickicon);
    }else{
        answer.classList.add("incorrect");
        console.log("Answer is Wrong");
        answer.insertAdjacentHTML("beforeend", crossicon);

        //if answer is in correct then automatically get the right answer
        for (let i = 0; i < alloptions; i++) {
           if(option_list.children[i].textContent ==correctAns){
             option_list.children[i].setAttribute("class", "option correct");
             option_list.children[i].insertAdjacentHTML("beforeend", tickicon);
           }
    }
    }
    //once user select disable all options
    for (let i = 0; i < alloptions; i++) {
        option_list.children[i].classList.add("disabled");
        
    }
    next_btn.style.display = "block";
}

function showResultBox(){
    info_Box.classList.remove("activeinfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeresult");
    const scoretext = result_box.querySelector(".score_text");
    if(userscore > 3){
        let scoretag =  '<span>congrats. You got <p>'+ userscore +'</p> out of <p>'+ questions.length +'</p> </span>';
        scoretext.innerHTML = scoretag ;
    }
    else if(userscore > 3){
        let scoretag =  '<span>Nice. You got only <p>'+ userscore +'</p> out of <p>'+ questions.length +'</p> </span>';
        scoretext.innerHTML = scoretag ;
    }
    else{
        let scoretag =  '<span>and sorry. You got only <p>'+ userscore +'</p> out of <p>'+ questions.length +'</p> </span>';
        scoretext.innerHTML = scoretag ;
    }
}

function starttimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addzero = timeCount.textContent;
            timeCount.textContent = "0" + addzero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeoff.textContent = "Time Off";

            let correctAns = questions[que_count].answer;
            let alloptions = option_list.children.length;

            for (let i = 0; i < alloptions; i++) {
                if(option_list.children[i].textContent ==correctAns){
                  option_list.children[i].setAttribute("class", "option correct");
                  option_list.children[i].insertAdjacentHTML("beforeend", tickicon);
                }
         }
         for (let i = 0; i < alloptions; i++) {
            option_list.children[i].classList.add("disabled");
            
        }
        next_btn.style.display = "block";
        }
    }
}

function starttimerline(time){
    counterline = setInterval(timer, 29);
    function timer(){
        time += 1;
        timeline.style.width = time + "px";
        if(time > 549){
            clearInterval(counterline);
        }
    }
}






function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag =  '<span><p>'+ index +'</p>of <p>'+ questions.length +'</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}










Here are 100 JavaScript multiple-choice questions with four options each. The correct answer is included in the options:

---

**1. What is the correct syntax for referring to an external script called "app.js"?**  
a) `<script src="app.js">`  
b) `<script href="app.js">`  
c) `<script ref="app.js">`  
d) `<script name="app.js">`  
**Answer**: a) `<script src="app.js">`

---

**2. How do you write "Hello World" in an alert box?**  
a) `alert("Hello World");`  
b) `msg("Hello World");`  
c) `alertBox("Hello World");`  
d) `msgBox("Hello World");`  
**Answer**: a) `alert("Hello World");`

---

**3. Which of the following is a correct way to declare a variable in JavaScript?**  
a) `let myVar;`  
b) `variable myVar;`  
c) `v myVar;`  
d) `varr myVar;`  
**Answer**: a) `let myVar;`

---

**4. Which method can be used to combine two or more arrays?**  
a) `concat()`  
b) `attach()`  
c) `combine()`  
d) `merge()`  
**Answer**: a) `concat()`

---

**5. How do you create a function in JavaScript?**  
a) `function myFunction() {}`  
b) `def myFunction() {}`  
c) `function: myFunction() {}`  
d) `create myFunction() {}`  
**Answer**: a) `function myFunction() {}`

---

**6. How do you call a function named "myFunction"?**  
a) `call function myFunction()`  
b) `myFunction()`  
c) `call myFunction()`  
d) `execute myFunction()`  
**Answer**: b) `myFunction()`

---

**7. How can you add a comment in JavaScript?**  
a) `// This is a comment`  
b) `<!-- This is a comment -->`  
c) `* This is a comment *`  
d) `:: This is a comment ::`  
**Answer**: a) `// This is a comment`

---

**8. Which of the following will write the message "Hello JavaScript" on the web page?**  
a) `document.write("Hello JavaScript");`  
b) `document.print("Hello JavaScript");`  
c) `document.log("Hello JavaScript");`  
d) `document.alert("Hello JavaScript");`  
**Answer**: a) `document.write("Hello JavaScript");`

---

**9. What is the correct way to write a JavaScript array?**  
a) `var colors = ["red", "green", "blue"];`  
b) `var colors = (1:"red", 2:"green", 3:"blue");`  
c) `var colors = "red", "green", "blue";`  
d) `var colors = (red, green, blue);`  
**Answer**: a) `var colors = ["red", "green", "blue"];`

---

**10. How do you round the number 7.25 to the nearest integer?**  
a) `Math.round(7.25)`  
b) `Math.rnd(7.25)`  
c) `Math.random(7.25)`  
d) `round(7.25)`  
**Answer**: a) `Math.round(7.25)`

---

**11. Which event occurs when the user clicks on an HTML element?**  
a) `onclick`  
b) `onchange`  
c) `onmouseclick`  
d) `onhover`  
**Answer**: a) `onclick`

---

**12. How do you declare a JavaScript variable?**  
a) `var myVar;`  
b) `variable myVar;`  
c) `v myVar;`  
d) `let myVar;`  
**Answer**: a) `var myVar;`

---

**13. Which operator is used to assign a value to a variable?**  
a) `=`  
b) `==`  
c) `===`  
d) `=>`  
**Answer**: a) `=`

---

**14. What is the correct syntax to check if "a" is not equal to "b"?**  
a) `if (a != b)`  
b) `if (a <> b)`  
c) `if (a =! b)`  
d) `if (a === b)`  
**Answer**: a) `if (a != b)`

---

**15. What will the following code return: Boolean(10 > 9)?**  
a) `true`  
b) `false`  
c) `NaN`  
d) `null`  
**Answer**: a) `true`

---

**16. How can you detect the client's browser name?**  
a) `navigator.appName`  
b) `browser.name`  
c) `client.navName`  
d) `browser.appName`  
**Answer**: a) `navigator.appName`

---

**17. Which method finds the HTML element by ID?**  
a) `document.getElementById()`  
b) `document.getElementByName()`  
c) `document.findId()`  
d) `document.getId()`  
**Answer**: a) `document.getElementById()`

---

**18. How do you find the number with the highest value of x and y?**  
a) `Math.max(x, y)`  
b) `ceil(x, y)`  
c) `top(x, y)`  
d) `Math.ceil(x, y)`  
**Answer**: a) `Math.max(x, y)`

---

**19. How does a `while` loop start?**  
a) `while (condition)`  
b) `while condition`  
c) `while {condition}`  
d) `while (condition) {}`  
**Answer**: d) `while (condition) {}`

---

**20. How can you add a single-line comment in JavaScript?**  
a) `// comment`  
b) `# comment`  
c) `<!-- comment -->`  
d) `** comment`  
**Answer**: a) `// comment`

---

**21. What is the purpose of the `isNaN` function?**  
a) To check if a value is not a number  
b) To check if a number is negative  
c) To convert a string to a number  
d) To check if a number is an integer  
**Answer**: a) To check if a value is not a number

---

**22. Which of the following is a loop structure in JavaScript?**  
a) `for`  
b) `each`  
c) `loop`  
d) `repeat`  
**Answer**: a) `for`

---

**23. How do you create an object in JavaScript?**  
a) `var obj = {};`  
b) `var obj = Object();`  
c) `var obj = new Object;`  
d) `var obj = create Object();`  
**Answer**: a) `var obj = {};`

---

**24. Which method converts a JSON text to a JavaScript object?**  
a) `JSON.parse()`  
b) `JSON.stringify()`  
c) `JSON.convert()`  
d) `JSON.toObject()`  
**Answer**: a) `JSON.parse()`

---

**25. Which of the following is not a JavaScript data type?**  
a) `float`  
b) `string`  
c) `boolean`  
d) `undefined`  
**Answer**: a) `float`

---

**26. How do you declare a constant in JavaScript?**  
a) `const PI = 3.14;`  
b) `constant PI = 3.14;`  
c) `var PI = 3.14;`  
d) `let PI = 3.14;`  
**Answer**: a) `const PI = 3.14;`

---

**27. What is the output of `typeof null` in JavaScript?**  
a) `object`  
b) `null`  
c) `undefined`  
d) `string`  
**Answer**: a) `object`

---

**28. Which function is used to serialize an object into a JSON string in JavaScript?**  
a) `JSON.stringify()`  
b) `JSON.parse()`  
c) `JSON.serialize()`  
d) `JSON.encode()`  
**Answer**: a) `JSON.stringify()`

---

**29. How can you create an array in JavaScript?**  
a) `var arr = ["apple", "banana", "cherry"];`  
b) `var arr = array("apple", "banana", "cherry");`  
c) `var arr = array{"apple", "banana", "cherry"};`  
d) `var arr = list("apple", "banana", "cherry");`  
**Answer**: a) `var arr = ["apple", "banana", "cherry"];`

---

**30. What is the output of `2 + '2'` in JavaScript?**  
a) `'22'`  
b) `4`  


c) `NaN`  
d) `undefined`  
**Answer**: a) `'22'`

---

**31. How do you write an "if" statement in JavaScript?**  
a) `if (x > y)`  
b) `if x > y then`  
c) `if x > y`  
d) `if x > y {}`  
**Answer**: a) `if (x > y)`

---

**32. How do you write a "for" loop that iterates over the properties of an object?**  
a) `for (var prop in object)`  
b) `for (var prop of object)`  
c) `for (object prop)`  
d) `for each (prop in object)`  
**Answer**: a) `for (var prop in object)`

---

**33. How can you convert a number to a string in JavaScript?**  
a) `number.toString()`  
b) `number.convertToString()`  
c) `String(number)`  
d) Both a) and c)  
**Answer**: d) Both a) and c)

---

**34. What does `NaN` stand for in JavaScript?**  
a) Not a Number  
b) Null as Number  
c) Number as Null  
d) None available Number  
**Answer**: a) Not a Number

---

**35. What will the following code return: `Boolean(3 < 2)`?**  
a) `false`  
b) `true`  
c) `null`  
d) `NaN`  
**Answer**: a) `false`

---

**36. Which of the following is a way to define a string variable in JavaScript?**  
a) `let str = "Hello";`  
b) `let str = 'Hello';`  
c) `let str = `Hello`;`  
d) All of the above  
**Answer**: d) All of the above

---

**37. How do you get the length of a string in JavaScript?**  
a) `str.length`  
b) `length(str)`  
c) `str.size`  
d) `str.count`  
**Answer**: a) `str.length`

---

**38. Which of the following is a reserved word in JavaScript?**  
a) `default`  
b) `goto`  
c) `open`  
d) `switch`  
**Answer**: d) `switch`

---

**39. How can you add an element to the beginning of an array?**  
a) `array.unshift()`  
b) `array.push()`  
c) `array.addFirst()`  
d) `array.prepend()`  
**Answer**: a) `array.unshift()`

---

**40. What is the output of `1 == '1'`?**  
a) `true`  
b) `false`  
c) `null`  
d) `undefined`  
**Answer**: a) `true`

---

**41. Which of the following will log "undefined" in the console?**  
a) `console.log(typeof undefinedVar);`  
b) `console.log(typeof nullVar);`  
c) `console.log(typeof notDefinedVar);`  
d) `console.log(typeof 'undefined');`  
**Answer**: c) `console.log(typeof notDefinedVar);`

---

**42. What does `===` mean in JavaScript?**  
a) Strict equality  
b) Loose equality  
c) Assignment  
d) Greater than or equal  
**Answer**: a) Strict equality

---

**43. Which of the following is not a valid JavaScript loop?**  
a) `foreach`  
b) `while`  
c) `for`  
d) `do...while`  
**Answer**: a) `foreach`

---

**44. How do you create an array with 5 elements, all set to `null`?**  
a) `var arr = Array(5).fill(null);`  
b) `var arr = Array.fill(null, 5);`  
c) `var arr = [null, 5];`  
d) `var arr = [null * 5];`  
**Answer**: a) `var arr = Array(5).fill(null);`

---

**45. Which of the following is not a valid JavaScript operator?**  
a) `&&`  
b) `||`  
c) `??`  
d) `<>`  
**Answer**: d) `<>`

---

**46. What will `console.log("3" + 2);` output?**  
a) `32`  
b) `5`  
c) `NaN`  
d) `Error`  
**Answer**: a) `32`

---

**47. How do you remove the last element from an array?**  
a) `array.pop()`  
b) `array.shift()`  
c) `array.removeLast()`  
d) `array.deleteLast()`  
**Answer**: a) `array.pop()`

---

**48. How do you get a random number between 0 and 1 in JavaScript?**  
a) `Math.random()`  
b) `Math.rnd()`  
c) `Math.rand()`  
d) `random()`  
**Answer**: a) `Math.random()`

---

**49. What will be the output of `typeof null`?**  
a) `object`  
b) `null`  
c) `undefined`  
d) `string`  
**Answer**: a) `object`

---

**50. Which of the following is a valid way to comment out multiple lines in JavaScript?**  
a) `/* comment */`  
b) `// comment // comment`  
c) `<!-- comment -->`  
d) `** comment **`  
**Answer**: a) `/* comment */`

---

**51. How do you create a Date object in JavaScript?**  
a) `var d = new Date();`  
b) `var d = Date();`  
c) `var d = new Date;`  
d) `var d = date();`  
**Answer**: a) `var d = new Date();`

---

**52. How do you find the number with the lowest value of x and y?**  
a) `Math.min(x, y)`  
b) `Math.low(x, y)`  
c) `Math.floor(x, y)`  
d) `Math.small(x, y)`  
**Answer**: a) `Math.min(x, y)`

---

**53. How do you add an event listener to an element in JavaScript?**  
a) `element.addEventListener('click', myFunction);`  
b) `element.on('click', myFunction);`  
c) `element.listen('click', myFunction);`  
d) `element.bind('click', myFunction);`  
**Answer**: a) `element.addEventListener('click', myFunction);`

---

**54. Which method returns the character at a specified index in a string?**  
a) `charAt()`  
b) `getChar()`  
c) `charAtIndex()`  
d) `getCharAt()`  
**Answer**: a) `charAt()`

---

**55. How do you remove a property from an object?**  
a) `delete object.property;`  
b) `remove object.property;`  
c) `unset object.property;`  
d) `deleteProperty object.property;`  
**Answer**: a) `delete object.property;`

---

**56. How do you convert a string to an integer in JavaScript?**  
a) `parseInt()`  
b) `parseFloat()`  
c) `toInt()`  
d) `Number()`  
**Answer**: a) `parseInt()`

---

**57. How do you declare a class in JavaScript?**  
a) `class MyClass {}`  
b) `class: MyClass {}`  
c) `new MyClass {}`  
d) `define class MyClass {}`  
**Answer**: a) `class MyClass {}`

---

**58. Which of the following is not a falsy value in JavaScript?**  
a) `1`  
b) `0`  
c) `null`  
d) `undefined`  
**Answer**: a) `1`

---

**59. How do you check if an array includes a specific element?**  
a) `array.includes(element)`  
b) `array.contains(element)`  
c) `array.has(element)`  
d) `array.check(element)`  
**Answer**: a) `array.includes(element)`

---

**60. Which of the following is a primitive data type in JavaScript?**  
a) `string`  
b) `array`  
c) `object`  
d) `function`  
**Answer**: a) `string`

---

**61. What is the value of `2 ** 3` in JavaScript?**  
a) `8`  
b) `6`  
c) `16`  
d) `12`  
**Answer**: a) `8`

---

**62. Which method is used to join all elements of an array into a string?**  
a) `array.join()`  
b) `array.concat()`  
c) `array.joinString()`  
d) `array.toString()`  
**Answer**: a) `array.join()`

---

**63. How do you declare a function expression in Java

Script?**  
a) `var myFunc = function() {};`  
b) `function myFunc() {};`  
c) `let myFunc = function() {};`  
d) Both a) and c)  
**Answer**: d) Both a) and c)

---

**64. What is the output of `"5" + 2` in JavaScript?**  
a) `"52"`  
b) `7`  
c) `NaN`  
d) `Error`  
**Answer**: a) `"52"`

---

**65. Which method returns the index of the first occurrence of a specified value in a string?**  
a) `indexOf()`  
b) `findIndex()`  
c) `search()`  
d) `locate()`  
**Answer**: a) `indexOf()`

---

**66. How do you declare a default parameter in a function?**  
a) `function myFunc(a = 5) {}`  
b) `function myFunc(a: 5) {}`  
c) `function myFunc(a ? 5) {}`  
d) `function myFunc(a == 5) {}`  
**Answer**: a) `function myFunc(a = 5) {}`

---

**67. Which of the following is a valid way to define an arrow function?**  
a) `let func = () => {};`  
b) `let func => {};`  
c) `let func = -> {};`  
d) `let func = function => {};`  
**Answer**: a) `let func = () => {};`

---

**68. How do you access the last element of an array?**  
a) `array[array.length - 1]`  
b) `array.last()`  
c) `array[-1]`  
d) `array.getLast()`  
**Answer**: a) `array[array.length - 1]`

---

**69. Which of the following is used to handle exceptions in JavaScript?**  
a) `try...catch`  
b) `handle...error`  
c) `try...error`  
d) `catch...error`  
**Answer**: a) `try...catch`

---

**70. How do you iterate over each element of an array?**  
a) `array.forEach()`  
b) `array.each()`  
c) `array.every()`  
d) `array.loop()`  
**Answer**: a) `array.forEach()`

---

**71. Which of the following is a JavaScript framework?**  
a) `React`  
b) `Laravel`  
c) `Django`  
d) `Flask`  
**Answer**: a) `React`

---

**72. How do you stop a loop in JavaScript?**  
a) `break`  
b) `exit`  
c) `return`  
d) `stop`  
**Answer**: a) `break`

---

**73. How do you return a string in uppercase in JavaScript?**  
a) `string.toUpperCase()`  
b) `string.upperCase()`  
c) `string.toUpper()`  
d) `string.upper()`  
**Answer**: a) `string.toUpperCase()`

---

**74. Which of the following is not an array method?**  
a) `map()`  
b) `filter()`  
c) `reduce()`  
d) `split()`  
**Answer**: d) `split()`

---

**75. How do you write an asynchronous function in JavaScript?**  
a) `async function myFunc() {}`  
b) `async: function myFunc() {}`  
c) `function async myFunc() {}`  
d) `function myFunc async() {}`  
**Answer**: a) `async function myFunc() {}`

---

**76. How do you check if a variable is an array?**  
a) `Array.isArray(variable)`  
b) `variable.isArray()`  
c) `typeof variable === 'array'`  
d) `Array.check(variable)`  
**Answer**: a) `Array.isArray(variable)`

---

**77. How do you merge two arrays in JavaScript?**  
a) `array1.concat(array2)`  
b) `array1.merge(array2)`  
c) `array1.join(array2)`  
d) `array1.add(array2)`  
**Answer**: a) `array1.concat(array2)`

---

**78. How do you create a promise in JavaScript?**  
a) `let promise = new Promise((resolve, reject) => {});`  
b) `let promise = new Promise(resolve, reject => {});`  
c) `let promise = Promise((resolve, reject) => {});`  
d) `let promise = Promise.create((resolve, reject) => {});`  
**Answer**: a) `let promise = new Promise((resolve, reject) => {});`

---

**79. Which keyword is used to declare a block-scoped variable in JavaScript?**  
a) `let`  
b) `var`  
c) `const`  
d) `block`  
**Answer**: a) `let`

---

**80. How do you sort an array in descending order?**  
a) `array.sort((a, b) => b - a);`  
b) `array.sort((a, b) => a - b);`  
c) `array.sort((a, b) => b > a);`  
d) `array.sort((a, b) => a > b);`  
**Answer**: a) `array.sort((a, b) => b - a);`

---

**81. How do you convert an array to a string in JavaScript?**  
a) `array.toString()`  
b) `array.join()`  
c) `array.concat()`  
d) Both a) and b)  
**Answer**: d) Both a) and b)

---

**82. Which method returns a new array with the results of calling a provided function on every element in the array?**  
a) `map()`  
b) `forEach()`  
c) `filter()`  
d) `reduce()`  
**Answer**: a) `map()`

---

**83. How do you get the current date and time in JavaScript?**  
a) `new Date()`  
b) `Date.now()`  
c) `currentTime()`  
d) `getDate()`  
**Answer**: a) `new Date()`

---

**84. Which of the following is used to iterate over an object's properties?**  
a) `for...in`  
b) `for...of`  
c) `each...in`  
d) `loop...in`  
**Answer**: a) `for...in`

---

**85. How do you remove the first element from an array?**  
a) `array.shift()`  
b) `array.pop()`  
c) `array.removeFirst()`  
d) `array.deleteFirst()`  
**Answer**: a) `array.shift()`

---

**86. How do you clone an object in JavaScript?**  
a) `Object.assign({}, obj)`  
b) `Object.clone(obj)`  
c) `obj.clone()`  
d) `Object.copy(obj)`  
**Answer**: a) `Object.assign({}, obj)`

---

**87. How do you check if a property exists in an object?**  
a) `'property' in object`  
b) `object.has('property')`  
c) `object.contains('property')`  
d) `object.exists('property')`  
**Answer**: a) `'property' in object`

---

**88. Which method is used to add new elements to the end of an array?**  
a) `array.push()`  
b) `array.append()`  
c) `array.add()`  
d) `array.unshift()`  
**Answer**: a) `array.push()`

---

**89. How do you convert a string to lowercase in JavaScript?**  
a) `string.toLowerCase()`  
b) `string.lowerCase()`  
c) `string.toLower()`  
d) `string.lower()`  
**Answer**: a) `string.toLowerCase()`

---

**90. How do you get the type of a variable in JavaScript?**  
a) `typeof variable`  
b) `varType(variable)`  
c) `getType(variable)`  
d) `typeOf(variable)`  
**Answer**: a) `typeof variable`

---

**91. How do you remove duplicates from an array?**  
a) `new Set(array)`  
b) `array.removeDuplicates()`  
c) `array.unique()`  
d) `array.filterDuplicates()`  
**Answer**: a) `new Set(array)`

---

**92. What does `Array.prototype.map()` return?**  
a) A new array  
b) The same array  
c) A string  
d) A number  
**Answer**: a) A new array

---

**93. How do you check if a value is `NaN`?**  
a) `isNaN(value)`  
b) `value.isNaN()`  
c) `typeof value === 'NaN'`  
d) `Number.isNaN(value)`  
**Answer**: a) `isNaN(value)`

---

**94. Which of the following is not a JavaScript object method?**  
a) `hasOwnProperty()`  
b) `isPrototypeOf()`  
c)

 `toString()`  
d) `hasOwnMethod()`  
**Answer**: d) `hasOwnMethod()`

---

**95. How do you get the keys of an object?**  
a) `Object.keys()`  
b) `Object.getKeys()`  
c) `Object.properties()`  
d) `Object.getProperties()`  
**Answer**: a) `Object.keys()`

---

**96. How do you create a shallow copy of an array?**  
a) `array.slice()`  
b) `array.copy()`  
c) `array.clone()`  
d) `array.shallowCopy()`  
**Answer**: a) `array.slice()`

---

**97. What is the value of `null == undefined`?**  
a) `true`  
b) `false`  
c) `NaN`  
d) `undefined`  
**Answer**: a) `true`

---

**98. Which method returns the largest of zero or more numbers?**  
a) `Math.max()`  
b) `Math.largest()`  
c) `Math.ceil()`  
d) `Math.greatest()`  
**Answer**: a) `Math.max()`

---

**99. How do you make a variable read-only?**  
a) `const`  
b) `let`  
c) `var`  
d) `readonly`  
**Answer**: a) `const`

---

**100. Which method can be used to convert an object to a JSON string?**  
a) `JSON.stringify()`  
b) `JSON.parse()`  
c) `object.toJson()`  
d) `object.toString()`  
**Answer**: a) `JSON.stringify()`

---
