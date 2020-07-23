<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
import store from './store'

export default {
  name: 'App',
  created() {
    let usuarioLogado = localStorage.getItem('usuarioLogado')
    store.commit('setUsuario', usuarioLogado)
  },
}
</script>
