import "./Editor.css";
import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const [content, setContent] = useState("");
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      // Enter 키가 눌렸을 때
      onSubmit();
    }
  };

  const onSubmit = () => {
    if (content === "") {
      // 입력값 비어있을 때 focus 설정
      contentRef.current.focus();
      return;
    }
    onCreate(content);
    setContent(""); // 입력 후 내용 초기화
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
};

export default Editor;
