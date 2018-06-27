import React, { Component } from 'react';

class Note extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myArray: ['PHP', 'Android', 'Java']
		}
		this.removeNote = this.removeNote.bind(this);
	}	
	removeNote() {
		var { index, handleRemove } = this.props;
		this.props.handleRemove(index);
	}
	render() {
		return (
		  <div className="note">
		     <p>{this.props.children}</p>
		     <button onClick={this.removeNote}>Delete</button>
		  </div>
		);
	}
}

export default Note;