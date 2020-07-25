export const setVariable = (state, value) => {
  state.variable = value
}

/// essas duas mutações serão removidas quando o back end for implementado, visto que irá buscar do banco

export const pushFuncionario = (state, dados) => {
  state.funcionarios.push(dados)
}

export const updateFuncionario = (state, dados) => {
  state.funcionarios.map((ln, i) => {
    if (ln.ID_FUNCIONARIO == dados.ID_FUNCIONARIO) state.funcionarios[i] = dados
  })
}

export const deleteFuncionario = (state, idFuncionario) => {
  state.funcionarios.map((ln, i) => {
    if (ln.ID_FUNCIONARIO == idFuncionario) state.funcionarios.splice(i, 1)
  })
}
