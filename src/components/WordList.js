import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    words
  };
};

class WordList extends React.Component {
  render(){
    return (
      <div>
      {words.map(word =>
          <div key={word.id} {...word} onClick={() => onTodoClick(word.id)}>
          </div>
      )}
      </div>
    )
  }
}

export default connect()(WordList);
