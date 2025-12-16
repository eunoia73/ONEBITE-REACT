import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
function App() {
  const nav = useNavigate(); //navigating 함수 저장

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        {/*  Routes 태그 바깥에 있는 요소는 모든 페이지에 공통으로 적용된다. */}
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>

        {/* <a href="/">Home</a>  -> a 태그 이용하면 클라이언트사이드렌더링(부분 수정)이 일어나지 않음 */}
      </div>

      <button onClick={onClickButton}>New 페이지로 이동</button>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
