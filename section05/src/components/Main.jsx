import "./Main.css";

// JSX 주의 사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// -> 한 줄의 코드가 특정한 값으로 표현될 수 있는 식(if, for문 불가)
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.(boolean, undefined, null은 불가)
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.

const Main = () => {
  const user = {
    name: "yellow",
    isLogin: true,
  };

  if (user.isLogin) {
    return (
      <div
        className="logout" //jsx에서는 자바 스크립트, html 함께 사용해서 class대신 className 사용
        // style={{
        //   backgroundColor: "yellow", // 카멜케이스로 작성해야 함
        //   borderBottom: "5px solid blue",
        // }}
      >
        로그아웃
      </div>
    );
  } else {
    return <div>로그인</div>;
  }

  //   return;
  //   <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
};

export default Main;
