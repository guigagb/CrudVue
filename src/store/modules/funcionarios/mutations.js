export const setVariable = (state, value) => {
  state.variable = value
}

export const pushFuncionario = (state, dados) => {
  state.funcionarios.push(dados)
}
