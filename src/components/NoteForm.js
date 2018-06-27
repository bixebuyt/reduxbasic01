import React, { Component } from 'react';

class NoteForm extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			item: ''
		})
	}	
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.handleAdd(this.refs.txt.value);
		this.refs.txt.value = ''
	}
	render() {
		return (
		  <div className="noteform">
		  	 <br /><br />
		  	 <form onSubmit={this.handleSubmit}>
		  	 	<input onChange={this.handleChange} type="text" placeholder="Enter your text" ref="txt" />
		  	 	<br /><br />
		  	 	<button type="submit">Add</button>
		  	 </form>
		  </div>
		);
	}
}

export default NoteForm;