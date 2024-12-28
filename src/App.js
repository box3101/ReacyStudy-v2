import { useState } from "react";

// import 다른파일에서 쓰인 컴포넌트 가져오기
import Header from "./components/Header.jsx";

// 컴포넌트는 대문자로
function App() {
  const posts = [
    {
      id: 1,
      title: "첫 번째 블로그 포스트",
      date: "2024-02-14",
      author: "Admin",
      content: "환영합니다! 이것은 제 첫 번째 블로그 포스트입니다.",
    },
    {
      id: 2,
      title: "두 번째 블로그 포스트",
      date: "2024-02-15",
      author: "Admin",
      content: "블로그의 두 번째 포스트입니다.",
    },
  ];

  // 조건부 랜더링
  const isLoggedIN = true;

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

        {/* 조건부 랜더링 */}
        {
          isLoggedIN ? (
            posts.map((post) => (
              <article key={post.id} className="blog-post">
                <h2>{post.title}</h2>
                {/* 중괄호를 사용하여 JavaScript 표현식 삽입 */}
                <div className="post-meta">
                  <span>작성일: {post.date}</span>
                  <span>작성자: {post.author}</span>
                </div>
                <p>{post.content}</p>
              </article>
            ))) :
            <p>로그인이 필요합니다.</p>
        }

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
