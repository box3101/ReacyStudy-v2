import { useState } from "react";

function Card() {
  const postData = [
    { id: 1, title: "첫 번째 포스트", content: "내용 1" },
    { id: 2, title: "두 번째 포스트", content: "내용 2" },
    { id: 3, title: "두 번째 포스트", content: "내용 3" },
  ];
  const [posts, setPosts] = useState(postData);

  // 3. 매개변수가 있는 이벤트 함수 정의
  const handleClick = (id) => {
    console.log(`${id}버튼이 클릭되었습니다.`);
  }

  return (
    <>
      {posts.map((post) => (
        <article key={post.id} className="blog-post">
          <div className="left">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
          <button>수정</button>
        </article>
      ))}

      {/* 매개 변수가 있는 함수는 () => {} 화살표 함수를 사용 */}
      <button onClick={()=>{handleClick(1)}}>클릭하세요</button>
    </>
  )
}

// 다른 파일에서 Card 컴포넌트를 import 할 수 있도록 내보내기
export default Card;