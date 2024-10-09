// how to find second highest number in an array

let array = [1, 2, 3, 100, 300,22, 120, 700, 4000, 123];

array.sort((a, b)=>a-b);
console.log(array)
console.log("second highest number: "+ array[array.length-2])

// check the repeatation of character

let characterFrequency = (string) =>{
     let frequency ={};

     for (let char of string) {  //ye loop ek ek chR KO RETURN KREga
       
        if(frequency[char]){
            frequency[char] += 1
        }
        if(!frequency[char]){
            frequency[char] = 1
        }
        
     }
     return frequency
}


const results = characterFrequency("hello world");
console.log(results)


// Example 2: Nested Loop
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
// output:
// i=1, j=1    i=2, j=1    
// i=1, j=2       i=2, j=2
// i=1, j=3       i=2, j=3

// Example 3: Conditional Statements Inside Loops


for (let i = 0; i < 5; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}

// output :
// 0 is even 
// 1 is odd
// 2 is even
// 3 is odd
// 4 is even

// Example 4: Sum of Array Elements

const arr = [1, 2, 3, 4];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}

// Sum: "0 + 1 = 1"
// Sum: "1 + 2 = 3"  
// Sum: "3 + 3 = 6"
// Sum: "6 + 4 = 10"    

console.log('Sum:', sum);   //  ANSWER IS Sum: 10

// Problem 1: Counting Down

for (let i = 5; i > 0; i--) {
    console.log(i);
}

// output:
// 5
// 4
// 3
// 2
// 1 

// Problem 2: Multiplying Elements

const numbers = [2, 3, 4];
let result = 1;
//                         3
for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
}
// 1 * 2 = 2
// 2 * 3 = 6
// 6 * 4 = 24
console.log('Product:', result); // 24

// Problem 3: Finding Maximum Value javascript

const array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5];
let max = array1[0]; //max = 3


//                     9               8 bar chalega loop
for (let i = 1; i < array1.length; i++) {
    if (array1[i] > max) {
        max = array1[i];  //max = 4  max = 5  max=9
    }
}

console.log('Max value:', max);
// max: 9



// Problem 1: Sum of Positive

function positiveSum(arr) {
    let positiveNum = arr.filter((num)=>{return num > 0 })
    console.log(positiveNum)
     
    let sum = 0;
    
    for (let i = 0; i < positiveNum.length; i++) {
        sum += positiveNum[i]
        
    }
    return sum
}
console.log(positiveSum([1, -4, 7, 12])+ "positive"); // Output: 20
console.log(positiveSum([-1, -2, -3, -4])); // Output: 0

// Problem 2: Square Every Digit

function squareDigits(num) {
   let numbers = String(num).split('');
   console.log(numbers)
   let arr=numbers.map((dgt)=>{return dgt * dgt})
    
  let result =  Number(arr.join(''))
  return result
   
}
console.log(squareDigits(9119)); // Output: 811181
console.log(squareDigits(1234)); // Output: 14916

// Problem 3: String Repeat

function repeatStr(n, s) {
    
    let mergeString = [];
    for (let i = 0; i < n; i++) {
        mergeString.push(s);
        
        // console.log(mergeString)
        
    }
    return(mergeString.join(''));
   
}
console.log(repeatStr(3, "abc")); // Output: "abcabcabc"
console.log(repeatStr(5, "hello world")); // Output: "hellohellohellohellohello"


//Problem 4: Disemvowel Trolls

function disemvowel(str) {
    let vowels = ["a","e","i","o","u"];
    
    let result='';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
       
        if(!vowels.includes(char)){
            result+=char
        }
       
        
    }
    return result
  
    
}

console.log(disemvowel("This website is for losers LOL!")); // Output: "Ths wbst s fr lsrs LL!"
console.log(disemvowel("I love JavaScript!")); // Output: " lv JvScrpt!"


// Problem 6: Find the Odd Int
function findOdd(A) {
    
}
console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 5, 5, 5])); // Output: 5
console.log(findOdd([7])); // Output: 7

// find the second highest number in an array;

let array12 = [1, 23, 89, 78];

// let secndHighest = (array) => {
//     let getArray = array.sort((a, b)=> a-b)
     
//     let result  = getArray[getArray.length-2];
//     return result
    
// }

let secndHighest = (array) => {  //98 aya
    let highestNum = array[0];  //23
    let secndHighest = array[0]; //123 

    for (let i = 0; i < array.length; i++) {
        if(array[i]>highestNum){    
            secndHighest = highestNum
            highestNum = array[i]     
        }else if(array[i]>secndHighest && array[i]!==highestNum){
            secndHighest = array[i]
        }
        
    }
    return secndHighest
    
}
console.log(secndHighest(array12));

// reverse the array without using reverse and dont declare any other variable variable

let array111 = ["sami", "osama", "wasay", "sohaib", "kamil"];

// function reverseArray (array) {
//     let startIndex = 0;
//     let endIndex = array.length-1;

//     while(startIndex < endIndex){
//         [array[startIndex], array[endIndex]]=[array[endIndex], array[startIndex]];
//         startIndex++
//         endIndex--
//     }
//     return array
// }

// console.log(reverseArray(array111))

// slice, splice, dekhna hai


// array reverse

let maiArray = ["sami", "simrah", "rafay"]

let rvrseeArray = (array) => {
    let start = 0; 
    let lastIndex = array.length-1;
    while(start < lastIndex){
        [array[start], array[lastIndex]]=[array[lastIndex], array[start]]
        start++
        lastIndex--
    }
    return array
}
console.log(rvrseeArray(maiArray), "ss")

// second highest number in array

let sndArray = [1, 2, 3, 4, 7, 8, 13, 9, 12, 14];

let findHighest = (array) =>{
    let highestNum = array[0];
    let secondHighestNum = array[0];
    
    for(i=0; i<array.length; i++){
      if(array[i]>highestNum){
        secondHighestNum=highestNum
        highestNum=array[i]
      }if(array[i]>secondHighestNum  && array[i]!==highestNum ){
        secondHighestNum = array[i]
    
      }
      
    }
    
return secondHighestNum
}
console.log(findHighest(sndArray))

let string = "Zenkoders";

function freqnc(string){
    let frequency = {};

    for(let char of string){
        if(frequency[char]){
            frequency[char]+=1
        }
        if(!frequency[char]){
            frequency[char] = 1
        }
    }
    return frequency
}
console.log(freqnc(string));