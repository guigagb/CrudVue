<template>
  <q-dialog v-model="showModal" persistent>
    <q-card>
      <q-card-section class="row items-center">
        <q-icon :name="icon" style="font-size: 4rem;" :color="color" text-color="white" />
        <div class="q-pl-md">
          <label style="font-weight: 500;">Atenção</label><br />
          <span>{{ msg }}</span>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-actions align="center">
        <q-btn v-close-popup flat label="Não" color="" @click="$emit('nao')" />
        <q-space />
        <q-btn v-close-popup flat label="Sim" color="" @click="$emit('sim')" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { mdiAlert } from '@quasar/extras/mdi-v5'
export default {
  props: {
    msg: { default: 'parametro msg não passado' },
    icon: { default: mdiAlert },
    color: { default: 'primary' },
    open: {},
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    show() {
      this.showModal = true
    },
  },
}
</script>

<style></style>
