console.log("Hello coder am JS and am Working Good");

const Obj1 = {
    age: 5,
    name: "Person 1",
};
const Obj2 = {
    age: 5,
    name: "Person 1",
};

const newString1 = "GUVI";
const newString2 = "GUVI";
console.log(typeof(newString1));

console.log(newString1 === newString2);
console.log(JSON.stringify(Obj1));
console.log(JSON.stringify(Obj2));
console.log("with JSON stringify ===>", JSON.stringify(Obj1) === JSON.stringify(Obj2));
console.log("Without JSON stringify ===>", Obj1 === Obj2);

//functions types and definitions
//verb (Functions name must be a verb, This should be always related the name of code, output)
function accstate() {
    console.log("Account Statement Jan");
    console.log("Account Statement Jan");    
    console.log("Account Statement Feb");
    console.log("Account Statement Mar");
    console.log("Account Statement Apr");
    console.log("Account Statement May");
    console.log("Account Statement Jun");
    console.log("Account Statement Jul");
    console.log("Account Statement Aug");
    console.log("Account Statement Sep");
    console.log("Account Statement Oct");
    console.log("Account Statement Nov");
    console.log("Account Statement Dec");
}
accstate(); //this is function called by the function name

console.log(accstate); //it's display entier console.log jan to dec

console.log("____________________________________________");
console.log(a); // here first run memory allocation is undefined.
var a = 18; 
console.log(a); // now first run is take the a value and display in global window.

b(); //here in function first run take the value of b and display in global window, it's not waiting for console.log(b).
function b() {
    var b = 25;
    console.log(b);
};

c(); //here we called c, but value not assigned before console.log, so out put is undefined.
function c() {
    console.log(c);
    var c = 25;
};

//class task while display your name with in two mins
function sayMyName() {
    let n = "GOVIND"
    console.log(n);
};
sayMyName();

function giveYourName(name) {
    console.log("Hi"+ name +"nice to see you here...... 😊");
    console.log("Hi", name, "nice to see you here...... 😊");
    console.log(`Hi ${name}, nice to see you here...... 😊`);
};
giveYourName("Govind"); //output is Hi Govind, nice to see you here......

function giveYourName1(name1, name2) {
    console.log(`Hi ${name1} and ${name2}, nice to see both of you here`);
    console.log(`welcome to the code hub`);
    console.log(`I think ${name1} is from non IT background`);
    console.log(`am i right?`);
    console.log(`${name2} answerd yes, ${name1} from non IT, ${name1} is working in Apparel industry past 16 years.`);
    console.log(`${name1} said thanks to ${name2}`);
};
giveYourName1("Govind", "Ram");

console.log("__________________________what is first class function______________");

const greetings = function() {
    console.log("Hi hope you are doing well there!");
};

greetings();

function returnMyName(nam){
    return nam;
}
const myname = returnMyName("GOVIND");
console.log(myname);



const age = function () {
    return 37;
}

console.log(age());


function myAge(age) {
    return age;
}
console.log(myAge(30));

console.log("______________Another function examples__________");

function executeFunc(func, age) { (myAge, 37)

    func(age)
    myAge(37)
// function executeFunc(func, name, age, course, ins) {
    
    // func(age)
    // name1(GOVINDRAJ)
    // myAge(37)
    // course(FSD)
    // ins(GUVI)

console.log("myAge:", myAge(37));
console.log(func(age));
}

executeFunc(myAge, 37);

console.log("____________I want a fuction which return a message hey name welcome to guvi____________");

function greetme (name3) {
    return `Hey ${name3}, welcome to GUVI GEEKS NETWORK PRIVATE LIMITED`;
}

function funcExcuteGreet(fn, args) { 

//fn = greetme
//args = Goivnd
//fn(args) or greetme(args)
console.log(fn(args));
}
funcExcuteGreet(greetme, "Govind"); //output Hey Govind, welcome to 
funcExcuteGreet(greetme); // output result Hey undefined, welcome to

console.log("____________Pure function___________");

function add(num1, num2) {
    console.log("Added value is:", num1 + num2);
};
add(11, 99);
add(11, 99); // same value can return is called pure function

console.log("_____________Higher order function__________");

function mainFunc(fn) {
    return fn;
}

function secondLayerFunction() {
    return 24;
}
console.log(mainFunc(secondLayerFunction));

console.log("______________________function can return a value example_________________");

function multipleBy(factor) {
    return 5*factor
}
// const double = multipleBy(2);
// console.log(double); //output is 10

function multipleBy(factor){
    return function (number){
        return number * factor;
    };
}
const double = multipleBy(2);
console.log(multipleBy(50));
////////////////////////////////////

function multipleBy1(factor) {
    return 10 * factor
}
const double1 = multipleBy1(50);
console.log(double1); //output is 500

//////////////////Class day 4 complete/////////////////

//// Day 4 class additonal section class/////////////////////

console.log("______________Day 4 additional section class");

const demoObject = {
    name: "Person 4",
    age: 12,
};

console.log(Object.keys(demoObject)); //output (2) ['name', 'age']
console.log(Object.values(demoObject)); //this represents output as (2) ['Person4' , 12 ]
console.log(Object.entries(demoObject)); // output is [Array(2), Array(2)]

function returnableFunction() {
    return 12;
}
var z = 12;
returnableFunction();
console.log(z); //output is 12
console.log(returnableFunction()); //output is 12 
const valuesOfFunc = returnableFunction();
console.log(valuesOfFunc);//output is 12, so above three output is same

//// find a object key length

const demoObject1 = {
    studentName: "Person 1",
    age: 20,
};

const demoObject2 = {
    age: 21,
    studentName: "Person 1",
    class: "Full Stack Developer",
};

var objectKey1 = Object.keys(demoObject1).sort(); // with .sort helps to ascending order
var objectKey2 = Object.keys(demoObject2).sort();

console.log(objectKey1);
console.log(objectKey2);

///// check equal or not, that means true or falls
console.log(objectKey1[0], objectKey2[0]);
console.log("Object Key first object comparison is:",objectKey1[0] === objectKey2[0]);
console.log(objectKey1[1], objectKey2[1]);
console.log("Object Key second object comparison is:",objectKey1[1] === objectKey2[1]);

console.log(objectKey1[2], objectKey2[2]);
console.log("Object Key third object comparison is:",objectKey1[2] === objectKey2[2]);

console.log("Object 2 variables at 0 is:",objectKey2[0]);
console.log("Object 2 variables at 1 is:",objectKey2[1]);
console.log("Object 2 variables at 2 is:",objectKey2[2]);

//A function is supposed to return another function it is called "Higher Order function"

function anotherFunction(number){
    number = 30;
    return number;
};

const another = anotherFunction;
console.log(another);



//////////// another example///////////////////

function higherOrder(factor) { //this function takes another function
    return function (number) {
    console.log(number * factor);
    }
};

const factorNumber = higherOrder(30);
console.log(factorNumber);
factorNumber(50);


///// Arrow function////////

const arrowResult = () => console.log("Hi i'm Arrow function, you can treat me ordinary function");
arrowResult();
//output : Hi i'm Arrow function, you can treat me ordinary function


//in this arrow function we can store a variable value aswell.

var arrowResult1 = (num5, num6) => num5 + num6;
var value = arrowResult1 (36, 56);
console.log(value); //here we don't need to call the function, but it's work like function

//if supposed we code it on multiline, we should use {} and return

var arrowResult2 = (num7, num8) => {
        console.log(num7 + num8);
};
arrowResult2(100, 200);

///////Anonymous function////////////////

console.log("__________Anonmous function____________");

const sayHello = function () {
    console.log("Hi wecome to GVUI Zen Class");
 }; //now call sayHello

 sayHello();

 ////////////////////////////////////////////

 const sayHello1 = function (name9) {
    console.log(`Hi ${name9}, wecome to GVUI Zen Class`);
 }; //now call sayHello

 sayHello1("Govind");

/////////////////////////////////////////////////

console.log("_______________IIFE - Immediately Invoked Function Expression______________");

(function () {
    console.log("Hi, I am IIFE");
})();

(() => console.log("I'm IIFE - Immediately Invoked Functiosn Expression"))();

/////day 4 task///// print Odd numbers in an array

const arrAry = [1,2,3,4,5,6,7,8,9,0];
function printOdd (num) {
    if (num %2 !=0) {
        console.log(num);
    } else {
        console.log("Not a ODD NUMBER");
    }
};
printOdd(3);
printOdd(10);

/////the same function in anonoyms function

const printOddn = function (num) {
    if (num %2 !=0) {
        console.log(num);
    } else {
        console.log("Not a ODD NUMBER");
    }
};
printOddn(7);
printOddn(8);

///////////////the same in Arrow function/////////////////

const printArr = (num) => {
    if (num %2 !=0) {
        console.log(num);
    } else {
        console.log("Not a ODD NUMBER");
    }
};
printArr(1);
printArr(4);

////////////////////////////////////////////

console.log("________________print odd numbers___________");

const arrAAry = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
function printOddNumbers (arr) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] %2 !=0) {
            console.log(arr[i]);
        }
    }
};
printOddNumbers(arrAAry);

console.log("_______________print Even Numbers___________");

const arrAAry1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
function printEvenNumbers (arr) {
    for (let i=0; i < arr.length; i++) {
        if (arr[i] %2 !=1) {
            console.log(arr[i]);
        }
    }
};
printEvenNumbers(arrAAry1);

///////Convert all the strings to title caps in a string array

console.log("____________Title caps___________");

const myName = "govind";

function printName (name) {
    for (i=0; i<printName.length; i++);
    console.log(name);
}

printName(myName); ///output is govind

const caps = "govind";
console.log(typeof(caps));
console.log(caps.split("")[0].toUpperCase(""));

let nameSplit = caps.split("").join(" ");
console.log(nameSplit);
let sliceFirst = nameSplit.slice(1);
console.log(sliceFirst);
let firstCapital = nameSplit[0].toUpperCase("");
console.log(firstCapital);
console.log(firstCapital , sliceFirst);

let final = firstCapital  + sliceFirst;
final.split("").join("");
let result  
result =  final.replace(/[, !]/g, '');
console.log(result);




// console.log(caps.join(""));

//Title caps pera with captial and small letter mixing

function toTitleCase(inputString) {
    return inputString
      .toLowerCase()
      .split(' ')
      // .replace(/^[, ]/g, '')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  const userInputString = "This is a saMple title case example in gUvI zEN class tAsK";
  const titleCaseString = toTitleCase(userInputString);
  
  console.log("Before Title case ===>", userInputString);
  console.log("After Title case ===>",titleCaseString);

  //output => This Is A Sample Title Case Example In Guvi Zen Class Task

  // Sum of all numbers in an array

const inputNumbers = [7, 1, 2, 3, 4, 5, 10, 35, 69];

let sum = 0; // variable valu zero "0" to stored in the sum

for (let i = 0; i < inputNumbers.length; i++) {
  sum += inputNumbers[i]; // here we are adding every each element to the sum, means +
}

console.log("Sum of all number values in Array is ===>",sum); // Output total sum value is: 136


////// Return all the prime numbers in an array

function findPrime(num) {
    if (num <= 1) { //if number is less than or equal to 1
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) { //if number is divisible by i index
            return false;
        }
    }
    return true;
}

function PrimeNumbers(arr) {
    return arr.filter(number => findPrime(number));
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 45, 46, 47, 68, 69, 70, 71, 72, 73, 74, 75, 78, 79, 80, 81, 82, 85, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, ,101, 102];
const primeNumbersResult =PrimeNumbers(numbers);

console.log("The final prime numbers are from 1 to 102 is ===>", primeNumbersResult);  // Output: [2, 3,  5, 7, 11, 37, 41,  47, 71, 73, 79, 89, 97, 101]

//Return all the palindromes in an array
//palindrome in function check

function funcPalindrome(val) {
    // Remove spaces and convert the string to lowercase for case-insensitive comparison
    val = val.replace(/\s/g, '').toLowerCase();
    
    // Reverse the string and compare it to the original
    return val === val.split('').reverse().join('');
}

function getPalindromesSorted(arr) {
    const palindromes = arr.filter(input => funcPalindrome(input));
    return palindromes.sort((a, b) => a.localeCompare(b));
}

const input = ["anchor", "mom", "dad", "noon", "top", "bab", "moon", "reviver"];
const palindromeResult = getPalindromesSorted(input);

console.log("Palindrome results after sorted ==>", palindromeResult);  // Output: ['bab', 'dad', 'mom', 'noon', 'reviver']

//removed the immidiate duplicate of N numbers

const inputArray = [1, 3, 3, 2, 2, 3, 1, 4, 4, 5, 6, 7];

const unique = (function(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
})(inputArray);

console.log("Removed immidiate duplicates ===>", unique);  // Output: [1, 3, 2, 4, 5, 6, 7]

//Rotate an array by k times

(function() {
 
  var inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; //this is our input
  var k = 2;

  // Anonymous function inside IIFE to rotate the array
  var rotatedArray = (function(inputArr, k) {
    // Calculate the rotation index
    k = k % inputArr.length; //k times means 2 % 5 = 

    // Split the array into two parts and rejoin in reverse order
    var firstRotate = inputArr.slice(0, k); //this removed first two index, because k value is 2
    var secondRotate = inputArr.slice(k); //this slice removed rest of the index from 3rd
    return secondRotate.concat(firstRotate); //now first rotate contact second rotate like join
  })(inputArr, k);

  console.log("Our Original Array is ===> ", inputArr);
  console.log("After function Rotated Array result is ===> ", rotatedArray, "it's rotating until looplength and k times means k value 2"); //output: 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2
})();
