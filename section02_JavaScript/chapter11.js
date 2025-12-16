console.log(1);

setTimeout(() => {
  console.log(2);
}, 3000); // 원하는 코드를 특정 시간이 지난 후 비동기적 실행
// 3000 지난 후 callback함수(첫 번째 인자) 실행

console.log(3);
