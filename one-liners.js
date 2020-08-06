/**
 * oneliners,
 * the way you should do stuff;
 * done easy.
 */


/**
 * Type stuff
 */

// Is input a string.
const isString = (object) => Object.prototype.toString.call(object) === '[object String]';

// Is input array.
const isArray = (object) => Array.isArray(object);

// Is input object.
const isObject = (object) => Object.prototype.toString.call(object) === '[object Object]';

// Is input a pure number (NaN not accepted).
const isNumber = (object) => Object.prototype.toString.call(object) === '[object Number]' && !Number.isNaN(object);

// Is input function.
const isFunction = (object) => Object.prototype.toString.call(object) === '[object Function]' && typeof object === 'function';

// An enhanced version of typeof.
const typeOf = (object) => Number.isNaN(object) ? 'nan' : Object.prototype.toString.call(item).slice(8, -1).toLowerCase();

// Is input truthy.
const isTruthy = (input) => !!input;

// Is input falsy.
const isFalsy = (input) => !input;


/**
 * String stuff
 */

// A version of the String.prototype.replace() function which lets you replace all occurences of input in a string.
const replaceAll = (string, from, to) => string.split(from).join(to);

// The ugly duckling of oneliners, but it is the fastest way to reverse a string (faster than String.split('').reverse().join('')).
const reverseString = (string) => { let reversedString = ''; for (let i = string.length - 1; i >= 0; i--) { reversedString += string[i] } return string; };


/**
 * Object stuff
 */

// Merges objects together from left to right (value from latter object will be assigned key is already declared). Note that arrays are objects
const mergeObjects = (...arguments) => Object.assign({}, ...arguments);

// Strict version of mergeObjects. Will only merge if all objects are pure objects (not arrays, string etc)
const strictMergeObjects = (...arguments) => (arguments.filter(arg => Object.prototype.toString.call(arg) !== '[object Object]')).length ? Error('Please only provide objects.') : Object.assign({}, ...arguments);

/*
EXAMPLE:

const obj1 = {
    foo: 'not bar',
    number: 1,
    names: ['James', 'Olivia']
}


const obj2 = {
    foo: 'bar',
    names: 'Only me'
}

const arr1 = [1, 2, 3, 4]

console.log(mergeObjects(obj1, obj2)) 
// Output: { foo: 'bar', number: 1, names: 'Only me' }

console.log(mergeObjects(obj1, arr1)) 
// Output: { '0': 1, '1': 2, '2': 3, '3': 4, bar: 'foo', number: 1 }

console.log(mergeObjects(obj1, 'foobar', arr1)) 
// Output: { '0': 1, '1': 2, '2': 3, '3': 4, '4': 'a', '5': 'r', foo: 'not bar', number: 1, names: ['James', 'Olivia'] }

console.log(strictMergeObjects(obj1, obj2))
// Output: { foo: 'bar', number: 1, names: 'Only me' }

console.log(strictMergeObjects(obj1, arr1)) 
// Output: Error: Please only provide objects
*/


/**
 * Array stuff
 */

// Removes all duplicates in array - will also give error if parameter is not an array.
const removeDuplicates = (array) => Array.isArray(array) ? [...new Set(array)] : Error('Please provide an array');

// Returns the highest number in array.
const highestNumberInArray = (array) => Math.max(...array);


/**
 * Math stuff
 */

// Is input number even. Takes both numbers and strings.
const isEven = (number) => parseFloat(number) - parseFloat(number) === 0 && parseFloat(number) % 2 === 0;

// Is input number odd. Takes both numbers and strings.
const isOdd = (number) => parseFloat(number) - parseFloat(number) === 0 && parseFloat(number) % 2 === 1;

// Is input number positive. Takes both numbers and strings.
const isPositive = (number) => parseFloat(number) - parseFloat(number) === 0 && parseFloat(number) >= 0;

// Is input number positive. Takes both numbers and strings.
const isNegative = (number) => parseFloat(number) - parseFloat(number) === 0 && parseFloat(number) < 0;

// Is input number finite. Takes both numbers and strings.
const isFinite = (number) => parseFloat(number) - parseFloat(number) === 0 && Number.isFinite(parseFloat(number));

// Is input number finite. Takes both numbers and strings.
const isInfinite = (number) => !Number.isFinite(parseFloat(number));

// Is number divisible by the wanted divisor
const isDivisibleBy = (number, divisor) => parseFloat(number) - parseFloat(number) === 0 && parseFloat(number) % divisor === 0;


/**
 * DOM stuff
 */

// Does element have any children.
const hasAnyChildren = (element) => element.children.length > 0;

// Does element have any siblings.
const hasAnySiblings = (element) => element.parent.children.length > 1;

// Does element have an id.
const hasId = (element) => element.id !== '';

// Check if element has wanted class.
const hasClass = (element, className) => element.classList.contains(className);

// Does element have any classes.
const hasAnyClasses = (element) => element.classList.length > 0;

// Replaces an element with a new element.
const replaceElement = (elementToReplace, newElement) => elementToReplace.parentElement.replaceChild(newElement, elementToReplace)

/**
 * Other
 */

// Gives you the next seven days from now.
const nextSevenDays = () => [...Array(7).keys()].map(days => new Date(Date.now() + 86400000 * days));

// Gives you the previous seven days from now.
const previousSevenDays = () => [...Array(7).keys()].map(days => new Date(Date.now() - 86400000 * days));

// Gives a very random integer - do not use for super important stuff.
const randomIntegerId = () => `${Date.now() * Math.random()}${(Math.random() * 10)}`.replace(/\./g, '')

// Gives an object containing all the query-parameters of url.
const queryParametersObject = () => { queryObject = {}; location.search.replace(/([^?&=]+)=([^&]*)/g, (_, k, v) => queryObject[k] = v); return queryObject; };

// Returns a promise that will resolve after desired amount of milliseconds (1500 by default).
const dummyResolve = (ms = 1500) => new Promise((resolve) => setTimeout(() => resolve(1), ms));

// Returns a promise that will reject after desired amount of milliseconds (1500 by default).
const dummyReject = (ms = 1500) => new Promise((resolve, reject) => setTimeout(() => reject(1), ms));

// Returns a promise that will either resolve or reject after desired amount of milliseconds (1500 by default).
const dummyPromise = (ms = 1500) => new Promise((resolve, reject) => setTimeout(() => Math.random() >= 0.5 ? resolve(1) : reject(1), ms));

/*
EXAMPLE:

const checkIfILikeCookies = async () => {
    dummyReject(1000)
        .then(() => {
            console.log('Yes i do.')

        })
        .catch(() => {
            console.log('Damnit.')
        })
}

checkIfILikeCookies() // Ouput after 2.5s (2500ms): 'Yes i do.' or 'Damnit.'
*/


/**
 * Bonus
 */

// FizzBuzz.
const fizzBuzz = () => { for (i = 0; ++i < 101; console.log(i % 5 ? f || i : f + 'Buzz'))f = i % 3 ? '' : 'Fizz' };