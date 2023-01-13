import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";
import { useState, useRef } from "react";

export default function App() {
  const [data, setData] = useState([]);
  const dataId = useRef(0);
  function createDiary(title, content, emotion) {
    const newData = {
      id: ++dataId.current,
      title,
      content,
      emotion,
      createdTime: new Date().getTime(),
    };
    setData([newData, ...data]);
  }
  function removeDiary(targetId) {
    const newData = data.filter((current) => current.id !== targetId);
    setData(newData);
    alert("일기가 삭제되었습니다.");
  }
  function updateDiary(targetId, newContent) {
    setData(
      data.map((current) =>
        current.id === targetId ? { ...current, content: newContent } : current
      )
    );
  }
  return (
    <div className="App">
      <DiaryEditor createDiary={createDiary} />
      <DiaryList
        diaryData={data}
        removeDiary={removeDiary}
        updateDiary={updateDiary}
      />
    </div>
  );
}
