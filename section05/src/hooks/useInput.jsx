import { useState } from "react";

function useInput() {
  // 커스텀 훅
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
