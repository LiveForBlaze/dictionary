import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './Home';
import Quiz from './Quiz';


class App extends React.Component {
  constructor(){
    super();
    this.state = { words: [
      {
        id: 0,
        word: "w0",
        trans: "t0"
      },
      {
        id: 1,
        word: "w1",
        trans: "t1"
      },
      {
        id: 2,
        word: "w2",
        trans: "t2"
      },
      {
        id: 3,
        word: "w3",
        trans: "t3"
      },
    ]}
    this.addWord = this.addWord.bind(this);
    this.editWord = this.editWord.bind(this);
    this.deleteWord = this.deleteWord.bind(this);
  }


  addWord(word, translation) {
      let arr = this.state.words;
      arr.push({
        id: arr.length,
        word: word,
        trans: translation
      });
      this.setState({
        words: arr
      });
      return this.state
  }

  editWord(w, t, i) {
    var arr = this.state.words;
    arr[i] = {
      id: i,
      word: w,
      trans: t
    };
    this.setState({
      words: arr
    });
      return this.state
  }

  deleteWord(i){
    var arr = this.state.words;
    arr.splice(i, 1);
    this.setState({
      words: arr
    });
  }


  render() {
    return (

        <BrowserRouter>
          <div>
            {console.log(this.state.words)}
            <Route exact path="/" render={()=><Home words={this.state.words} deleteWord={this.deleteWord} addWord={this.addWord} editWord={this.editWord} />} />
            <Route path="/quiz" render={()=><Quiz words={this.state.words}  />} />
          </div>
        </BrowserRouter>

    )
  }
}

export default App;
