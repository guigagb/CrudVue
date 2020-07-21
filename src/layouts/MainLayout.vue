<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          CRUD-Vue
        </q-toolbar-title>

        <div v-if="$store.state.usuarioLogado">Seja Bem-Vindo {{$store.state.usuarioLogado.nome}}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label header class="text-grey-8">
          Menu Principal
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import store from '../store';
import { mdiAccountHardHat } from "@quasar/extras/mdi-v5";

const linksData = [
  {
    title: "Funcionários",
    icon: mdiAccountHardHat,
    link: "https://quasar.dev"
  }
];

export default {
  name: "MainLayout",
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    };
  },
  computed:{
  },
  beforeRouteEnter(to, from, next) {
    next(vm=>{
		if(vm.$store.state.usuarioLogado == undefined){
			console.log(vm.$router);
			vm.$router.push('/entrar')
			return false;
		}
    })
  }
};
</script>
