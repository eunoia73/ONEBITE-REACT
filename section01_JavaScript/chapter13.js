// 1. 콜백함수
function main(value) {
  console.log(value); //함수 자체 출력됨
                      //function sub() {
                      //console.log("i am sub");
                      //}
  
  //value에 sub 담겨있음 -> 호출가능
  value();  //sub 함수 호출됨 //i am sub
  console.log("end");
}


//자스에서는 함수도 문자열이나 숫자같은 값으로 취급됨 -> 인수로 전달가능
//어떤 함수를 다른 함수의 인수로 전달해서 나중에 호출하도록 만든 것 -> 콜백함수
//콜백함수는 메인 함수가 원하는 시점에 호출가능함

//따로 선언하지 않고 익명함수로 사용 가능
main(() => {
    console.log("i am sub");
  });



// 2. 콜백함수의 활용
// function repeat(count){
//     for(let idx = 1; idx <= count; idx++) {
//         console.log(idx);
//     }
// }

// function repeatDouble(count){
//     for(let idx = 1; idx <= count; idx++) {
//         console.log(idx * 2);
//     }
// }

// repeat(5);
// repeatDouble(5);


//콜백함수 이용해서 개선한 코드

function repeat(count, callback){
    for(let idx = 1; idx <= count; idx++) {
        callback(idx);
    }
}

repeat(5, (idx) => {
    console.log(idx);
});

repeat(5, (idx) => {
    console.log(idx * 2);
});

repeat(5, (idx) => {
    console.log(idx * 3);
});

