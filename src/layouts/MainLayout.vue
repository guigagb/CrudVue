<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="mini = !mini" />

        <q-toolbar-title>
          CRUD-Vue
        </q-toolbar-title>

        <div v-if="$store.state.usuarioLogado">
          <span>Seja Bem-Vindo {{ $store.state.usuarioLogado.nome }}</span>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer :mini="mini" :width="200" show-if-above bordered content-class="bg-grey-1">
      <q-list>
        <EssentialLink v-for="link in essentialLinks" :key="link.title" v-bind="link" />
        <q-item clickable tag="a" @click="logout">
          <q-item-section avatar>
            <q-icon :name="mdiLogout" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Sair</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <div class="page-header"></div>
    <q-page-container>
      <content-layout />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import ContentLayout from './ContentLayout'
import { mdiAccountHardHat, mdiLogout } from '@quasar/extras/mdi-v5'
import { mapMutations } from 'vuex'

const menu = [
  {
    title: 'Funcionários',
    icon: mdiAccountHardHat,
    link: '/funcionarios',
  },
]

export default {
  name: 'MainLayout',
  components: {
    EssentialLink,
    ContentLayout,
  },
  data() {
    return {
      mini: false,
      essentialLinks: menu,
      mdiLogout,
    }
  },
  methods: {
    ...mapMutations(['setUsuario']),
    logout() {
      localStorage.setItem('usuarioLogado', undefined)
      this.setUsuario(undefined)
      this.$router.push('/entrar')
    },
  },
  computed: {},
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.$store.state.usuarioLogado == undefined) {
        vm.$router.push('entrar')
        return false
      }
    })
  },
}
</script>

<style lang="stylus">
.q-page-container{
    background: #f5f5f5
}
.page-header-left .page-name{
    font-size: 22px
}
.card-main{
    // height: calc(100vh - 130px);
    // overflow-y: auto
}
</style>
