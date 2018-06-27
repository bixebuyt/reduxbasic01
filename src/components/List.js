import React, { Component } from 'react';
import Note from './Note';
import NoteForm from './NoteForm';

class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myArray: ['PHP', 'Android', 'Java'],
			isAddding: false
		}
		this.remove = this.remove.bind(this);
	}
	remove(index) {
		this.state.myArray.splice(index, 1);
		this.setState(this.state);
	}
	addNote = (data) => {
		this.state.myArray.push(data);
		this.setState({
			myArray: this.state.myArray
		});
		this.handleAdd();
	}
	handleAdd = () => {
		this.setState({
			isAddding: !this.state.isAddding
		})
	}
	render() {
		var { isAddding } = this.state;
		var noteform = '';
		if ( isAddding === true ) {
			noteform = <NoteForm handleAdd={this.addNote}></NoteForm>
		}else {
			noteform = <button onClick={this.handleAdd}>+</button>;
		}
		var { myArray }= this.state;
		var item = myArray.map((value, index) => {
			return (
				<Note handleRemove={this.remove} index={index} key={index}>{value}</Note>
			)
		})
		return (
			<div className="list">
				{noteform}
				{item}
			</div>
		);
	}
}

export default List;