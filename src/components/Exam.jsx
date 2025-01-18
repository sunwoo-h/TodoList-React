import { useReducer } from "react";

// reducer : 변환기
// -> 상태를 실제로 변화시키는 변환기 역할

function reducer(state, action) {
  // 1. if문 사용
  /*
  if (action.type === "INCREASE") {
    // state += action.data; 일케 쓰면 안됨 리턴 해줘야 state에 저장됨 ㅋㅋ
    return state + action.data; // 일케 리턴해줘야 state에 저장댐
  } else if ((action.type = "DECREASE")) {
    return state - action.data;
  }
  */

  // 2. swtitch문 사용
  // type이 많을 때 더 효과적(가독성 향상))
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
    default:
      return state;
  }
}

const Exam = () => {
  // dispatch : 발송하다, 요청하다
  // -> 상태 변화가 있어야 한다는 사실을 알리는, 발송하는 함수
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // 인수 : 상태가 어떻게 변화되길 원하는지
    // -> Action 객체
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };

  return (
    <div>
      <div>{state}</div>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
