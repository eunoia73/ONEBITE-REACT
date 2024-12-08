// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러 개의 값을 개별로 흩뿌려주는 역할

// 배열에 사용
let arr1 = [1, 2, 3];
//let arr2 = [4, arr[0], arr[1], arr[2], 5, 6];  //배열의 변경, 삭제 가능성으로 위험!
let arr2 = [4, ...arr1, 5, 6];
console.log(arr2); //[4, 1, 2, 3, 5, 6]

// 객체에 사용
let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj2);

//함수에 사용
function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수
function funcB(one, ...rest) {
  //rest 매개변수에 함수를 호출하면서 전달한 모든 인수들이 배열형태로 저장됨
  //rets 매개변수 뒤에 추가적으로 변수를 선언할 수 없다.
  console.log(one); //1
  console.log(rest); //[2, 3]
}

funcB(...arr1);


