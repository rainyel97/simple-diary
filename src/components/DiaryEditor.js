import { useState, useRef } from "react";

export default function DiaryEditor({ createDiary }) {
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
      alert("제목을 적어주세요.");
      titleInput.current.focus();
      return;
    }
    if (state.content.length === 0 || state.content.replace(/ /gi, "") === "") {
      alert("내용을 적어주세요.");
      contentInput.current.focus();
      return;
    }
    if (state.emotion === 0) {
      alert("기분을 알려주세요.");
      emotionInput.current.focus();
      return;
    }
    createDiary(state.title, state.content, state.emotion);
    setState({
      title: "",
      content: "",
      emotion: 0,
    });
  }

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div class="form-group">
        <input
          ref={titleInput}
          value={state.title}
          onChange={handleChangeState}
          name="title"
          placeholder="제목을 적어주세요."
          type="text"
          id="inputDefault"
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
        <span>오늘의 기분 :</span>
        <select
          ref={emotionInput}
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={0}>오늘의 기분은 어땠나요?</option>
          <option value={"최악이에요"}>최악이에요</option>
          <option value={"별로에요"}>별로에요</option>
          <option value={"보통이에요"}>보통이에요</option>
          <option value={"좋아요"}>좋아요</option>
          <option value={"최고에요"}>최고에요</option>
        </select>
      </div>
      <div>
        <button
          onClick={() => {
            if (window.confirm("일기를 정말 저장하시겠습니까?")) handleSubmit();
          }}
          type="button"
          className="btn btn-primary btn-lg"
        >
          저장하기
        </button>
      </div>
    </div>
  );
}
