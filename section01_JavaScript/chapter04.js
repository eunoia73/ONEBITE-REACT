// 1. 변수
let age = 27; //변수 선언, 초기화
//console.log(age);

age = 30;
//console.log(age);

// 2. 상수
const birth = "1997.01.07";
// 상수는 선언 이후에 값을 다시 넣을 수 없기 때문에
// 선언과 동시에 초기화 필요함

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;

// 3-3. 예약어를 사용할 수 없다.

//4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
