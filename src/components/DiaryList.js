import { useState } from "react";
import DiaryItem from "./DiaryItem";

export default function DiaryList({ diaryData, removeDiary }) {
  const [modal, setModal] = useState(false);
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryData.length}개의 일기가 있습니다.</h4>
      <div className="modal-btn-container">
        <button
          className="btn btn-success"
          onClick={() => {
            setModal((current) => !current);
          }}
        >
          {modal ? "목록 닫기" : "목록 열기"}
        </button>
      </div>
      {modal ? (
        <div>
          {diaryData.map((data) => (
            <DiaryItem
              key={`diaryitem_${data.id}`}
              {...data}
              removeDiary={removeDiary}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
