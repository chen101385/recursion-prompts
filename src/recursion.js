/* jshint esversion: 6 */

// Solve the following prompts using recursion.



/** REQUIRED EXERCISES (1-20) **/


// 1. Calculate the factorial of a number. The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example: 5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5); // 120
var factorial = function(n) {
    if (n < 0) {
        return null;
    }
    
    if (n===0) {
        return 1;
    }
    if (n > 0) {
        return n * factorial(n-1);
      }
};

// 2. Compute the sum of an array of integers.
// sum([1,2,3,4,5,6]); // 21
var sum = function(array) {
    var testArray = array.slice();
    
    if (testArray.length === 0) {
      return 0;
    };
    if (testArray.length === 1) {
      return testArray[0];
    };
    if (testArray.length > 1) {
      return testArray.pop() + sum(testArray);
    };
};

// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
    var testArray = flatten(array);
    function flatten(arr) {
        return arr.reduce(function(a,b) {
            return a.concat(Array.isArray(b) ? flatten(b) : b);
        }, []);    
    }
    
    if (testArray.length === 0) {
      return 0;
    };
    if (testArray.length === 1) {
      return parseInt(testArray[0]);
    };
    if (testArray.length > 1) {
      return parseInt(testArray.pop()) + parseInt(arraySum(testArray));
    };
};

// 4. Check if a number is even.
var isEven = function(n) {
    
    var number = Math.abs(n);
    
    if (number === 0) {
        return true;
    }
    if (number === 1) {
        return false;
    } 
    if (number >= 2) {
        return isEven(number - 2);
    }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
//7 --> 6 + 5 + 4 + 3 + 2 + 1 
var sumBelow = function(n) {
   var number;
    if (n === 0) {
        return 0;
    };
    if (n > 1) {
       number = n - 1;
       return number + sumBelow(n-1);
    };
    if ( n < -1) {
        number = n + 1;
        return number + sumBelow(n+1);
    }
   if (n === 1 || n === -1) {
       return 0;
   }
};

// 6. Get the integers within a range (x, y).
// range(2,9); // [3,4,5,6,7,8]
//first positives range(2,5); [3,4]
//then tweak for negatives
var range = function(x, y) {
    var result = [];
    
    if (x===y) {
        return [];
    };
    
    //stopper conditions
    if (x + 1 === y) {
        return result;
    }
    
    if (x - 1 === y) {
        return result;
    }
    
    if (x + 1 < y) { 
    result.push(x + 1)
    return result.concat(range(x + 1, y));
      };
    
    if (x - 1 > y) {
        result.push(x-1)
        return result.concat(range(x-1,y));
      };
    };

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.
// exponent(4,3); // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
    if (exp === 0) {
        return 1;
    }
    if (exp < 0) {
        return exponent(base, exp + 1) / base;
    }
    return base * exponent(base, exp - 1);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    if (n > 1) {
        n = n/2
        return powerOfTwo(n);
    }
    if (n === 1) {
        return true;
    }
    if (n < 1) {
        return false;
    };   
};

// 9. Write a function that reverses a string.
var reverse = function(string) {
  if (string.length > 0) {
   return string[string.length-1] + reverse(string.substring(0,string.length-1));
  };
  if (string.length === 0) {
        return "";
    }
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
    if (string.length === 0 || string.length === 1) {
        return true;
    };
    if (string[0].toUpperCase() === string[string.length - 1].toUpperCase()) {
        return palindrome(string.slice(1, string.length - 1));
    }
    return false;
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
    if ((x > 0 && y > 0) || (x < 0 && y < 0)) {
    if (x > y) {
        return modulo(x-y, y)
    } 
    if (x < y) {
        return x;
    }
}
}

// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var multiply = function(x, y) {
    
    if (y === 1) {
        return x;
    }
    if (x === 1) {
        return y;
    }
    if (y === -1) {
        return -x;
    }
    if (x === -1) {
        return -y;
    }
    if (x === 0 || y === 0) {
        return 0;
    }
    if (x > 1 && y > 1) {
        return x + multiply(x, y-1);
    };
    if (x < -1 && y < -1) {
        return (-x) + multiply(x, y+1);
    } 
    if (x < -1 && y > 1) {
        return x + multiply(x, y-1);
    }
    if (x > 1 && y < -1) {
        return (-x) + multiply(x, y+1);
    }
};

// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var divide = function(x, y) {
    if ((x > 0 && y > 0) && x < y) {
        return 0;
    }
    if ((x < 0 && y < 0) && x > y) {
        return 0;
    }
    if (( x > 0 && y < 0 && -y > x)||(x < 0 && y > 0 && y > (-x))) {
        return 0;
    }
     if ( x > 0 && y < 0 && -y < x) {
        return -1 + divide(x+y, y);
    }
    if (x < 0 && y > 0 && y < (-x)) {
        return -1 + divide(x+y, y);
    }
    
    if (x===0 && y===0) {
        return NaN;
    }
    if (x===0) {
        return 0;
    }
    if (x!==0 && ((x > 0 && y > 0)||(x < 0 && y < 0)) && x === y) {
        return 1;
    }
    if (x!==0 && (x < 0 || y < 0) && (-x) === y) {
        return -1;
    }
    if ((x < 0 && y < 0) && y > x) {
        return 1 + divide(x-y, y);
    }
   if ((x > 0 && y > 0) && x > y) {
       return 1 + divide(x-y, y);
   }
};

// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) { 
   //only works for x > y;
    if (!y) {
       return x;
   }
    if (y < 0 || x < 0) {
        return null;
    }
    return gcd(y, x % y);
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
    if ((str1.length === 0 && str2.length > 0) || (str1.length > 0 && str2.length === 0)) {
        return false;
    }
    if (str2.length > 0 && str1.length > 0 && str1[0] === str2[0]) {
        return compareStr(str1.slice(1, str1.length), str2.slice(1, str2.length));
    } 
    if ((str1.length > 0 && str2.length > 0) && (str1[0] !== str2[0])) {
        return false;
    }
    if (str1.length === 0 && str2.length === 0) {
        return true;
    }
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
/*
convert string to array of substrings
push first element to result
remove first element
rerun until array.length = 0; return result
*/
var createArray = function(str) {
var array = str.split('');
    var newArray;
    var result = [];
    if (array.length > 0) {
        result.push(array[0]);
        newArray = array.slice(1, array.length);
       return result.concat(createArray(newArray.join('')));
    }
    if (array.length === 0) {
        return result;
    }
};

// 17. Reverse the order of an array
/*
push first index of array to newArray
remove first element of array;
recursion
if array.length = 0 --> return newArray
*/
var reverseArr = function(array) {
    var result = [];
    var newArray; 
    if (array.length===0) {
        return result;
    }
    if (array.length > 0) {
        //push last element to result
        result.push(array[array.length-1]);
        //shorten array by removing last element
        newArray = array.slice(0, array.length - 1);
        //recursion via concatenation of arrays
        return result.concat(reverseArr(newArray));
    }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
    var result = [];
    if (length === 0) {
        return result;
    }
    if (length > 0) {
        result.push(value);
        return result.concat(buildList(value, length - 1));
    }
};

// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
//
var fizzBuzz = function(n) {
    var result = [];
    var output = [];
    
    if (n > 0 && n % 3 !== 0 && n % 5 !== 0) {
        result.splice(0, 0, n.toString());
        return (fizzBuzz(n-1)).concat(result);
    }
    if (n > 0 && n % 3 ===0 && n % 5 !== 0) {
        result.splice(0, 0, 'Fizz');
        return (fizzBuzz(n-1)).concat(result);
    }
    if (n > 0 && n % 5 ===0 && n % 3 !== 0) {
        result.splice(0, 0, 'Buzz');
        return (fizzBuzz(n-1)).concat(result);
    }
    if ( n > 0 && n % 5 === 0 && n % 3 === 0) {
        result.splice(0, 0, 'FizzBuzz');
        return (fizzBuzz(n-1)).concat(result);
    }
    if (n === 0) {
        return result;
    }
};

// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
//recursion for each element of array;
// how to maintain count?
//how to push array in recursion that stores value;
var countOccurrence = function(array, value) {
   
  for (var i = 0; i < array.length; i++) {
  	if (array[i] !== value) {
  		array.splice(i, 1);
  		countOccurrence(array, value);
  	  };
  	};
  	return array.length;
  };



/*
   //Version #1 

   var results = 0;

   var counter = function(arr) {
    var newArray;
   	if (arr.length > 0) {
   		if (arr[0] === value) {
          results++;
   		}
   	    newArray = arr.slice(1, arr.length);
   	    counter(newArray);
   	};
  };
  counter(array);

  return results;
};



//Version #2
  var newArray,
   results = result || [];

   if (array.length > 0) {
   	 if (array[0] === value) {
   	 	results.push(array[0])
   	 }
   	 newArray = array.slice(1, array.length)
     return countOccurrence(newArray, value, results)
   }

   if (array.length === 0) {
   	return result.length;
   }
*/



/** OPTIONAL EXERCISES (21-40) **/


// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  
  if (array.length === 0) {
  	return [];
  }

  return [].concat(callback(array[0]), rMap(array.slice(1, array.length), callback));
};

// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
// keys are always strings
var countKeysInObj = function(obj, key) {
   var count = 0;

   for (var prop in obj) {
   	if (prop === key) {
   		count++;
   	  };
   	if (typeof obj[prop] === 'object') {
   		count += countKeysInObj(obj[prop], key);
   	  };
   };
   return count;
};

// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1
var countValuesInObj = function(obj, value) {
	var count = 0;

	for (var prop in obj) {
		if (obj[prop] === value) {
			count++;
		}

		if (typeof obj[prop] === 'object') {
			count += countValuesInObj(obj[prop], value)
		}
	}
	return count;
};

// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
	for (var prop in obj) {
		if (prop === oldKey) {
			obj[newKey] = obj[prop];
			delete obj[prop];
		};

		if (typeof obj[prop] === 'object') {
			replaceKeysInObj(obj[prop], oldKey, newKey);
		};
	};
	return obj;
};

// 25. Get the first n Fibonacci numbers. In the Fibonacci sequence, each subsequent
// number is the sum of the previous two.
// Example: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5); // [0,1,1,2,3,5]
// Note: The 0 is not counted.
var fibonacci = function(n) {
	if ( n <= 0) {
		return null;
	}

	if ( n === 1 ) {
		return [0, 1]
	}
	if ( n === 2 ) {
		return [0, 1, 1]
	}

	var a = fibonacci(n-1);
	//fibonacci(n); n = last element index; 
	//a[n-1] = last indexed element;
	//a[n-2] = second to last indexed element;
	a.push(a[n-1] + a[n-2]);
	return a;
};

/*
Attempt #1: INNER RECURSION; partial success - did not pass 'should use recursion by calling itself' test.
 
	var results = [];

	if (n <= 0) {
		return null;
	}
    
    var sequencer = function(i) {
      if (i === 0) {
      	return 0;
      }

      if (i <= 2) {
      	return 1;
      };
      return sequencer(i-1) + sequencer(i-2);
    };

    for (var j = 0; j <= n; j++) {
      results.push(sequencer(j));
    }

    return results;



*/


// 26. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
	if (n < 0) {
		return null;
	}

	if (n === 0) {
		return 0;
	}

	if (n <= 2) {
		return 1;
	}

	if ( n > 2) {
		return nthFibo(n-1) + nthFibo(n-2);
	}
};

// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
};

// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','poop','banana']); // ['Car','Poop','Banana']
var capitalizeFirst = function(array) {
};

// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
    var result = [];

    for ( var i = 0; i < array.length; i++) {
    	if (!Array.isArray(array[i])) {
    		result.push(array[i]);
    	} else {
    		result = result.concat(flatten(array[i]));
    	}
    }
    return result;
};

  /*
    VERSION 1

    array.forEach(function(element) {
      if (!Array.isArray(element)) {
      	result.push(element);
      } else {
      	result = result.concat(flatten(element));
      };
    });
    */

// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
	var obj = {};

	var letters = str.split('');

		for ( var i = 0; i < letters.length; i++ ) {
          if (!obj.hasOwnProperty(obj[letters[i]])) {
          	obj[letters[i]] = 1;
          } else {
          	obj[letters[i]] += 1;
          };
		};
	return obj;
};

// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
    var result = list.slice();

	for (var i = 0; i < result.length; i++) {
      if (result[i] === result[i-1]) {
      	result.splice(i, 1);
      	return compress(result);
      }
	}
	return result;
};

/* NON-RECURSION

var results = [];

	for ( var i = 0; i < list.length; i++ ) {
		if (list[i] !== list[i-1]) {
			results.push(list[i]);
		}
	}
	return results;

	*/

// 33. Augument every element in a list with a new value where each element is an array
// itself.
// augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
//recursion should be for arrays within arrays;
//
var augmentElements = function(array, aug) {
    var result = [];

	for (var i = 0; i < array.length; i++) {
		var innerArray = [];
		//if array
		if (Array.isArray(array[i]) && array[i].length === 0) {
			innerArray.push(aug);
			result.push(innerArray);
			//[aug] is pushed to result;
		}

		if (Array.isArray(array[i]) && array.length !== 0) {
			result = result.concat(augmentElements(array[i], aug));
			//result concatenates with [ [ array[i], aug ] ];
		}

		if (!Array.isArray(array[i])) {
        //if non-array
        innerArray.push(array[i], aug);
        result.push(innerArray);
        //[array[i], aug] is pushed to result;
		}
	}
	return result;
};

// 34. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
};

// 35. Alternate the numbers in an array between positive and negative regardless of
// their original sign. The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
};

// 36. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};

// 37. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 38. Write a function for binary search.
// var array = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
// binarySearch(array, 5) // 5
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search
var binarySearch = function(array, target, min, max) {
};

// 39. Write a merge sort function.
// mergeSort([34,7,23,32,5,62]) // [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};

// 40. Deeply clone objects and arrays.
// var obj1 = {a:1,b:{bb:{bbb:2}},c:3};
// var obj2 = clone(obj1);
// console.log(obj2); // {a:1,b:{bb:{bbb:2}},c:3}
// obj1 === obj2 // false
var clone = function(input) {
};
