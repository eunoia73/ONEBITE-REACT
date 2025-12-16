// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
  return {
    name: "이정환",
    id: "winterlood",
  };
  // 이 객체를 그대로 반환하는게 아니라, 이 객체를 결과값으로 받는 새로운 Promise를 반환
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         name: "이정환",
  //         id: "winterlood",
  //       });
  //     }, 1500);
  //   });
  // 이 식과 같음
}

console.log(getData());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
  const data = await getData();
  // .then 메서드를 사용하지 않아도 됨 -> 이유 : getData() 함수가 끝나기를 기다림
  console.log(data);
}

printData();
