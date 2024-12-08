### 인프런 '한입 크기로 잘라 먹는 리액트(React.js)'강의를 수강하며 공부한 내용 정리

* JavaScript의 자료형

<img src="https://velog.velcdn.com/images/eunoia73/post/8147bf5e-0dd1-4f52-a19a-0a0c24ca1966/image.png" width="100%" height="50%">

### 1. 명시적 형변환
```javascript
// 명시적 형변환
// -> 프로그래머 내장함수 등을 이용해서 직접 형 변환을 명시
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);  //20

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(strToNum2);  //10

// -> 숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다.");  //20입니다.
```

### 2. null 병합 연산자 ??, typeof 연산자
>null 병합 연산자 `??`  <br>
: 존재하는 값을 추려내는 기능 <br>
-> null, undefined가 아닌 값을 찾아내는 연산자 <br>

```javascript
// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2; // 10
//var1은 초기화 안 했으므로 undefined -> var4에 var2값 저장

let var5 = var1 ?? var3; // 20

let var6 = var2 ?? var3; //10 //그냥 앞에 값이 대입됨

let userName = "이름";
let userNickName = "닉네임";
//userName이 있으면 userName, 없으면 userNickName으로 저장됨
let displayName = userName ?? userNickName; 
console.log(displayName);  // "이름"

// 2. typeof 연산자
// -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자
let var7 = 1;
console.log(typeof var7); //number
var7 = "hello";

let t1 = typeof var7;
console.log(t1); //string

```

### 3. 함수
> 함수를 하나의 값으로 취급 -> 함수 자체를 변수에 담을 수 있음, 인수로 전달 가능

```javascript
// 1. 함수 표현식
function fucA() {
  console.log("funcA");
}

// 자스에서는 함수도 하나의 값으로 취급하기 때문에
// 함수 자체를 변수에 담아놓을 수 있음
let varA = fucA;
console.log(varA); //함수 자체 출력됨
                    // function fucA() {
                    //  console.log("funcA");
                    //  }
varA(); //funcA

//값으로써 함수 생성하는 방식은 호이스팅 불가
let varB = function () {
                        //익명함수
console.log("funcB");
};

varB(); //funcB

// 2. 화살표 함수
let varC = (value) => value + 1; //그냥 값 전달이면 가능

let varD = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));  //11
console.log(varD(11));  //12

```
<img src="https://velog.velcdn.com/images/eunoia73/post/3172e422-ece8-40cd-a5d5-fac0a6090546/image.png" width="100%" height="50%">
<hr>

> 콜백함수 -> 어떤 함수를 다른 함수의 인수로 전달해서 나중에 호출하도록 한 것

<img src="https://velog.velcdn.com/images/eunoia73/post/3af62e11-41cd-4f92-b5b5-fd9b809018b0/image.jpeg" width="100%" height="50%">


#### * 콜백함수의 활용

**  개선 전
```javascript
function repeat(count){
    for(let idx = 1; idx <= count; idx++) {
        console.log(idx);
    }
}

function repeatDouble(count){
    for(let idx = 1; idx <= count; idx++) {
        console.log(idx * 2);
    }
}

repeat(5);
repeatDouble(5);
```
** 개선 후
```javascript
//콜백함수 이용해서 개선한 코드

function repeat(count, callback){
    for(let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
});

repeat(5, (idx) => {
    console.log(idx * 3);
});
```
### 4. 객체
> 객체 프로퍼티(속성)은 `key : value`로 구성 <br>
접근방법 : 점 표기법 `person.name`, 괄호 표기법 `person["name"]` <br>
프로퍼티 삭제방법 : `delete person.hobby`, `delete person["hobby"]` <br>
프로퍼티 존재 유무 확인방법 : in 연산자 <br>
`let result = "name" in person;`  -> true <br>

```javascript
// 1. 객체 생성
let obj1 = new Object(); //객체 생성자
let obj2 = {}; //객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성) -> key : value
let person = {
  name: "이름",
  age: 27,
  hobby: "영화보기",
  job: "FE Developter",
  extra: {},
  10: 20,
  "like cat": true, //띄어쓰기 포함한 key는 "" 감싸주기
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
//person.name2 처럼 존재하지 않는 프로퍼티에 접근하려고 하면 undefined 출력
console.log(name); //이름

let age = person["age"]; //쌍따음표 중요
console.log(age); //27

let property = "hobby";
let hobby = person[property];
console.log(hobby); //영화보기

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "fe developer";
person["favoriteFood"] = "떡볶이";

// 3.3 프로퍼티를 수정하는 방법
person.job = "educator";
person["favoriteFood"] = "초콜릿";

// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person; //true
let result2 = "cat" in person; //false

```
> * 상수 객체 <br>
또 다른 객체 생성하여 할당 불가 <br>
저장된 객체 값의 프로퍼티 추가, 수정, 삭제 가능 <br>


```javascript
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
```

