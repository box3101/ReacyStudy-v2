import { useState } from "react";

// import 다른파일에서 쓰인 컴포넌트 가져오기
import Header from "./components/Header.jsx";

// 컴포넌트는 대문자로
function App() {

  const post = [
    { id: 1, title: "첫 번째 포스트", content: "내용 1" },
    { id: 2, title: "두 번째 포스트", content: "내용 2" }
  ];

  // useState로 변환해보자.
  /*
    const posts = useState(post)
    const postsCnt = posts[0];
    const setPostsCnt = posts[1];
    console.log(posts);
  */
  
  // es6  배열 구조 분해(Destructuring) 사용
  const [posts,setPosts] = useState(post);

  // JSX를 사용한 UI 렌더링
  return (
    // className으로 CSS 클래스 적용
    <div className="blog-container">
      {/* 문자열 외 다른 데이터 전달 할때는 {} 사용 */}
      <Header
        title="제목을 넘기자~~ 자식 컴포넌트로" // 문자열 prop 전달
      />
      {/* 메인 컨텐츠 영역 */}
      <main className="blog-content">
        {
          posts.map((post) => (
            <article key={post.id} className="blog-post">
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </article>
          ))
        }

        <button onClick={()=>{
          let postsCopy = [...posts];
          postsCopy[0].title="참조형 타입 제목을 변경해보자"
          setPosts(postsCopy)
        }}>포스트 변경하기</button>
      </main>
      {/* 푸터 컴포넌트 */}
      <footer className="blog-footer">
        <p>&copy; 2024 My Blog. All rights reserved.</p>
      </footer>
    </div>
  );
}

// 다른 파일에서 import 할 수 있도록 내보내기
export default App;
