import React from 'react';
import { connect } from 'react-redux';
import addWord from '../actions';

class AddWord extends React.Component {
  render(){
    return (
      <div>
        <input ref = {(input) => {this.wordInput = input}} />
        <button onClick={ () => dispatch(addWord(this.wordInput.value))}>Add word</button>
      </div>
    )
  }
}

export default connect()(AddWord);
