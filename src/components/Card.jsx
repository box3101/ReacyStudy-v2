import { useState } from "react";

function Card() {
  const postData = [
    { id: 1, title: "첫 번째 포스트", content: "내용 1", state: false },
    { id: 2, title: "두 번째 포스트", content: "내용 2", state: false },
    { id: 3, title: "두 번째 포스트", content: "내용 3", state: false },
  ];
  const [posts, setPosts] = useState(postData);

  // 수정 클릭 시 게시물 제목 수정할 수 있는 함수
  const handleEdit = (id) => {
    posts.forEach((item)=>{
      item.state = false    
    })
    const updatePosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, state: true }
      }else{
        return post
      }
    })
    setPosts(updatePosts)
  }

  return (
    <>
      {posts.map((post) => (
        <article key={post.id} className="blog-post">
          <div className="left">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
          {
            post.state ?
              <div className="input-wrp">
                <input type="text" />
                <button>저장</button>
              </div>
              :
              <div className="right">
                <button onClick={() => handleEdit(post.id)}>수정</button>
              </div>
          }
        </article>
      ))}
    </>
  );
}

/*
 1. 수정 클릭 시 게시물 제목 수정할 수 있는 input 창 띄우기
 1-1. 수정 클릭 시 클릭한 컨텐츠만 수정될 수 있게끔 변경
 2. 수정 완료 시 게시물 제목 수정
*/

// 다른 파일에서 Card 컴포넌트를 import 할 수 있도록 내보내기
export default Card;
