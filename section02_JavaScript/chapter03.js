// 1. 배열의 구조 분해 할당
let arr = [1, 2, 3];

let [one, two, three, four = 4] = arr; //four에 값 지정하지 않으면 undefined
console.log(one, two, three, four); //1 2 3 4

// 2. 객체의 구조 분해 할당
let person = {
  name: "이름",
  age: 27,
  hobby: "테니스",
};

let { name, age: myAge, hobby, extra = "hello" } = person; //age:myAge -> 할당받는 변수 이름 변경하기
// extra 라는 변수를 선언했다고 해서, person 객체에 extra 라는 프로퍼티가 추가되는 것은 아니다!!
console.log(name, myAge, hobby, extra); //이름 27 테니스 hello



// 3. 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법 : {}중괄호 이용해야 함
const func = ({ name, age, hobby, extra }) => {
  console.log(name, age, hobby, extra); //이름 27 테니스 undefined
};

func(person); //person객체를 넘겼기 때문에 구조분해할당 가능


