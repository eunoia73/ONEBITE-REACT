// 함수 선언

// function greating() {
//   console.log("안녕하세요!");
// }

// console.log("호출 전");
// greating();
// console.log("호출 후");

let area1 = getArea(10, 20); //인수포함
console.log(area1);

let area2 = getArea(30, 20);
console.log(area2);

// 호이스팅 -> '끌어올리다'라는 뜻
//자바스크립트는 함수의 호출 아래에 선언문을 두어도 실행가능하다.
function getArea(width, height) {
  function another() {
    //중첩함수
    console.log("another");
  }
  another();

  let area = width * height;

  return area; //반환값
  console.log("hello"); //출력 안 됨
}
