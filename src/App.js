import { useState } from 'react';
import './App.css';

function App() {
  let [postTitle, postTtitleUpdate] = useState(['남자코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [num, numPlus] = useState(0)
  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
        <button type="button" onClick={()=>{
          let sortTitle = [...postTitle];
          postTtitleUpdate(sortTitle.sort())
        }}>리스트 정렬</button>
      </div>
      <div className="list">
        <h4>{ postTitle[0] }</h4>
        <div>
          <span onClick={()=>{numPlus(num+1)}}>좋아요</span>{num}
        </div>
        <p>2024-01-08 발행</p>
        <button type="button" onClick={()=>{
          let newTitle = [...postTitle];
          newTitle[0] = '여자코트 추천';
          postTtitleUpdate(newTitle)
        }}>제목 변경</button>
      </div>
      <div className="list">
        <h4>{ postTitle[1] }</h4>
        <div>
          <span onClick={()=>{numPlus(num+1)}}>좋아요</span>{num}
        </div>
        <p>2024-01-08 발행</p>
      </div>
      <div className="list">
        <h4>{ postTitle[2] }</h4>
        <div>
          <span onClick={()=>{numPlus(num+1)}}>좋아요</span>{num}
        </div>
        <p>2024-01-08 발행</p>
      </div>
      <PreView></PreView>
    </div>
  );
}

function PreView() {
  return (
    <div className="pre-view">
      <div>title</div>
      <div>content</div>
      <div>date</div>
    </div>
  );
}

export default App;
