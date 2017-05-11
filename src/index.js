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


// import {combineReducers, createStore} from 'redux';
//
// const userReducer = (state = {nome: 'Rafael', idade: 35}, action) => {
//   switch (action.type) {
//     case 'SET_NOME':{
//       state = {...state, nome:action.payload}
//       break;
//     }
//     case 'SET_IDADE':{
//       state = {...state, idade:action.payload}
//       break;
//     }
//   }
//   return state;
// }
//
// const msgReducer = (state = [], action) => {
//
//   return state;
// }
//
// const reducers = combineReducers({
//     user: userReducer,
//     msg: msgReducer
// });
//
// const store = createStore(reducers);
//
// store.subscribe(() =>{
//   console.log('estado alterado', store.getState());
// });
//
// store.dispatch({type : '', payload : 'kaissi'});
// store.dispatch({type : 'SET_NOME', payload : 'marcos'});
// store.dispatch({type : 'SET_IDADE', payload : 40});



// import {applyMiddleware, createStore} from 'redux';
//
// const reducer = function(state = 0, action) {
//   if(action.type == 'INC'){
//     return state + action.payload;
//   }else
//   if(action.type == 'DEC'){
//     return state - action.payload;
//   }else
//   if(action.type == 'ERR'){
//     throw new Error('DEU PIPOCO');
//   }
//   return state;
// }
//
// const logger = (store) => (next) => (action) => {
//   try {
//     next(action);
//   } catch (e) {
//     console.log('Deu pau!!',e);
//   } finally {
//
//   }
// }
//
// const error = (store) => (next) => (action) => {
//   console.log('action fired!',action);
//   next(action);
// }
//
// const middleware = applyMiddleware(logger, error);
//
// const store = createStore(reducer,1,middleware);
//
// store.subscribe(() =>{
//     console.log("estado alterado!", store.getState());
//   }
// );
//
// store.dispatch({type: 'INC', payload: 1});
// store.dispatch({type: 'INC', payload: 2});
// store.dispatch({type: 'INC', payload: 3});
// store.dispatch({type: 'ERR', payload: 3});

// import {applyMiddleware, createStore} from 'redux';
// import { createLogger} from 'redux-logger';
// import thunk from 'redux-thunk';
// import axios from 'axios';
// import promise from 'redux-promise-middleware';
//
// const initialState = {
//   fetching: false,
//   fetched : false,
//   users: [],
//   error: null
// }
//
// const reducer = (state=initialState, action) => {
//   switch (action.type) {
//     case 'FETCH_USERS_PENDING':{
//       return {...state, fetching: true}
//     }
//     case 'FETCH_USERS_FULFILED':{
//         return {...state, fetching: false, fetched: true, users: action.payload}
//     }
//     case 'FETCH_USERS_REJECTED':{
//         return {...state, fetching: false, error: action.payload}
//     }
//     }
// }
//
// const middleware = applyMiddleware(promise(),thunk, createLogger());
//
// const store = createStore(reducer,middleware);

// store.dispatch(
//   (dispatch) => {
//     dispatch({type: 'FETCH_START'});
//     axios.get('http://rest.learncode.academy/api/wstern/users')
//     .then((response) => {
//         dispatch({type: 'FETCH_FULFILED', payload: response.data})
//       }).catch((err) => {
//           dispatch({type:'FETCH_FAILED', payload:err })
//         })
//     });

// store.dispatch({
//   type: 'FETCH_USERS',
//   payload: axios.get('http://rest.learncode.academy/api/wstern/users')
// });


import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './store'
import App from './app/App'

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App);

if(module.hot){
  module.hot.accept('./app/App', () => {
      render(App);
  });
}
