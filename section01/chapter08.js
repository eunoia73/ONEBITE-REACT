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

let userName = "이정환";
let userNickName = "winterlood";
//userName이 있으면 userName, 없으면 userNickName으로 저장됨
let displayName = userName ?? userNickName; // "이정환"

// 2. typeof 연산자
// -> 값의 타입을 문자열롤 변환하는 기능을 하는 연산자
let var7 = 1;
var7 = "hello";

let t1 = typeof var7;
//console.log(t1);

// 3. 삼항 연산자
// -> 항을 3개 사용하는 연산자
// -> 조건식을 이용해서 참, 거짓일 때의 값을 다르게 변환
let var8 = 10;

//요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);
