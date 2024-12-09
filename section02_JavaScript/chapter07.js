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

// shift, unshift는 push, pop 보다 느림 (배열의 모든 요소를 옮기고 추가, 삭제 필요)
// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고, 제거된 요소 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(arr3); //[2, 3]
console.log(shiftedItem); //1

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0);
console.log(arr4); //[0, 1, 2, 3]
console.log(newLength2); //4

// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5);
let sliced2 = arr5.slice(2);
let sliced3 = arr5.slice(-1); // 뒤에서부터 하나만

console.log(sliced); //[3, 4, 5]
console.log(arr5); //[1, 2, 3, 4, 5] 원본 배열은 변경되지 않음
console.log(sliced2); // [3, 4, 5]
console.log(sliced3); //[5]

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

let concatedArr = arr6.concat(arr7);
console.log(concatedArr); //[1, 2, 3, 4]
