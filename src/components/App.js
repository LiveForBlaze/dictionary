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
        word: "Apple",
        trans: "Яблоко"
      },
      {
        id: 1,
        word: "Banana",
        trans: "Банан"
      },
      {
        id: 2,
        word: "Lime",
        trans: "Лайм"
      },
      {
        id: 3,
        word: "Watermellon",
        trans: "Арбуз"
      },
      {
        id: 4,
        word: "Potato",
        trans: "Картошка"
      },
      {
        id: 5,
        word: "Cucumber",
        trans: "Огурец"
      },
      {
        id: 6,
        word: "Car",
        trans: "Машина"
      },
      {
        id: 7,
        word: "Door",
        trans: "Дверь"
      },
      {
        id: 8,
        word: "Shop",
        trans: "Магазин"
      },
      {
        id: 9,
        word: "Sky",
        trans: "Небо"
      },
    ]}
    this.addWord = this.addWord.bind(this);
    this.editWord = this.editWord.bind(this);
    this.deleteWord = this.deleteWord.bind(this);
    this.indexOf = this.indexOf.bind(this);
  }

  indexOf(arr, i) {
    for(var idx = 0, l = arr.length;arr[idx] && arr[idx].id !== i;idx++);
    return idx === l ? -1 : idx;
  }

  addWord(word, translation) {
      let arr = this.state.words.slice();
      arr.push({
        id: this.state.words[this.state.words.length -1].id +1,
        word: word,
        trans: translation
      });
      this.setState({
        words: arr
      });

      return this.state
  }

  editWord(w, t, i) {
    var arr = this.state.words.slice();

    arr[this.indexOf(arr, i)] = {
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

    let arr = this.state.words.slice();

    arr.splice(this.indexOf(arr, i), 1);
    this.setState({
      words: arr
    });
  }


  render() {
    return (

        <BrowserRouter>
          <div>
            <Route exact path="/" render={()=><Home words={this.state.words} deleteWord={this.deleteWord} addWord={this.addWord} editWord={this.editWord} />} />
            <Route path="/quiz" render={()=><Quiz words={this.state.words}  />} />
          </div>
        </BrowserRouter>

    )
  }
}

export default App;
