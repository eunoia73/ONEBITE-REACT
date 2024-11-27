// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

//animal = { a : 1 };  //상수 객체이므로 또 다른 객체 생성해서 할당하는 것 오류

//저장된 객체 값의 프로퍼티 추가, 수정, 삭제는 가능
animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color; //삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "이정환",
  //메서드 (익명함수, 화살표함수 모두 가능)
  //메서드 선언 형태도 가능
  sayHi() {
    console.log("안녕!");
  },
};

// 메서드는 점 표기법, 괄호표기법 이용하여 호출 가능
person.sayHi();
person["sayHi"]();

