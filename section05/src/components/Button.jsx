const Button = ({ children, text, color = "black" }) => { //구조분해할당으로 기본값 설정
  return (
    <button style={{ color: color }}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;
