import { useState } from "react";
// 간단한 회원가입 폼
// state를 사용하여 폼 데이터 관리하는 법
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  const [input, setInput] = useState({ //객체 형태의 하나의 스테이트로 관리
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  console.log(input);

  const onChangeName = (e) => {
    setInput({
      ...input, // 기존의 input 값을 유지(전개 연산자, 스프레드 연산자)
      name: e.target.value, // 변경하고자 하는 값만
    });
  };

  const onChangeBirth = (e) => {
    setInput({
      ...input,
      birth: e.target.value,
    });
  };

  const onChangeCountry = (e) => {
    setInput({
      ...input,
      country: e.target.value,
    });
  };

  const onChangeBio = (e) => {
    setInput({
      ...input,
      bio: e.target.value,
    });
  };

  return (
    <div>
      <div>
        <input
          value={input.name}
          onChange={onChangeName}
          placeholder={"이름"}
        />
      </div>

      <div>
        <input value={input.birth} onChange={onChangeBirth} type="date" />
      </div>

      <div>
        <select value={input.country} onChange={onChangeCountry}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea value={input.bio} onChange={onChangeBio} />
      </div>
    </div>
  );
};

export default Register;
