export default function reducer(state={
  user:{
    id: 0 ,
    nome: 'otavio',
    idade: 30
  },
  fetching: false,
  fetched: false,
  error: null
}, action) {
    switch (action.type) {
      case 'FETCH_USERS_PENDING':{
        return {...state, fetching:true}
      }
      case 'FETCH_USERS_FULFILED':{
        return {...state, fetching:false, fetched: true, user: action.payload}
      }
      case 'FETCH_USERS_REJECTED':{
        return {...state, fetching:false, error: action.payload}
      }
      case 'SET_NOME':{
        return {...state, user: {...state.user, nome: action.payload}}
      }
      case 'SET_NOME':{
        return {...state, user: {...state.user, idade: action.payload}}
      }
    }
    return state;
}
