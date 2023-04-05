'use strict';

import Stack from "./Stack.js";


//(2+2)+[2*(2/4)+3]

//(3+[4)}+() 


/**
 * 
 * @param {*} text - text which need to check 
 * @param {Object} obj - object with {open: close} brackets
 * @returns {Boolean} - 'true' if text is with valid brackets order
  */
function checkBracketsIn(text, bracketsType){
    
    const arrayBrackets = makeBraketsArrayFrom(text, bracketsType); // get sorted array only with brackets(that type, which user set)
    const stack = new Stack(arrayBrackets.length); //  make stack which has length as arrayBrackets has 

    const objKeys = Object.keys(bracketsType); // opened brackets array
    const objValues = Object.values(bracketsType); // closed brackets array


    for(let i = 0; i < arrayBrackets.length; i++){
        if(objKeys.includes(arrayBrackets[i])){
            stack.push(arrayBrackets[i]); 
           
        }

       if(objValues.includes(arrayBrackets[i])){ 
            if(bracketsType[stack.pick()] === arrayBrackets[i]){
                    stack.pop();
            }
        }
    }

    return stack.isEmpty; 
}


/**
 * 
 * @param {*} text 
 * @returns {Array}
 */
function makeBraketsArrayFrom(text, brackets){
    let array = [];

    if(typeof text === 'string'){
        array = text.split('');
    }
    if(text instanceof Array){
        array = text.toString().split('');
    }

    return sortBrackets(array, brackets);
}

/**
 * 
 * @param {Array} array 
 * @param {Object} brackets 
 * @returns {Array}
 */
function sortBrackets(array, brackets){
    const sortedArray = [];
    array.forEach((value) =>  Object.keys(brackets).includes(value) || Object.values(brackets).includes(value) ? sortedArray.push(value) : false);
    
    return sortedArray;
}



const bracketsToCheck = {
    '(' : ')',

    '{' : '}',

    '[' : ']',

};

const str = '(2+2)+[2*(2/4)+3]';
const str2 = '(3+[4)}+() ';
const str3 = '';


console.log(checkBracketsIn(str, bracketsToCheck));
console.log(checkBracketsIn(str2, bracketsToCheck));
console.log(checkBracketsIn(str3, bracketsToCheck));

