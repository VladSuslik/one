const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const findLargestNumber = numbers => Math.max(...numbers);
banana

const reverseWords = str => str.split(" ").reverse().join(" ");

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
true / 47,27,76,0,47,10,86,68,23,29,38,66,60,78,19,59,82,8,98,67,19,73,98,55,78,72,79,80,15,70,22,26,95,63,88
const isEven = num => num % 2 === 0;
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

let array = getRandomArray(); array.forEach(item => console.log(item));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
