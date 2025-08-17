/**
 * ! Flatten a nested Array
 * ! IP -> [1, [2, 3, [4, 5]], 6, [[7], [8, 9]]]
 *  ! OP -> [1, 2, 3, 4, 5, 6, 7, 8, 9]
 *
 * ! Approach
 *
 * 1.Maintain a finalArray to return (ex; Result )
 * 2. for loop on each paramArray ex( for (let item of arr))
 *3. if the item satisfies  the Array.isArray(item ), then simply use the recursion technique(ex: result.push(..yoursFunction(item)))
 *4.else result.push(item)
 */

const arrayInput = [1, [2, 3, [4, 5]], 6, [[7], [8, 9]]];

function flattenArrayRecursively(arrayInput) {
  let result = [];

  for (let item of arrayInput) {
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
