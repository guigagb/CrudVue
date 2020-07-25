<template>
  <div class="FuncionarioList">
    <grid
      :rowKey="'ID_FUNCIONARIO'"
      :data="getFuncionarios"
      :columns="columns"
      @insert="incluir"
      @update="alterar"
      @delete="alertDeletar"
    />
    <Confirma ref="confirma" color="negative" :msg="'Deseja realmente excluir esse funcionário?'" @sim="deletar" />
  </div>
</template>

<script>
import { mdiPlusCircle } from '@quasar/extras/mdi-v5'
import { mapGetters, mapActions } from 'vuex'
import Grid from '../../layouts/Grid'
import Confirma from '../../components/Confirma'

export default {
  components: { Grid, Confirma },
  data() {
    return {
      loading: false,
      mdiPlusCircle,
      idSelecionado: undefined,
      columns: [
        {
          name: 'NOME',
          label: 'Nome',
          align: 'left',
          field: 'NOME',
          sortable: true,
        },
        {
          name: 'CARGO',
          align: 'left',
          label: 'Cargo',
          field: 'CARGO',
          sortable: true,
        },
        {
          name: 'SALARIO',
          align: 'center',
          label: 'Salário',
          field: 'SALARIO',
          sortable: true,
        },
        {
          name: 'DATA_ADMISSAO',
          align: 'center',
          label: 'Admissão',
          field: 'DATA_ADMISSAO',
          sortable: true,
        },
        { name: 'actions', label: 'Ações', field: '', align: 'center' },
      ],
    }
  },
  computed: {
    ...mapGetters('funcionarios', ['getFuncionarios']),
  },
  methods: {
    ...mapActions('funcionarios', ['actDeleteFuncionario']),
    incluir() {
      this.$router.push('/funcionarios/incluir')
    },
    alterar(val) {
      this.$router.push('/funcionarios/' + val)
    },
    alertDeletar(idSelecionado) {
      this.idSelecionado = idSelecionado
      this.$refs.confirma.show()
    },
    deletar() {
      this.actDeleteFuncionario(this.idSelecionado)
    },
  },
}
</script>

<style>
.FuncionarioList {
  height: 100%;
}

.FuncionarioList .grid {
  height: 100%;
}

.FuncionarioList .grid thead tr th {
  position: sticky;
  z-index: 1;
}

.FuncionarioList .grid thead tr:first-child th {
  top: 0;
}

.FuncionarioList .grid thead tr:first-child th {
  background-color: #fff;
}

.FuncionarioList .grid .q-table--loading thead tr:last-child th {
  top: 48px;
}
</style>
