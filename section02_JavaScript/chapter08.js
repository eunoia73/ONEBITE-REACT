// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

// 매 반복마다 콜백함수 호출(현재요소의 값, 현재 반복 카운트, 전체 배열의 값)
arr1.forEach(function (item, idx, arr) {
  console.log(idx, item * 2);
});

/**
 * 0 2
 * 1 4
 * 2 6
 */

//화살표 함수 사용
let doubledArr = [];

arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

console.log(doubledArr);
//[2, 4, 6]

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
let isInclude = arr2.includes(3);

console.log(isInclude); //true

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1, 2, 3];
let index = arr3.indexOf(2);
console.log(index); //1  //존재하지 않는 값 -1출력

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 처음으로 만족하는 (콜백함수가 true를 반환)
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1, 2, 3];
const findedIndex = arr4.findIndex((item) => {
  if (item % 2 !== 0) return true;
});

// 콜백함수 더 간단하게 표현 가능
// const findedIndex = arr4.findIndex((item) => item % 2 !== 0);
console.log(findedIndex); // 0

let objectArr = [{ name: "이정환" }, { name: "홍길동" }];

console.log(objectArr.indexOf({ name: "이정환" })); //-1(못 찾음)
//indexOf는 기본적으로 얕은 비교(===)로 동작 -> 프로퍼티 기준으로 비교가 이뤄지지 않음

console.log(objectArr.findIndex((item) => item.name === "이정환")); // 0

// 단순한 원시 타입 값 찾기 위함 - indexOf
// 복잡한 객체 타입 값 찾기 위함 - findIndex

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환

let arr5 = [{ name: "이름" }, { name: "홍길동" }];
const finded = arr5.find((item) => item.name === "이름");
console.log(finded); //{name: '이름'}
