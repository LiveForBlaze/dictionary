import React, {Component} from 'react';

class Word extends Component {
  constructor(props){
  super(props);
  this.state = {
    edit: false,
  };
  this.edit = this.edit.bind(this);
  this.cancel = this.cancel.bind(this);
  this.save = this.save.bind(this);
  this.remove = this.remove.bind(this);
  }

  edit() {
    this.setState({edit: true});
  }

  cancel() {
    this.setState({edit: false});
  }

  save() {
    this.setState({edit: false});
    this.props.editWord(this.refs.newWord.value, this.refs.newTrans.value, this.props.children.id);
  }

  remove(){
    this.props.deleteWord(this.props.children.id);
  }

  rendNorm() {
    return (
      <div className="box">
        <div>{this.props.children.word} - {this.props.children.trans}</div>
        <button onClick={this.edit}>Edit</button>
        <button onClick={this.remove}>Delete</button>
      </div>
    );
  };
  rendEdit() {
    return (
      <div>
        <input type="text" ref="newWord" defaultValue={this.props.children.word} />
        <input type="text" ref="newTrans" defaultValue={this.props.children.trans}/>
        <button onClick={this.save}>Save</button>
        <button onClick={this.cancel}>Cancel</button>
      </div>
    );
  };
  render() {
     if (this.state.edit) {
       return this.rendEdit ();
     } else {
       return this.rendNorm ();
     }
   }
}

export default Word;
