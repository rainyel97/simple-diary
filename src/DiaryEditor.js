import { useState } from "react";

//함수형 컴포넌트 사용
//짧은 함수의 경우 에로우 펑션 적용

export default function DiaryEditor() {
  const [state, setState] = useState({
    title: "",
    content: "",
    emotion: 0,
  });

  function handleChangeState(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value, //state객체의 상태를 효율적으로 관리하기 위해 타겟의 이름을 동일하게 함.
    });
  }

  function handleSubmit() {
    console.log(state);
    alert("저장 성공!");
  }

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          value={state.title}
          onChange={handleChangeState}
          name="title"
          placeholder="제목을 적어주세요."
          type="text"
        />
      </div>
      <div>
        <textarea
          value={state.content}
          onChange={handleChangeState}
          name="content"
          placeholder="오늘 하루는 어땠나요?"
          type="text"
        />
      </div>
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={0}>오늘의 기분은 어땟나요?</option>
          <option value={1}>1점</option>
          <option value={2}>2점</option>
          <option value={3}>3점</option>
          <option value={4}>4점</option>
          <option value={5}>5점</option>
        </select>
      </div>
      <div>
        <button onClick={handleSubmit}>저장하기</button>
      </div>
    </div>
  );
}
