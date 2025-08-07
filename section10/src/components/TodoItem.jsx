import "./TodoItem.css";
import { memo } from "react";

const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input
        onChange={onChangeCheckbox}
        readOnly
        checked={isDone}
        type="checkbox"
      />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// // 고차 컴포넌트 (Higher-Order Component, HOC)
// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라, props가 바뀌었는지 안 바뀌었는지 판단
//   // T -> props 바뀌지 않음 -> 리렌더링 X
//   // F -> props 바뀜 -> 리렌더링 O
//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;

//   return true;
// });
// // memo메서드는 기본적으로 얕은 비교(===)를 함
// // 객체 타입을 props로 받고 있는 컴포넌트는 memo메서드만 적용하면 최적화가 이뤄지지 않음
// // 1. 함수들 자체를 메모이제이션해서 리렌더링이 되어도 다시 생성되지 않게 방지 -> useCallback
// // 2. memo메서드의 두 번째 인자로 콜백함수를 전달하여 최적화하기

export default memo(TodoItem);
