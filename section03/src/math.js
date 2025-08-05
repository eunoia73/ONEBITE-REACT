// math 모듈

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

export default function multiply(a, b) {
  return a * b;
}

// CommonJS 방식으로 모듈을 내보내기
// module.exports = {
//   add,
//   sub,
// };

// ES6 모듈 방식으로 내보내기
export { add, sub };
