import { useState } from "react";

// import 다른파일에서 쓰인 컴포넌트 가져오기
import Header from "./components/Header.jsx";
import Card from "./components/Card.jsx";
import Footer from "./components/Footer.jsx";

// 컴포넌트는 대문자로
function App() {

  // JSX를 사용한 UI 렌더링
  return (
    // className으로 CSS 클래스 적용
    <div className="blog-container">
      {/* 문자열 외 다른 데이터 전달 할때는 {} 사용 */}
      <Header
        title="제목을 넘기자~~ 부모에서 자식 컴포넌트로" // 문자열 prop 전달
      />
      {/* 메인 컨텐츠 영역 */}
      <main className="blog-content">
        <section>
          <Card />
        </section>
      </main>
      {/* 푸터 컴포넌트 */}
      <Footer />
    </div>
  );
}

// 다른 파일에서 import 할 수 있도록 내보내기
export default App;
