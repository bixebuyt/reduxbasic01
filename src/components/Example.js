import { combineReducers, createStore } from 'redux';


// var reducer = (state = defaultState, action) => {
// 	switch(action.type) {
// 		case 'TOGGLE_IS_ADDING' :
// 			return {
// 				...state,
// 				isAdding: !state.isAdding
// 			}
// 		case 'ADD_ITEM' :
// 			return {
// 				...state,
// 				mang: [...state.mang,action.item]
// 			}
// 		case 'REMOVE_ITEM' :
// 			return {
// 				...state,
// 				mang: state.mang.filter((e, i) => i != action.index)
// 			}
// 		default:
// 			return state;		
// 	}	
// }

var mangReducer = (state = ['PHP','Android', 'Java'], action) => {
	switch (action.type) {
		case 'ADD_ITEM' :
			return {					
				mang: [...state, action.item]
			}
		case 'REMOVE_ITEM' : 
			return {
				...state,
				mang: [state.mang.filter((e,i) => i !== action.index )]
			}
		default:
			return state;				
	}
}

var isAddingReducer = (state = false, action) => {
	switch(action.type) {
		case 'TOGGLE_IS_ADDING' :
			return {
				isAdding: !state
			}		
		default:
			return state;		
	}
}

var reducer = combineReducers({
	mang: mangReducer,
	isAdding: isAddingReducer
})

const store = createStore(reducer);

store.subscribe(() => {
	var str = store.getState();
	document.getElementById('p-detail').innerHTML = JSON.stringify(str);
})

store.dispatch({type: 'TOGGLE_IS_ADDING'});

store.dispatch({
	type: 'ADD_ITEM',
	item: 'Android2'
});
store.dispatch({
	type: 'REMOVE_ITEM',
	index: 1
});

console.log(store.getState());