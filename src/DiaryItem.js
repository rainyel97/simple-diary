export default function DiaryItem({ title, content, emotion, created_date }) {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span className="author_info">
          제목 : {title}
          <br />
          감정점수 : {emotion}
        </span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
    </div>
  );
}
