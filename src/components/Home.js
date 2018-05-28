import React from 'react';
import Word from './Word';
import {Link} from 'react-router-dom';

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
    console.log(this.props.words)
    return (
        <div>
          <div>
            <Link to='/'>Home</Link>
            <Link to='/quiz'>Quiz</Link>
          </div>
          {this.props.words.map((item, i) => {
              return ( <Word key={i} index={i} editWord={this.editWord} deleteWord={this.deleteWord}>{item}</Word>)}
            )}
          <div>
            <input type = "text" ref = "addWord" / >
            <input type = "text" ref = "addTrans" / >
            <button onClick = {() => {
              this.props.addWord(this.refs.addWord.value, this.refs.addTrans.value);
              this.refs.addWord.value = '';
              this.refs.addTrans.value = '';
            }} >
              Add new word
            < /button>
          </div>
        </div>
    )
  }
}

export default Home;
