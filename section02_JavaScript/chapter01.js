// 1. Falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0; //음수0
let f5 = NaN; //Not a Number
let f6 = ""; //빈 문자열
let f7 = 0n; //bigInteger

if (!f1) {
  console.log("falsy");
}

// 2. Truthy한 값
// -> 7가지 Falsy한 값들 제외한 나머지 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = []; //빈 배열
let t4 = {}; //객체
let t5 = () => {}; //화살표 함수

if (t4) {
  console.log("truthy");
}

// 3. 활용 사례
function printName(person) {
  //객체의 특정 프로퍼티에 접근하는 함수에서는
  //먼저, 조건문으로 person 매개변수의 값이 null, undefined가 아닌지 확인 필요
  //if (person === undefined || person === null)  //너무 길고 복잡!

  if (!person) {  //!(not 연산자) + Falsy값 -> true
    console.log("person의 값이 없음");
    return; //함수 종료
  }
  console.log(person.name);
}

//let person = { name: "이름" };
let person = null; //undefined
printName(person);

