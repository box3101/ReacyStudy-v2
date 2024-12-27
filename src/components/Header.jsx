/*
  export , import 란?
  
  export : 컴포넌트를 다른 파일에서 사용할 수 있도록 내보내기
  import : 다른 파일에서 내보낸 컴포넌트를 가져오기

  쓰는이유 : 
  1. 다른 파일이나 모듈 간에 코드를 공유하고 재사용하기 위해 사용
  2. 큰 코드를 여러 작은 파일로 나누어 관리하기 위해 사용
*/

// 컴포넌트는 대문자로 시작
function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>My Blog</h1>
        </div>
        <nav className="nav-menu">
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

// 다른 파일에서 Header 컴포넌트를 import 할 수 있도록 내보내기
export default Header;
