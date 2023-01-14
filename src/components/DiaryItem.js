import { useState, useRef } from "react";

export default function DiaryItem({
  removeDiary,
  id,
  title,
  content,
  emotion,
  createdTime,
}) {
  const currentContent = useRef();
  const [isUpdate, setIsUpdate] = useState(false);
  const [newContent, setNewContent] = useState(content);
  function handleRemove() {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      removeDiary(id);
    }
  }
  function handleUpdate() {
    if (newContent.replace(/ /gi, "") === "") {
      currentContent.current.focus();
      return;
    } else {
      setNewContent(newContent);
      setIsUpdate((current) => !current);
    }
  }
  return (
    <div className="DiaryItem">
      <div className="info">
        <p className="title_info">제목 : {title}</p>
        <p className="emotion_info">기분 : {emotion}</p>
        <p className="id_info">번호 : {id}</p>
        <p className="date_info">
          작성시간 : {new Date(createdTime).toLocaleString()}
        </p>
      </div>
      <hr />
      <div className="content_info">
        {isUpdate ? (
          <textarea
            ref={currentContent}
            onChange={(e) => {
              setNewContent(e.target.value);
            }}
            value={newContent}
          />
        ) : (
          newContent
        )}
      </div>
      {isUpdate ? (
        <>
          <button
            onClick={() => {
              setNewContent(content);
              setIsUpdate((current) => !current);
            }}
            type="button"
            class="btn btn-danger"
          >
            취소
          </button>
          <button onClick={handleUpdate} type="button" class="btn btn-info">
            완료
          </button>
        </>
      ) : (
        <>
          <button onClick={handleRemove} type="button" class="btn btn-danger">
            삭제하기
          </button>
          <button
            onClick={() => {
              setIsUpdate((current) => !current);
            }}
            type="button"
            class="btn btn-info"
          >
            수정하기
          </button>
        </>
      )}
    </div>
  );
}
