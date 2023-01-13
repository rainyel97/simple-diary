import DiaryItem from "./DiaryItem";

export default function DiaryList({ diaryData, removeDiary }) {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryData.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryData.map((data) => (
          <DiaryItem
            key={`diaryitem_${data.id}`}
            {...data}
            removeDiary={removeDiary}
          />
        ))}
      </div>
    </div>
  );
}
