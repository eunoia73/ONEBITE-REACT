// Promise -> 비동기 작업을 효율적으로 도와주는 객체. 비동기 작업을 감싸는 객체

function add10(num) {
  const promise = new Promise((resolve, reject) => {
    // 비동기 작업을 실행하는 함수
    // executor

    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다.");
      }

      // console.log("안녕");
      // // resolve("안녕"); // 성공상태(fulfilled)로 변경
      // reject("왜 실패했는지 이유..");
    }, 2000);
  });
  return promise;
}

// // then 메서드 -> 그 후에
// promise //promise 체이닝
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const p = add10(0);
p.then((result) => {
  console.log(result);
  return add10(result);
})
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
