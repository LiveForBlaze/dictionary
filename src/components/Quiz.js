import React from 'react';
import {Link} from 'react-router-dom';


class Quiz extends React.Component {
  constructor(props){
    super(props);
    var rand;
    this.state = {
      stats: {
        wrong: 0,
        total: 0
      },
      rnd: 0,
      started: false
    }
    this.quizStarted = this.quizStarted.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  rndWord(){
    let arr = this.props.words;
    this.rand = Math.floor(Math.random() * arr.length);
    return(
      <div>
        {arr[this.rand].word}
      </div>
    );
  }

  rndTrans(){
    var arr = this.props.words;
    var i;
      var rd = [];
      rd[0] = this.rand;
      console.log(this.rand);
      for (i=1; i<6; i++)
      {
        rd[i] = Math.floor(Math.random() * arr.length)
        console.log("rd:" + rd[i]);
      }
      console.log(rd);
      return (
      rd.map((item, j) => {
        return (
        <div key={j}>{arr[item].trans}</div>
      )
      })
    );
  }

  quizDidntStart() {
    return(
      <div>
        <button onClick={() => {
          this.setState({ started: true})
            }}>Start Quiz</button>
      </div>
    )
  }
  quizStarted() {
    return(
      <div>
        <div>
          {this.rndWord()}
        </div>
        <div>
          {this.rndTrans()}
        </div>
        <button onClick={() => {
          this.setState({
            started: false
          })
        }}>Stop Quiz</button>
      </div>
    )
  }

  toggle(){
    if (!this.state.started) {
     return this.quizDidntStart();
    } else {
     return this.quizStarted();
  }
  }

  render() {
    return(
      <div>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/quiz'>Quiz</Link>
        </div>
        {this.toggle()}
      </div>
    )
  }
}

export default Quiz;
