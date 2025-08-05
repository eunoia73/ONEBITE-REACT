// ES6 모듈 방식으로 가져오기
import mul, { add, sub } from "./math.js";

import randomColor from "randomcolor";

const color = randomColor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(1, 2));
