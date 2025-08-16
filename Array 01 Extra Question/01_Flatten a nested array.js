/**
 * ! Flatten a nested Array
 * ! IP -> [1, [2, 3, [4, 5]], 6, [[7], [8, 9]]]
 *  ! OP -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
 *
 */

const arrayInput = [1, [2, 3, [4, 5]], 6, [[7], [8, 9]]];

function flattenArrayRecursively(arrayInput) {
  let result = [];

  // loop for each item

  for (item of arrayInput) {
    if (Array.isArray(item)) {
      result.push(...flattenArrayRecursively(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log("This is the Input as Nested Array", arrayInput);
console.log(
  "This is Array after flatted ",
  flattenArrayRecursively(arrayInput)
);
