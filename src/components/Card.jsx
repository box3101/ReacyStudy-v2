import { useState } from "react";

function Card() {
  const postData = [
    { id: 1, title: "첫 번째 포스트", content: "내용 1", state: false },
    { id: 2, title: "두 번째 포스트", content: "내용 2", state: false },
    { id: 3, title: "세 번째 포스트", content: "내용 3", state: false },
  ];
  const [posts, setPosts] = useState(postData);

  // input을 저장할 변수
  const [inputValue, setInputValue] = useState('');

  // input 값을 얻는 함수
  const handleInput = (e) => {
    setInputValue(e.target.value);
  }

  // 취소 버튼을 눌렀을때 다시 수정 버튼 보이게 하는 함수
  const handleCancle = () => {
    const updatePostStates = posts.map((item) => {
      return { ...item, state: false }
    })
    setPosts(updatePostStates);
  }

  // content 값을 input 값으로 바꾸는 함수
  const handleChangeCnt = (id) => {
    const updatePostCnt = posts.map((item) => {
      if (id === item.id) {
        return { ...item, content: inputValue, state: false }
      } else {
        return item
      }
    })
    setPosts(updatePostCnt)
  }

  // 수정 클릭 시 게시물 제목 수정할 수 있는 함수
  const handleEdit = (id) => {
    posts.forEach((item) => {
      item.state = false
    })
    const updatePosts = posts.map((item) => {
      if (item.id === id) {
        return { ...item, state: true }
      } else {
        return item
      }
    })
    setPosts(updatePosts)
  }

  // 삭제 클릭 시 내가 누른 게시물 삭제
  const handleDelete = (id) => {
    const updatePosts = posts.filter((item) => {
      return id !== item.id
    })
    setPosts(updatePosts)
  }

  // 게시물 추가 클릭 시 내가원하는 게시물 추가
  const handleAddPost = () => {
    const newPost = {
      id : 4,
      title: "네 번째 포스트", 
      content: "내용 4", 
      state: false
    }
    const updatePosts = posts
    setPosts([...posts , newPost])
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
                <input placeholder="값을 입려해주세요" onChange={handleInput} type="text" />
                <div className="btn-wrp">
                  <button onClick={() => { handleChangeCnt(post.id) }}>저장</button>
                  <button onClick={() => { handleCancle() }} className="cancle">취소</button>
                </div>
              </div>
              :
              <div className="right">
                <button onClick={() => handleEdit(post.id)}>수정</button>
                <button onClick={() => handleDelete(post.id)} className="cancle">삭제</button>
              </div>
          }
        </article>
      ))}
      <div className="bottom tac">
        <button onClick={() => handleAddPost()}>게시물 추가</button>
      </div>
    </>
  );
}

/*
 1. 인풋의 값을 입력하면 그 값을 저장
 2. 저장된 인풋의 값을 이제 content로 집어 넣기.
*/

// 다른 파일에서 Card 컴포넌트를 import 할 수 있도록 내보내기
export default Card;
