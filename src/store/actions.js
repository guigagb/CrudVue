export const actLogar = ({ rootState, commit }, { usuario, senha }) => {

  return new Promise((res, rej) => {
    if (usuario == undefined) return rej("Usuário não informado!");

    if (senha == undefined) return rej("Senha não informada!");

    rootState.usuarios.map(ln => {
      if ((ln.usuario = usuario && ln.senha == senha)) {
        commit("setUsuario", ln);
        return res(true);
      } else return rej("Usuário ou senha não conferem!");
    });
  });
  
};
