import { useState } from "react";

// 컴포넌트는 대문자로 시작해야 합니다
function App() {
  // useState 훅을 사용하여 상태 관리
  // posts는 상태 변수, setPosts는 상태를 변경하는 함수
  const [posts] = useState([
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
  ]);

  // JSX를 사용한 UI 렌더링
  return (
    // className으로 CSS 클래스 적용
    <div className="blog-container">
      {/* 헤더 컴포넌트 */}
      <header className="blog-header">
        <h1>My Blog</h1>
        {/* 네비게이션 메뉴 */}
        <nav>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#posts">Posts</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* 메인 컨텐츠 영역 */}
      <main className="blog-content">
        {/* map을 사용한 배열 렌더링 */}
        {/* 각 포스트마다 고유한 key 값 필요 */}
        {posts.map((post) => (
          <article key={post.id} className="blog-post">
            <h2>{post.title}</h2>
            {/* 중괄호를 사용하여 JavaScript 표현식 삽입 */}
            <div className="post-meta">
              <span>작성일: {post.date}</span>
              <span>작성자: {post.author}</span>
            </div>
            <p>{post.content}</p>
          </article>
        ))}
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
