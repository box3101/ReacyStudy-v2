/*
  props란?
  - 컴포넌트에 전달하는 데이터
  - 부모가 자식에게 데이터를 전달할 때 사용
  - 자식은 받은 props를 수정할 수 없음 (읽기 전용)

  쉬운 예시:
  
  1. 부모 컴포넌트:
     <Profile name="홍길동" age={20} />
  
  2. 자식 컴포넌트:
     function Profile(props) {
       return (
         <div>
           이름: {props.name}
           나이: {props.age}
         </div>
       )
     }
*/

// props를 사용한 간단한 예시
function Header(props) {
  // 1. props로 데이터를 전달 받음
  // 2. props.title이 없으면 "My Blog" 사용
  const blogTitle = props.title || "My Blog";

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          {/* props로 받은 제목 사용 */}
          <h1>{props.title}</h1>
        </div>
      </div>
    </header>
  );
}

// 다른 파일에서 Header 컴포넌트를 import 할 수 있도록 내보내기
export default Header;
