import React from 'react';
import AddComment from './AddComment/AddComment'
import CommentList from './CommentList/CommentList'
import data from './Data'

import './App.css';

function App() {
  return (
    <div>
      <header className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>请发表对React的评论</h1>
            </div>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <AddComment/>
          </div>
          <div className="col-md-8">
            <CommentList comments={data.Comments.get()}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
