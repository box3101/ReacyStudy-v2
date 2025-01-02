import { useState } from "react";

function Card() {
  const postData = [
    { id: 1, title: "첫 번째 포스트", content: "내용 1", state: false },
    { id: 2, title: "두 번째 포스트", content: "내용 2", state: false },
    { id: 3, title: "세 번째 포스트", content: "내용 3", state: false },
  ];
  const [posts, setPosts] = useState(postData);

  // 게시물 추가 제목, 내용을 저장할 변수
  const [titleValue, setTitleValue] = useState("");
  const [cntValue, setCntValue] = useState("");

  const handleTitle = (e) => {
    setTitleValue(e.target.value);
  };

  const handleCnt = (e) => {
    setCntValue(e.target.value);
  };

  // 게시물 수정 시 제목 , 내용을 저장할 변수
  const [inputValue, setInputValue] = useState("");
  const [inputCnt, setInputCnt] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  const handleInputCnt = (e) => {
    setInputCnt(e.target.value);
  };

  // 취소 버튼을 눌렀을때 다시 수정 버튼 보이게 하는 함수
  const handleCancel = () => {
    const updatePostStates = posts.map((item) => {
      return { ...item, state: false };
    });
    setPosts(updatePostStates);
  };

  // 수정 클릭 시 클릭한 것만 수정 폼으로 변경하는 함수
  const handleEdit = (id) => {
    posts.forEach((item) => {
      item.state = false;
    });
    const updatePosts = posts.map((item) => {
      if (item.id === id) {
        return { ...item, state: true };
      } else {
        return item;
      }
    });
    setPosts(updatePosts);
  };

  // content 값을 input 값으로 바꾸는 함수
  const handleChangeCnt = (id) => {
    const updatePostCnt = posts.map((item) => {
      if (id === item.id) {
        return { ...item, title: inputValue, content: inputCnt, state: false };
      } else {
        return item;
      }
    });
    setPosts(updatePostCnt);
  };

  // 삭제 클릭 시 내가 누른 게시물 삭제
  const handleDelete = (id) => {
    const updatePosts = posts.filter((item) => {
      return id !== item.id;
    });
    setPosts(updatePosts);
  };

  // 게시물 추가 클릭 시 내가원하는 게시물 추가
  const handleAddPost = () => {
    const newPost = {
      id: Date.now(),
      title: titleValue,
      content: cntValue,
      state: false,
    };
    setPosts([...posts, newPost]);
  };

  return (
    <>
      {posts.map((post) => (
        <article key={post.id} className="blog-post">
          <div className="left">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
          {post.state ? (
            <div className="input-wrp">
              <input
                placeholder="값을 입려해주세요"
                onChange={handleInput}
                type="text"
              />
              <textarea
                onChange={handleInputCnt}
                placeholder="내용을 입력해주세요"
              ></textarea>
              <div className="btn-wrp">
                <button
                  onClick={() => {
                    handleChangeCnt(post.id);
                  }}
                >
                  저장
                </button>
                <button
                  onClick={() => {
                    handleCancel();
                  }}
                  className="cancel"
                >
                  취소
                </button>
              </div>
            </div>
          ) : (
            <div className="right">
              <button onClick={() => handleEdit(post.id)}>수정</button>
              <button onClick={() => handleDelete(post.id)} className="cancel">
                삭제
              </button>
            </div>
          )}
        </article>
      ))}
      <div className="bottom tac">
        <input
          type="text"
          placeholder="타이틀을 입력하세요"
          onChange={handleTitle}
        />
        <textarea
          name=""
          id=""
          placeholder="내용을 입력하세요."
          onChange={handleCnt}
        ></textarea>
        <button onClick={() => handleAddPost()}>게시물 추가</button>
      </div>
    </>
  );
}

// 다른 파일에서 Card 컴포넌트를 import 할 수 있도록 내보내기
export default Card;
