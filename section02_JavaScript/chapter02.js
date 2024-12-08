//단락평가
//논리연산식에서 첫 번째 피연산자의 값만으로 해당 연산의 결과를 확정할 수 있다면
//두 번째 피연산자의 값에는 접근하지 않는 특징
//F && ? = F
//T || ? = T

function returnFalse() {
  console.log("False 함수");
  return undefined;
}

function returnTrue() {
  console.log("True 함수");
  return 10;
}

//결과 자체가 Truthy하거나 Falsy한 값 자체가 됨
console.log(returnFalse() && returnTrue()); //False 함수
//undefined

console.log(returnTrue() || returnFalse()); //True 함수
//10

// 단락 평가 활용 사례
function printName(person) {
  // if(!person){
  //     console.log("person에 값이 없음");
  //     return;
  // }

  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName(); //"person의 값이 없음" (undefined || "person의 값이 없음")
printName({ name: "이름" }); //이름 ("name" || "person의 값이 없음" -> 첫 번째 Truthy한 값 반환)

// T || T -> 첫 번째 Truthy한 값 반환
// T && T -> 두 번째 Truthy한 값 반환
