// 6가지의 요소 조작 메서드

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
// push 메서드는 배열에 요소를 추가한 후 변환된 배열의 길이를 반환한다.
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5, 6, 7);

console.log(arr1); //[1, 2, 3, 4, 5, 6, 7]
console.log(newLength); //7

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 제거된 요소 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop();

console.log(arr2); //[1, 2]
console.log(poppedItem); //3

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고, 제거된 요소 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(arr3); //[2, 3]
console.log(shiftedItem); //1

// 4. unshift
