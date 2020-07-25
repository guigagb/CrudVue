// utilizado para consumir e enviar dados para o backend
export const callFunction = ({ commit }) => {
  return new Promise((res) => {
    // busca os valores e seta através da mutation
    let value = 'teste'

    commit('setVariable', value)
    res(true)
  })
}

export const actFuncionarioDuplicity = ({ state }, idFuncionario) => {
  return new Promise((res) => {
    let duplicity = false
    state.funcionarios.map((ln) => {
      if (ln.ID_FUNCIONARIO == idFuncionario) duplicity = true
    })
    res(duplicity)
    console.log(duplicity)
  })
}

export const actInsertFuncionario = ({ commit }, dados) => {
  return new Promise((res) => {
    // insere funcionario no backend ...

    commit('pushFuncionario', dados)
    res(true)
  })
}

export const actUpdateFuncionario = ({ commit }, dados) => {
  return new Promise((res) => {
    // altera funcionario no backend ...

    commit('updateFuncionario', dados)
    res(true)
  })
}

export const actDeleteFuncionario = ({ commit }, idFuncionario) => {
  return new Promise((res) => {
    // deleta funcionario no backend ...
    console.log(idFuncionario)
    commit('deleteFuncionario', idFuncionario)
    res(true)
  })
}

export const actGetFuncionario = ({ getters }, idFuncionario) => {
  return new Promise((res) => {
    //busca do backend

    let func = getters.getFuncionarioByID(idFuncionario)
    console.log(func)
    res(func)
  })
}
