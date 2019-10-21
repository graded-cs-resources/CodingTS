/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
/* eslint-disable semi */
/* eslint-disable prefer-const */
/** --- Solutions --- **/
// Array-1

let solutions = {};

solutions.firstLast6 = function firstLast6(nums) {
  // The first variable is optional, but it makes the code more readable  
  let end = nums.length - 1;
  if (nums.length > 0 && (nums[0] == 6 || nums[end] == 6)) {
    return true;
  } else {
    return false;
  }
}

solutions.sameFirstLast = function sameFirstLast(nums) {
  let end = nums.length - 1;
  if (nums.length >= 1 && nums[0] == nums[end]) {
    return true;
  } else { return false; }
}

solutions.makePi = function makePi() {
  let nums = [3, 1, 4];
  return nums;
}

solutions.commonEnd = function commonEnd(a, b) {
  if (a[0] == b[0] || a[a.length - 1] == b[b.length - 1]) {
    return true;
  } else {
    return false;
  }
}

solutions.sum3 = function sum3(nums) {
  return nums[0] + nums[1] + nums[2];
}

solutions.rotateLeft3 = function rotateLeft3(nums) {
  return [nums[1], nums[2], nums[0]];
}

solutions.reverse3 = function reverse3(nums) {
  return [nums[2], nums[1], nums[0]];
}

solutions.maxEnd3 = function maxEnd3(nums) {
  let max = nums[0];
  if (nums[2] > nums[0]) {
    max = nums[2];
  }
  return [max, max, max];
}

solutions.sum2 = function sum2(nums) {
  if (nums.length == 0) {
    return 0;
  }

  if (nums.length < 2) {
    return nums[0];
  } else {
    return nums[0] + nums[1]
  }
}

solutions.middleWay = function middleWay(a, b) {
  return [a[1], b[1]];
}

solutions.makeEnds = function makeEnds(nums) {
  return [nums[0], nums[nums.length - 1]];
}

solutions.has23 = function has23(nums) {
  if (nums[0] == 2 || nums[0] == 3 || nums[1] == 2 || nums[2] == 3) {
    return true;
  } else {
    return false;
  }
}

solutions.no23 = function no23(nums) {
  if (nums[0] == 2 || nums[0] == 3 || nums[1] == 2 || nums[2] == 3) {
    return false;
  } else {
    return true;
  }
}

solutions.makeLast = function makeLast(nums) {
  let newLength = nums.length * 2;
  let newArray = [];
  for (let i = 0; i < newLength; i++) {
    newArray[i] = 0;
  }
  newArray[newLength - 1] = nums[nums.length - 1];
  return newArray;
}

solutions.double23 = function double23(nums) {
  if (nums.length < 2) {
    return false;
  }
  else if ((nums[0] == 2 && nums[1] == 2) || (nums[0] == 3 && nums[1] == 3)) {
    return true
  } else {
    return false;
  }
}

solutions.fix23 = function fix23(nums) {
  //since the length is three, the only options are the first two or last two elements
  if (nums[0] == 2 && nums[1] == 3) {
    nums[1] = 0;
  } else if (nums[1] == 2 && nums[2] == 3) {
    nums[2] = 0;
  }
  return nums;
}

solutions.findTheMedian = function findTheMedian(nums) {
  if (nums.length % 2 === 1) {
    return nums[(nums.length - 1) / 2];
  }
  else {
    return (nums[nums.length / 2 - 1] + nums[nums.length / 2]) / 2;
  }
}

solutions.start1 = function start1(a, b) {
  let count = 0;
  if (a[0] == 1) {
    count += 1;
  }

  if (b[0] == 1) {
    count += 1;
  }

  return count;
}

solutions.biggerTwo = function biggerTwo(a, b) {
  if (b[0] + b[1] > a[0] + a[1]) {
    return b;
  }
  return a;
}

solutions.makeMiddle = function makeMiddle(nums) {
  // consider an example. If the array has length 4
  // then half will be 2, and we want the 2nd and third elements
  // which will have index 1 (half - 1) and 2 (half)
  let half = nums.length / 2;
  return [nums[half - 1], nums[half]];
}

solutions.plusTwo = function plusTwo(a, b) {
  let duoArr = [];
  duoArr[0] = a[0];
  duoArr[1] = a[1];
  duoArr[2] = b[0];
  duoArr[3] = b[1];

  return duoArr;
}

solutions.swapEnds = function swapEnds(nums) {
  // save the first value temporarily
  let first = nums[0]
  // move the last value into the first value
  nums[0] = nums[nums.length - 1];
  // move the first value into the last place
  nums[nums.length - 1] = first;
  return nums;
}

solutions.findLowestIndex = function findLowestIndex(nums) {
  let minVal = nums[0];
  let minValIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (cur < minVal) {
      minVal = cur;
      minValIndex = i;
    }
  }
  return minValIndex;
}




solutions.midThree = function midThree(nums) {
  //if our array is of size 3, we want our "pivot" (middle) index to be 1
  // we can do this with (size - 1)/2
  let half = (nums.length - 1) / 2;
  return [nums[half - 1], nums[half], nums[half + 1]];
}

solutions.maxTriple = function maxTriple(nums) {
  let mid = nums[(nums.length - 1) / 2];
  let start = nums[0]
  let end = nums[nums.length - 1];

  if (mid > start && mid > end) {
    return mid;
  }
  else if (start > mid && start > end) {
    return start;
  } else {
    return end;
  }
}

solutions.frontPiece = function frontPiece(nums) {
  if (nums.length < 2) {
    return nums;
  }
  return [nums[0], nums[1]];
}

solutions.unlucky1 = function unlucky1(nums) {

  let sections = [
    nums.slice(-2),
    nums.slice(0, 3)
  ]

  for (let section of sections) {
    for (let i = 0; i < section.length; i++) {
      if (section[i] == 1 && section[i + 1] == 3)
        return true;
    }
  }
  return false;
}

solutions.make2 = function make2(a, b) {
  let newAr = a.concat(b);

  return [newAr[0], newAr[1]];
}

solutions.front11 = function front11(a, b) {
  let sections = [
    a,
    b
  ]

  let newA = [];

  for (let section of sections) {
    if (section.length == 0) {

    } else {
      newA.push(section[0]);
    }
  }

  return newA;
}

// Array-2

solutions.countEvens = function countEvens(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      count += 1;
    }
  }
  return count;
}

solutions.bigDiff = function bigDiff(nums) {
  let minn = Math.min(...nums);
  let maxx = Math.max(...nums);

  return Math.abs(maxx - minn);
}

solutions.centeredAverage = function centeredAverage(nums) {
  let minn = Math.min(...nums);
  let minIn = nums.indexOf(minn);
  nums.splice(minIn, 1);

  let maxx = Math.max(...nums);
  let maxIn = nums.indexOf(maxx);
  nums.splice(maxIn, 1);

  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
  }
  return total / nums.length;
}

solutions.sum13 = function sum13(nums) {
  let pre13 = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 13 || nums[i - 1] == 13) {

    } else {
      pre13.push(nums[i]);
    }
  }
  let sum = pre13.reduce((a, b) => a + b, 0)
  return sum;
}

solutions.sum67 = function sum67(nums) {
  let summ = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 6) {
      summ += nums[i];
    } else {
      while (nums[i] != 7) {
        i++;
      }
    }
  }
  return summ;
}

solutions.has22 = function has22(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2 && nums[i + 1] == 2) {
      return true;
    }
  }
  return false;
}

solutions.lucky13 = function lucky13(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1 || nums[i] == 3) {
      return false;
    }
  }
  return true;

}

solutions.sum28 = function sum28(nums) {
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2) {
      count += nums[i];
    }
  }
  return count == 8;
}

solutions.more14 = function more14(nums) {

  let one = 0;
  let four = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      one += 1;
    }

    if (nums[i] == 4) {
      four += 1;
    }
  }
  if (one > four) {
    return true;
  }else {
    return false;
  }
}

solutions.fizzArray = function fizzArray(n) {
  let newA = [];
  for (let i = 0; i < n; i++) {
    newA[i] = i;
  }
  return newA;
}

solutions.prependSum = function prependSum(nums) {
  nums.unshift(nums.shift() + nums.shift());
  return nums;
}



solutions.only14 = function only14(nums) {

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != 4 && nums[i] != 1) {
      return false;
    }
  }
  return true;
}

solutions.fizzArray2 = function fizzArray2(n) {
  let nu = [];
  for (let i = 0; i < n; i++) {
    nu[i] = i.toString();
  }
  return nu;
}

solutions.no14 = function no14(nums) {
  let has1 = false;
  let has4 = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      has1 = true;
    }

    if (nums[i] == 4) {
      has4 = true;
    }

  }
  return (!has1 || !has4);
}

solutions.isEverywhere = function isEverywhere(nums, val) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != val && nums[i + 1] != val) {
      return false;
    }
  }
  return true;
}

solutions.either24 = function either24(nums) {
  let has22 = false;
  let has44 = false;

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == 2 && nums[i + 1] == 2)
      has22 = true;

    if (nums[i] == 4 && nums[i + 1] == 4)
      has44 = true;
  }

  return has22 != has44;
}

solutions.matchUp = function matchUp(nums1, nums2) {
  let count = 0;

  for (let i = 0; i < nums1.length; i++) {
    let diff = Math.abs(nums1[i] - nums2[i]);
    if (diff > 0 && diff < 3) {
      count += 1;
    }
  }
  return count;
}

solutions.has77 = function has77(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if ((nums[i] == 7 && nums[i + 1] == 7) || (nums[i] == 7 && nums[i + 2] == 7)) {
      return true;
    }
  }
  return false;
}

solutions.has12 = function has12(nums) {
  let has1 = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      has1 = true;
    }

    if (has1 == true && nums[i] == 2) {
      return true;
    }
  }
  return false;
}

solutions.modThree = function modThree(nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] % 2 == nums[i + 1] % 2 && nums[i + 1] % 2 == nums[i + 2] % 2) {
      return true;
    }
  }
  return false;
}

solutions.haveThree = function haveThree(nums) {
  let three = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 3) {
      if (nums[i + 1] == 3) {
        return false;
      }
      three += 1;
    }

  }
  return three == 3;
}

solutions.twoTwo = function twoTwo(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 2) {
      if (nums[i + 1] != 2) {
        return false;
      }
      i = i + 2;
    }
  }
  return true;
}

solutions.sameEnds = function sameEnds(nums, len) {
  let front = nums.slice(0, len);
  let end = nums.slice(nums.length - len);

  return front.toString() == end.toString();
}

solutions.tripleUp = function tripleUp(nums) {
  for (let i = nums.length; i > 0; i--) {
    if (nums[i] - nums[i - 1] == 1) {
      if (nums[i - 1] - nums[i - 2] == 1) {
        return true;
      }
    }
  }
  return false;
}

solutions.fizzArray3 = function fizzArray3(start, end) {
  let newA = [];
  for (let i = start; i < end; i++) {
    newA.push(i);
  }
  return newA;
}

solutions.shiftLeft = function shiftLeft(nums) {

  if (nums.length < 1) {
    return nums;
  }

  let first = nums.shift();

  nums.push(first);

  return nums;
}

solutions.tenRun = function tenRun(nums) {
  let current;
  let i = 0;

  while (i < nums.length && nums[i] % 10 != 0)
    i++;

  if (i >= nums.length)
    return nums;

  current = nums[i];
  i++;

  while (i < nums.length) {
    if (nums[i] % 10 == 0)
      current = nums[i];
    else
      nums[i] = current;
    i++;
  }

  return nums;
}

solutions.pre4 = function pre4(nums) {

  let b44 = [];

  let i = 0;

  while (i < nums.length && nums[i] != 4) {
    b44.push(nums[i]);
    i++;
  }
  return b44;
}

solutions.post4 = function post4(nums) {
  let aft4 = [];

  let i = nums.length - 1;
  while (i > 0 && nums[i] != 4) {
    aft4.push(nums[i]);
    i--;
  }
  return aft4.reverse();
}

solutions.notAlone = function notAlone(nums, val) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] == val) {
      if (nums[i + 1] == undefined) {
        return nums;
      }

      if (nums[i - 1] == val || nums[i + 1] == val) {

      }
      else if (nums[i - 1] == undefined) {

      }
      else if (nums[i - 1] > nums[i + 1]) {
        nums[i] = nums[i - 1];
      } else {
        nums[i] = nums[i + 1];
      }
    }
  }
  return nums;
}

solutions.zeroFront = function zeroFront(nums) {
  if (nums.length == 0)
    return nums;

  let i = 0;

  while (nums[i] == 0)
    i++;

  for (let j = i + 1; j < nums.length; j++) {
    if (nums[j] == 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      i++;
    }
  }

  return nums;
}

solutions.withoutTen = function withoutTen(nums) {
  let nlen = nums.length;

  let newA = nums.filter(notten);

  let tlen = newA.length;
  let x = nlen - tlen;

  let i = 0;

  while (i < x) {
    newA.push(0);
    i++;
  }

  return newA;
}

function notten(num) {
  return num != 10;
}

solutions.zeroMax = function zeroMax(nums) {
  let odd = 0;
  for (let i = nums.length - 1; i >= 0; i--) {

    if (nums[i] != 0 && nums[i] % 2 != 0) {
      if (nums[i] > odd) {
        odd = nums[i];
      }
    }
    if (nums[i] == 0) {
      nums[i] = odd;
    }
  }

  return nums;
}

solutions.evenOdd = function evenOdd(nums) {
  let even = nums.filter(isEven);
  let odd = nums.filter(isOdd);

  let newA = even.concat(odd);

  return newA;
}

function isEven(num) {
  return num % 2 == 0;
}

function isOdd(num) {
  return num % 2 != 0;
}

solutions.fizzBuzz = function fizzBuzz(start, end) {

  let strArray = [];

  for (let i = start; i < end; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      strArray.push("FizzBuzz");
    } else if (i % 3 == 0) {
      strArray.push("Fizz");
    } else if (i % 5 == 0) {
      strArray.push("Buzz");
    } else {
      let str = i.toString();
      strArray.push(str);
    }
  }
  return strArray;
}

// Array-3

solutions.maxSpan = function maxSpan(nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    let j = nums.length - 1;

    while (nums[i] != nums[j]) {
      j--;
    }

    let span = j - i + 1;

    if (span > max)
      max = span;
  }

  return max;
}

solutions.fix34 = function fix34(nums) {
  let i = 0;

  while (i < nums.length && nums[i] != 3)
    i++;

  let j = i + 1;

  while (j < nums.length && nums[j] != 4)
    j++;

  while (i < nums.length) {
    if (nums[i] == 3) {
      let temp = nums[i + 1];
      nums[i + 1] = nums[j];
      nums[j] = temp;

      while (j < nums.length && nums[j] != 4)
        j++;
    }
    i++;
  }

  return nums;
}

solutions.fix45 = function fix45(nums) {

  let i = 0;
  let j = 0;

  while (j < nums.length && nums[j] != 5) {
    j++;
  }

  while (i < nums.length) {
    if (nums[i] == 4) {
      let temp = nums[i + 1];
      nums[i + 1] = nums[j];
      nums[j] = temp;

      while ((j < nums.length && nums[j] != 5) || j == i + 1)
        j++;
    }
    i++;
  }
  return nums;
}

solutions.canBalance = function canBalance(nums) {
  let first = 0;
  let second = 0;

  for (let i = 0; i < nums.length; i++) {
    second += nums[i]; //adding all nums together
  }

  for (let i = 0; i <= nums.length - 2; i++) {
    first += nums[i];
    second -= nums[i];

    if (first == second) {
      return true;
    }
  }

  return false;
}

solutions.linearIn = function linearIn(outer, inner) {
  //index for inner array, also acts as a 'count' variable
  let j = 0;

  //looping through the outer array once. looking for matches.
  for (let i = 0; i < outer.length; i++) {
    if (inner[j] == outer[i]) {
      j++;
    }
  }

  return j == inner.length;

}

solutions.squareUp = function squareUp(n) {

  let subArray = [];
  let j = n;
  while (j > 0) {
    subArray.push(0);
    j--;
  }

  let output = [];

  for (let i = n - 1; i >= 0; i--) {
    subArray.splice(i, 1, n - i);
    output = output.concat(subArray);
  }
  return output;
}

solutions.seriesUp = function seriesUp(n) {
  let modArr = [];

  for (let i = 0; i < n; i++) {
    let j = i;
    let x = 1;
    while (j >= 0) {
      modArr.push(x);
      x += 1;
      j--;
    }
    x = 1;
  }
  return modArr;
}

solutions.maxMirror = function maxMirror(nums) {

  function matchesForN(nums, n) {
    // initially lets solve for n=3, then we can generalise to any n
    // step1 get the candidates, which is [1,2,3] and [2,3,4] etc
    let candidates = [];

    for (let i = 0; i < nums.length - (n - 1); i++) {
      let candidate = nums.slice(i, i + n);
      candidates.push(candidate);
    }

    //step2. reverse nums. Since reverse() alters the array, prevent that by saving
    // reversed array in a variable.
    let rev_nums = nums.slice().reverse();

    let comparisons = [];

    //step3. make the copmarison arrays. like in candidates but reversed.
    for (let i = 0; i < rev_nums.length - (n - 1); i++) {
      let comparison = rev_nums.slice(i, i + n);
      comparisons.push(comparison);
    }

    let matches = []
    for (let candidate of candidates) {
      for (let comparison of comparisons) {
        match = isEqual(candidate, comparison.slice())
        if (match) {
          matches.push(candidate);
          break;
        }
      }
    }

    return matches;

  }

  //function we call to check if the sub-arrays are equal
  function isEqual(array1, array) {
    for (let i = 0, l = array1.length; i < l; i++) {
      // Check if we have nested arrays
      if (array1[i] instanceof Array && array[i] instanceof Array) {
        // recurse into the nested arrays
        if (!array1[i].equals(array[i]))
          return false;
      }
      else if (array1[i] != array[i]) {
        // Warning - two different object instances will never be equal: {x:20} != {x:20}
        return false;
      }
    }
    return true;
  }

  for (let n = nums.length; n >= 0; n--) {
    let matches = matchesForN(nums, n);
    if (matches.length) {
      return n;
    }
  }
}

solutions.countClumps = function countClumps(nums) {
  let yardStick = -1;
  let clumps = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == nums[i + 1] && nums[i] != yardStick) {
      clumps += 1;
      yardStick = nums[i];
    } else {
      if (nums[i] != yardStick) {
        yardStick = -1
      }
    };
  }
  return clumps;
}

module.exports = solutions;