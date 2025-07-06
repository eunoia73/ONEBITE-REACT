const Button = ({ children, text, color = "black" }) => {
  const onClickButton = (e) => {
    console.log(e); // 이벤트 객체
    console.log(text);
  };

  // 구조분해할당으로 기본값 설정
  return (
    <button
      onClick={onClickButton} // 함수의 이름만 전달하면 됨. 이렇게 onClickButton() 함수의 실행 결과 말고
      //   onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
