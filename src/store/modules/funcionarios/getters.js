export const getFuncionarios = (state) => {
  return state.funcionarios
}

export const getCargosToSelect = (state) => {
  let cargos = []
  state.cargos.map((ln) => {
    cargos.push({
      label: ln.NOME,
      value: ln.ID_CARGO,
    })
  })
  return cargos
}
