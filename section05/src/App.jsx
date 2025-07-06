import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from "./components/Button";

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <>
      {/* props 전달 */}
      <Button {...buttonProps} /> {/* 스프레드 연산자 사용 */}
      <Button text={"카페"} />
      <Button text={"블로그"} > 
        <div>자식 요소</div>
        <Header />
      </Button>
    </>
  );
}

export default App;
