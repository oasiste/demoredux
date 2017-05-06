// import {createStore} from 'redux';
//
// const reducer = function(state, action) {
//   if(action.type == 'INC'){
//     return state + action.payload;
//   }
//   if(action.type == 'DEC'){
//     return state - action.payload;
//   }
//   return state;
// }
//
// const store = createStore(reducer,0);
//
// store.subscribe(() =>{
//     console.log("estado alterado!", store.getState());
//   }
// );
//
// store.dispatch({type: 'INC', payload: 1});
// store.dispatch({type: 'INC', payload: 2});
// store.dispatch({type: 'INC', payload: 3});
// store.dispatch({type: 'INC', payload: 4});
// store.dispatch({type: 'INC', payload: 5});
// store.dispatch({type: 'INC', payload: 6});
// store.dispatch({type: 'INC', payload: 7});
// store.dispatch({type: 'INC', payload: 8});
// store.dispatch({type: 'INC', payload: 9});
// store.dispatch({type: 'INC', payload: 10});
// store.dispatch({type: 'DEC', payload: 1});
// store.dispatch({type: 'DEC', payload: 2});
// store.dispatch({type: 'DEC', payload: 3});
// store.dispatch({type: 'DEC', payload: 4});
// store.dispatch({type: 'DEC', payload: 5});
// store.dispatch({type: 'DEC', payload: 6});
// store.dispatch({type: 'DEC', payload: 7});
// store.dispatch({type: 'DEC', payload: 8});
// store.dispatch({type: 'DEC', payload: 9});
// store.dispatch({type: 'DEC', payload: 10});


import {combineReducers, createStore} from 'redux';

const userReducer = (state = {nome: 'Rafael', idade: 35}, action) => {
  switch (action.type) {
    case 'SET_NOME':{
      state = {...state, nome:action.payload}
      break;
    }
    case 'SET_IDADE':{
      state = {...state, idade:action.payload}
      break;
    }
  }
  return state;
}

const msgReducer = (state = [], action) => {

  return state;
}

const reducers = combineReducers({
    user: userReducer,
    msg: msgReducer
});

const store = createStore(reducers);

store.subscribe(() =>{
  console.log('estado alterado', store.getState());
});

store.dispatch({type : '', payload : 'kaissi'});
store.dispatch({type : 'SET_NOME', payload : 'marcos'});
store.dispatch({type : 'SET_IDADE', payload : 40});
