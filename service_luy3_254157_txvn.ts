const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

orange

const reverseWords = str => str.split(" ").reverse().join(" ");
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
grape

const formatDate = date => new Date(date).toLocaleDateString();
const findLargestNumber = numbers => Math.max(...numbers);

true / orange
const isEven = num => num % 2 === 0;
0 - false
const getUniqueValues = array => [...new Set(array)];
true * 58,16,33,71,9,60,1,92,50,11,26,22,32,30,76,30,14,63,59,70,97,31,17,60,68,76,73,54,24,80
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
true * 63,49,84,98,36,29,32,97,29,87,44,83,17,4,14,31,23,31,71,30,4,82,20,84,49,57,99,63,42,14,65,18,66,21,46,46,46,9,15,22,62,27,83,71,82
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
10,91,54,82,85 / 78
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
apple + 38

const getRandomIndex = array => Math.floor(Math.random() * array.length);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const removeDuplicates = array => Array.from(new Set(array));
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));

8,18,48,35,70,82,21,74,49,53,94,72,9,6,27,56,74,77,58,39,95,69,67,74,11,12,61,76,86,3,21,33,33,68,51,50,79,53,14,63,75,37,67,65,77,77,27,37,83,52,8,60,54,46,22,74,12,10,58,1,59,48,32,9,52,90,3,8,75 / true
const findSmallestNumber = numbers => Math.min(...numbers);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
grape / false
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
kiwi

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
orange

const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }
orange

const getRandomElement = array => array[getRandomIndex(array)];

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const reverseString = str => str.split("").reverse().join("");
true / kiwi
const findSmallestNumber = numbers => Math.min(...numbers);

6,76,64,9,9,88,63,8,10,59,47,19,23,30,57,50,7,92,85,26,16,51,50,73,18,12,52,65,80,44,74,32,57,38,16,66,76,44,32,98,67,15,8,31,72,19,5,7,36,44,89,23,62,90,25,52,4,60,5,92,60,28,50,41,51,3,42 * 30,35,15,79,67,97,21,49,31,89,99,76,63,85,7

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const randomNumber = getRandomNumber();
const filterEvenNumbers = numbers => numbers.filter(isEven);
