import React from 'react';
import {Link} from 'react-router-dom';
import '../css/style.css';

const QUIZ_QUESTIONS = 20;
const ANSWER_VARIANTS = 6;

class Quiz extends React.Component {
  constructor(props){
    super(props);
    var rand;


    this.state = {
      stats: {
        wrong: 0,
        total: 0
      },
      started: false
    }

    this.quizStarted = this.quizStarted.bind(this);
    this.quizEnded = this.quizEnded.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  rndWord(){
    var arr = this.props.words.slice();
    console.log("Изначальный массив: ");
    console.log(arr);
    this.rand = Math.floor(Math.random() * arr.length);
    this.randId = arr[this.rand].id;
    console.log("Рандомное число: " + this.rand + "Рандомный id: " + this.randId);
    return(
      <div className="button y">
        {arr[this.rand].word}
      </div>
    );
  }

  rndTrans(){
    var rd = [];
      let i, ar = this.props.words.slice(), test = [];
      let aar = ar.slice();

       aar.sort(function() {
        return .5 - Math.random();
      });

      for (i=0; i<ANSWER_VARIANTS && i<ar.length; i++){
        rd[i] = aar[i];
        test[i] = aar[i].id;
      }

      let b = Math.floor(Math.random() * rd.length);
      let a = this.rand;


    var result = test.some(function(num) { return num === a;});
     if (!result) {
       rd[b] = ar[this.rand];
     }

    return (
    rd.map((item, j) => {
      return (<div key={j} className="button w" onClick={() => {
        if (item.id == this.rand) {
          this.setState({
            stats: {
              wrong: this.state.stats.wrong,
              total: ++this.state.stats.total,
            }
          });

        } else {
          this.setState({
            stats: {
              wrong: ++this.state.stats.wrong,
              total: ++this.state.stats.total,
            }
          });
        }

      }
    }>{item.trans}</div>)
    })
    )
  }

  quizDidntStart() {
    return(
      <div>
        <div onClick={() => {
          this.setState({ started: true})
        }} className="button start">Start Quiz</div>
      </div>
    )
  }
  quizStarted() {
    return(
      <div>
        <div className="btn-container">
          <div className="btn-container-cell">
            {this.rndWord()}
          </div>
          <div className="btn-container-cell w-fixed">
            {this.rndTrans()}
          </div>
        </div>
        <div className="button start" onClick={() => {
          this.setState({
            started: false
          })
        }}>Stop Quiz</div>
      </div>
    )
  }
  quizEnded() {
    return(
      <div className="btn-container w-fix">
        <div className="button s">
          <div>Total answers: {this.state.stats.total}</div>
          <div>Wrong answers: {this.state.stats.wrong}</div>
        </div>
        <div className="button reset" onClick={() => {
          this.setState({
            stats: {
              wrong: 0,
              total: 0,
            }
          });
        }}>Reset</div>
      </div>
    )
  }
  toggle(){
    if (!this.state.started) {
     return this.quizDidntStart();
    } else {
      if (this.state.stats.total < QUIZ_QUESTIONS ) {
        return this.quizStarted();
      } else {
        return this.quizEnded();
      }

  }
  }

  render() {
    return(
      <div className="container">
        <div>
          <Link to='/' className="button links">HOME</Link>
          <div className="button linkactive">QUIZ</div>
        </div>
        {this.toggle()}
      </div>
    )
  }
}

export default Quiz;
