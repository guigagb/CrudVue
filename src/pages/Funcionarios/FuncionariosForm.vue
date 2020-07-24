<template>
  <div class="FuncionariosForm">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator
    >
      <q-tab name="tabDadosPessoais" label="Dados Pessoais" />
      <!-- <q-tab name="tabDadosContratuais" label="Dados Contratuais" /> -->
    </q-tabs>
    <q-separator />
    <div style="height: 100%;" class="q-pa-sm">
      <FuncionariosDadosPessoais ref="FuncionariosDadosPessoais" @salvar="salvar" />
    </div>
    <q-card-actions>
      <q-space />
      <q-btn :icon="mdiCancel" size="md" tabindex="-1" color="negative" class="q-pl-sm q-pr-sm">
        <span class="q-pl-sm">CANCELAR</span>
      </q-btn>
      <q-btn :icon="mdiCheckCircle" size="md" color="positive" class="q-pl-sm q-pr-sm" @click="salvar">
        <span class="q-pl-sm">SALVAR</span>
      </q-btn>
    </q-card-actions>
  </div>
</template>

<script>
import FuncionariosDadosPessoais from './FuncionariosDadosPessoais'
import { mdiCheckCircle, mdiCancel } from '@quasar/extras/mdi-v5'
import { mapActions } from 'vuex'

export default {
  components: { FuncionariosDadosPessoais },
  data() {
    return {
      tab: 'tabDadosPessoais',
      mdiCancel,
      mdiCheckCircle,
    }
  },
  methods: {
    ...mapActions('funcionarios', ['actInsertFuncionario']),
    salvar() {
      let FuncionariosDadosPessoais = this.$refs.FuncionariosDadosPessoais
      FuncionariosDadosPessoais.$refs.formDadosPessoais.validate().then((validou) => {
        if (!validou) return false

        if (FuncionariosDadosPessoais.acao == 'incluir')
          this.actInsertFuncionario(FuncionariosDadosPessoais.funcionario)
            .then((r) => {
              if (!r) return PromiseRejectionEvent
              this.$router.push('/funcionarios')
            })
            .catch((r) => {
              this.$store.state.alert('Ocorreu um erro ao incluir funcionário: ' + r, 'negative')
            })
        else if (FuncionariosDadosPessoais.acao == 'incluir')
          this.actUpdateFuncionario(FuncionariosDadosPessoais.funcionario)
      })
    },
  },
}
</script>

<style>
.FuncionariosForm {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
