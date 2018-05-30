import React from 'react';
import Word from './Word';
import {Link} from 'react-router-dom';
import '../css/style.css';

class Home extends React.Component {
  constructor(props){
  super(props);

  this.editWord = this.editWord.bind(this);
  this.deleteWord = this.deleteWord.bind(this);
  }
  editWord(w, t, i){
    this.props.editWord(w, t, i);
  }
  deleteWord(i){
    this.props.deleteWord(i);
  }

  render() {
    return (
        <div className="container">
          <div>
            <div className="button linkactive">HOME</div>
            <Link to='/quiz' className="button links">QUIZ</Link>
          </div>
          {this.props.words.map((item, i) => {
              return ( <Word key={i} index={i} editWord={this.editWord} deleteWord={this.deleteWord}>{item}</Word>)}
            )}
          <div className="box">
            <input type = "text" ref = "addWord" / >
            <input type = "text" ref = "addTrans" / >
            <div className="button small resize" onClick = {() => {
              this.props.addWord(this.refs.addWord.value, this.refs.addTrans.value);
              this.refs.addWord.value = '';
              this.refs.addTrans.value = '';
            }} >
              Add new word
            < /div>
          </div>
        </div>
    )
  }
}

export default Home;
