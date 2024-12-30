import { useState } from "react";

function Card() {
  const postData = [
    { id: 1, title: "첫 번째 포스트", content: "내용 1" },
    { id: 2, title: "두 번째 포스트", content: "내용 2" },
    { id: 3, title: "두 번째 포스트", content: "내용 3" },
  ];
  const [posts, setPosts] = useState(postData);

  // 3. 매개변수가 있는 이벤트 함수 정의
  const handleEdit = (id) => {
    // posts 배열에서 해당 id의 게시물을 찾아서 수정정
    const updateEdit = posts.map((post) => {
      if (post.id === id) {
        return {...post , title : "title 변경"}
      }else{
        return post
      }
    });
    setPosts(updateEdit);
  }

  return (
    <>
      {posts.map((post) => (
        <article key={post.id} className="blog-post">
          <div className="left">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
          <button onClick={() => {
            handleEdit(post.id)
          }}>수정</button>
        </article>
      ))}
    </>
  )
}

// 다른 파일에서 Card 컴포넌트를 import 할 수 있도록 내보내기
export default Card;