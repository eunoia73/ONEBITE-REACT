import { useParams } from "react-router-dom";

const Diary = () => {
  // 현재 브라우저에 명시한 url 파라미터를 가져오는 기능을 함
  const params = useParams();
  console.log(params);

  return <div>{params.id}번 일기입니다!</div>;
};

export default Diary;
