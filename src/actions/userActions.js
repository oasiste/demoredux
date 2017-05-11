export function fetchUser(){
  return {
    type: 'FETCH_USERS_FULFILED',
    payload : {nome: 'Kaissi',
    idade: 40}
  }
}

export function setNome(nome){
  return{
    type: 'SET_NOME',
    payload: nome
  }
}

export function setIdade(idade){
  return{
    type: 'SET_IDADE',
    payload: idade
  }
}
