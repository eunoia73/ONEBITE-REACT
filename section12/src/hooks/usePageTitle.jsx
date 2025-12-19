import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    // $title -> 관례상 변수 안에 돔 요소가 저장될거라는 뜻으로 $ 붙임
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
