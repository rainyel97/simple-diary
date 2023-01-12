import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";
import { DiaryData } from "./asset/DiaryData";

export default function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryData={DiaryData} />
    </div>
  );
}
