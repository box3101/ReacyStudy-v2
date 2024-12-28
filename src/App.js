/*
 [ 상태관리 ]
 React에서 state란?
 뜻 : 컴포넌트 내부에서 관리되는 변할 수 있는 데이터
 리액트에서는 useState 라는 리액트 훅으로 만듬

 useState 란?
 1. React의 가장 기본적인 Hook(훅 = React에서 제공하는 특별한 함수)
 2. 변할 수 있는 데이터를 저장
 3. [state, state변경함수] = useState(state에 담길 초기 값)

 리액트에서 일반 변수에 담으면 안되는 이유
 -> 재렌더링 (화면 갱신) 때문
*/

import { useState } from "react"
function App() {

  // 1. 일반 변수
  let number = 0;

  // 2. state 변수
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>일반변수: {number}</h1>  {/* 값이 변해도 화면 갱신 안됨 */}
      <button onClick={() => number = number + 1}>증가</button>

      <h1>state변수: {count}</h1>   {/* 값이 변하면 화면 자동 갱신 */}
      <button onClick={() => setCount(count + 1)}>증가</button>
    </div>
  )
}

export default App
