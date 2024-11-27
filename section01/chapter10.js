for (let idx = 1; idx < 10; idx++) {
  if (idx % 2 === 0) {
    continue;  //아래 코드들 건너뛰고 바로 다음 반복 회차로 이동
  }
  console.log(idx);

  if (idx >= 5) {
    break;
  }
}
