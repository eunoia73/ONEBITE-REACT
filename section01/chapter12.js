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

//값으로써 함수 생성하는 방식을 호이스팅 불가
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
