/* 
  You are given an arrays.
*/

var haystack_1 = [
  "3",
  "123124234",
  undefined,
  "needle",
  "world",
  "a cat",
  "hay",
  2,
  "3",
  "cat",
  true,
  false,
];
var haystack_2 = [
  1,
  2,
  3,
  4,
  "283497238987234",
  "a dog",
  "a hay",
  "a cat",
  4,
  "some random junk",
  "a piece of hay",
  "34",
  "nedle",
  "something somebody lost a while ago",
];
var haystack_3 = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  8,
  7,
  5,
  4,
  3,
  4,
  5,
  6,
  67,
  5,
  5,
  3,
  3,
  4,
  2,
  34,
  234,
  23,
  4,
  234,
  324,
  324,
  "needle",
  1,
  2,
  3,
  4,
  5,
  5,
  6,
  5,
  4,
  32,
  3,
  45,
  54,
];


//STEP-1 VERSION_1
function findNeedle(arr) {
  foundItem = arr.find((element) => element === "needle");
  if (foundItem) {
    return `found the '${foundItem}' at index position ${arr.indexOf("needle")}`;
  } else {
    return "didin't found 'needle', sorry!";
  }
}
console.log(findNeedle(haystack_1));
console.log(findNeedle(haystack_2));
console.log(findNeedle(haystack_3));


//STEP-1 VERSION_2
function findCat(arr) {
  let resultArr = [];
  let foundelement = arr.filter(
    (element) => element !== undefined && element.toString().includes("cat")
  );

  if (foundelement.length > 0) {
    // because it is an array, i measure its length to be sure if it is empty or not
    for (i = 0; i < foundelement.length; i++) {
      resultArr.push(
        `found the 'cat' at index position ${arr.indexOf(foundelement[i])}`
      );
    }
  } else {
    return "didn't found 'cat', sorry!";
  }
  return resultArr.join(" ");
}
console.log(findCat(haystack_1));
console.log(findCat(haystack_2));
console.log(findCat(haystack_3));



//STEP-2 VERSION_1
function findItem1(arr, item) {
  let foundItem = arr.filter((element) => element !== undefined); // i delete undefined elements in array

  const foundelement = foundItem.filter((element) =>
    element.toString().includes(item)
  );
  let resultArr = [];

  if (foundelement.length > 0) {
    for (i = 0; i < foundelement.length; i++) {
      // i want to write my finding to the result array
      resultArr.push(
        `found the '${item}' at index position ${arr.indexOf(foundelement[i])}`
      );
    }
  } else {
    return `didin't found '${item}', sorry!`;
  }
  return resultArr.join(" ; ");
}
console.log(findItem1(haystack_1, "cat"));
console.log(findItem1(haystack_2, "cat"));
console.log(findItem1(haystack_3, "cat"));


//STEP-2 VERSION_2 (working with all possible searches)
function findItem2(arr, item) {
  let resultArr = [];
  let indexes = -1;
  arr.forEach((element) => {
    //if (element !== undefined && element.toString().includes(item)) {
    if (element !== undefined && element.toString().match(item.toString())) {
      if((arr.indexOf(element, indexes+1)) > -1){   // if items has same name, it should store indexes
        resultArr.push(`Found the '${item}' at index position ${arr.indexOf(element, indexes+1)}`);
        indexes = arr.indexOf(element, indexes+1);
    }
    }
  });
  if (resultArr.length > 0) {   // if there is something inside result array
    return resultArr.join(' ; ');
  } else {                    // or not
    return `didin't found '${item}', sorry!`;
  }
}
console.log(findItem2(haystack_1, "cat"));
console.log(findItem2(haystack_2, 'cat'));
console.log(findItem2(haystack_3, 'cat'));



//STEP-2 VERSION_3  (smaller with some exeptions) gives many "not found", but correct item founds also.
function findItem3(arr, item) {
  
  arr.forEach((element) => {
    if (element !== undefined && element.toString().match(item)) {
        console.log(`Found the '${item}' at index position ${arr.indexOf(element)}`);
    }else {                    // or not
      console.log(`didin't found '${item}', sorry!`);
    }
    })
  }
  findItem3(haystack_1, "cat");
  findItem3(haystack_2, 'cat');
  findItem3(haystack_3, 'cat');

  
