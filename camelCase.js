// Write simple .camelCase method for strings. All words must have their first letter capitalized without spaces.

// For instance:

// 'hello case'.camelcase => HelloCase

// 'camel case word'.camelcase => CamelCaseWord

function camelCase(str){
    let arr = str.split(' ')
     for (i=0; i<arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
     }
     return arr.join(' ')
}

console.log(camelCase('camel case word'));

