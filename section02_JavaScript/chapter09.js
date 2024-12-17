// 5가지 배열 변형 메서드
// 1. filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: "이름1", hobby: "테니스" },
  { name: "이름2", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];

const tennisPeople = arr1.filter((item) => {
  if (item.hobby === "테니스") return true;
});

console.log(tennisPeople);
/**
 * {name: '이름1', hobby: '테니스'}
 * {name: '이름2', hobby: '테니스'}
 */

// 2. map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((item, idx, arr) => {
  //현재 요소, 반복카운트, 원본배열 전달
  return item * 2; //반환값 설정 가능
});
console.log(mapResult1); //[2, 4, 6]

let names = arr1.map((item) => item.name);
console.log(names); //['이름1', '이름2', '홍길동']

// 3. sort(원본 배열을 정렬)
// 배열을 사전 순으로 정렬하는 메서드
let arr3 = ["b", "a", "c"];
arr3.sort();

console.log(arr3); //['a', 'b', 'c']

let arr3_1 = [10, 3, 5];
//숫자의 대소비교는 하지 않기 때문에 비교기준을 설정하는 콜백함수 같이 넘겨야 함
arr3_1.sort((a, b) => {
  if (a > b) {
    //b가 a 앞에 와라
    return 1; //-> b, a 배치
  } else if (a < b) {
    //a가 b 앞에 와라
    return -1; //-> a, b 배치
  } else {
    //두 값의 자리를 바꾸지 마라
    return 0;
  }
});
console.log(arr3_1); //[3, 5, 10]

// 4. toSorted(원본이 아닌 새로운 정렬된 배열 반환)
// 정렬된 새로운 배열을 반환하는 메서드
let arr5 = ["c", "a", "b"];
const sorted = arr5.toSorted();

console.log(arr5); //['c', 'a', 'b']
console.log(sorted); //['a', 'b', 'c']

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환하는 메서드
let arr6 = ["hi", "im", "winterlood"];
const joined = arr6.join(" ");  //바꾸고 싶은 구분자를 인수로 넣어주기
console.log(joined); //hi im winterlood
