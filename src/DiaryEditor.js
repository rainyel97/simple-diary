import { useState, useRef } from "react";

//함수형 컴포넌트 사용
//짧은 함수의 경우 에로우 펑션 적용

export default function DiaryEditor() {
  const titleInput = useRef();
  const contentInput = useRef();
  const emotionInput = useRef();

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
  //공백 입력 방지 replace(/ /gi, "") === "" g: 전체 모든 문자열을 변경 global, i: 영문 대소문자까지 구분. /<- ->/ 이 사이에 들어간 문자를 " "(공백)으로 변경
  function handleSubmit() {
    if (state.title.length === 0 || state.title.replace(/ /gi, "") === "") {
      titleInput.current.focus();
      return;
    }
    if (state.content.length === 0 || state.content.replace(/ /gi, "") === "") {
      contentInput.current.focus();
      return;
    }
    if (state.emotion === "0") {
      emotionInput.current.focus();
      return;
    }

    console.log(state);
    alert("저장 성공!");
  }

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input
          ref={titleInput}
          value={state.title}
          onChange={handleChangeState}
          name="title"
          placeholder="제목을 적어주세요."
          type="text"
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
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
          ref={emotionInput}
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={0}>오늘의 기분은 어땠나요?</option>
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
