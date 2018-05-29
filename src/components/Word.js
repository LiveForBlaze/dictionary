import React, {Component} from 'react';
import '../css/style.css';

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
        <div className="text">{this.props.children.word} - {this.props.children.trans}</div>
        <div className="button small" onClick={this.edit}>Edit</div>
        <div className="button small" onClick={this.remove}>Delete</div>
      </div>
    );
  };
  rendEdit() {
    return (
      <div className="box">
        <input type="text" ref="newWord" defaultValue={this.props.children.word} />
        <input type="text" ref="newTrans" defaultValue={this.props.children.trans}/>
        <div>
          <div className="button small" onClick={this.save}>Save</div>
          <div className="button small" onClick={this.cancel}>Cancel</div>
        </div>
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
