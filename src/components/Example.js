import { createStore } from 'redux';

var defaultState = {
	mang: ['PHP', 'iOS', 'AngularJs'],
	isAdding: false
};

var reducer = (state = defaultState, action) => {
	switch(action.type) {
		case 'TOGGLE_IS_ADDING' :
			return {
				...state,
				isAdding: !state.isAdding
			}
		case 'ADD_ITEM' :
			return {
				...state,
				mang: [...state.mang,action.item]
			}
		case 'REMOVE_ITEM' :
			return {
				...state,
				mang: state.mang.filter((e, i) => i != action.index)
			}
		default:
			return state;		
	}	
}

const store = createStore(reducer);
store.subscribe(() => {
	var str = store.getState();
	document.getElementById('p-detail').innerHTML = JSON.stringify(str);
})

store.dispatch({type: 'TOGGLE_IS_ADDING'});
store.dispatch({
	type: 'ADD_ITEM',
	item: 'Android'
});
store.dispatch({
	type: 'REMOVE_ITEM',
	index: 2
})
console.log(store.getState());