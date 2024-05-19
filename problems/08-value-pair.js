/***********************************************************************
Write a function `valuePair(obj1, obj2, key)` that takes in two objects
and a key (string). The function should return an array containing the
corresponding values of the objects for the given key.

Examples:
let object1 = {name: 'One', location: 'NY', age: 3};
let object2 = {name: 'Two', location: 'SF'};
valuePair(object1, object2, 'location'); // => [ 'NY', 'SF' ]
valuePair(object1, object2, 'name'); // => [ 'One', 'Two' ]
***********************************************************************/

/* LOL! Me trying too hard on something simple. I made this
helper function to then use in the now changed function below and realized it
was completely unnecessary.

let findKey = function(obj, key)  {
  let foundKey = Object.keys(obj).find((el) => {
    return el === key;
  });

  return obj[foundKey];
}
*/

function valuePair(obj1, obj2, key) {
  // Your code here
  let obArr = [obj1, obj2];
  let result = obArr.map((el) => {

    return el[key];
  });

  return result;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = valuePair;
