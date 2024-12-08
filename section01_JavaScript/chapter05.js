// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2); //모듈러

let inf = Infinity; //양의 무한대
let mint = -Infinity; //음의 무한대

let nan = NaN; //연산 실패시 반환
//console.log(1 * "hello");

// 2. String Type
let myName = "이정환";
let myLocation = "목동";
let introduce = myName + myLocation;
//console.log(introduce);

// 백틱으로 문자열 만들기 - 동적 문자열 가능
// 템플릿 리터럴 문법
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`;
//console.log(introduceText);

// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;

// 4. Null Type (아무것도 없다)
let empty = null;

// 5. Undefined Type
// 변수 선언 후 아무것도 할당 안 했을 때 자동으로 들어가는 값
let none;
console.log(none);
