<template>
  <div class="FuncionarioList"></div>
</template>

<script>
import { mdiPlusCircle } from '@quasar/extras/mdi-v5'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      loading: false,
      mdiPlusCircle,
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
