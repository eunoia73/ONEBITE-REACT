// ES6 모듈 방식으로 가져오기
import mul, { add, sub } from "./math.js";
// default로 내보낸 함수는 이름 변경 가능

// CommonJS 방식으로 모듈을 가져오기
// const { add, sub } = require("./math");

console.log(add(1, 2));
console.log(sub(1, 2));
console.log(mul(1, 2));
