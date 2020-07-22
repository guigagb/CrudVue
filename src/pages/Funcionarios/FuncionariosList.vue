<template>
	<div class="FuncionarioList">
		<q-table class="grid" :data="getFuncionarios" :columns="columns" color="primary" row-key="name" :loading="loading">
			<template v-slot:body-cell-actions="props">
	              <q-td :props="props">
	                <q-btn dense round flat color="grey" @click="editRow(props)" icon="edit"></q-btn>
	                <q-btn dense round flat color="grey" @click="deleteRow(props)" icon="delete"></q-btn>
	              </q-td>
			</template>

			<template v-slot:bottom>
				<q-tab-panel></q-tab-panel>
				<q-space></q-space>
				<q-btn color="primary" label="NOVO FUNCIONÁRIO" no-caps @click="exportTable" />
			</template>

    	</q-table>
	</div>
</template>

<script>

import {mdiPlusCircle} from '@quasar/extras/mdi-v5'
import { mapGetters } from 'vuex'

export default {
	data() {
		return {
			loading: false,
			mdiPlusCircle,
			columns: [{
					name: 'NOME',
					label: 'Nome',
					align: 'left',
					field: 'NOME',
					sortable: true
				},
				{ name: 'CARGO', align: 'center', label: 'Cargo', field: 'CARGO', sortable: true },
				{ name: 'SALARIO', align: 'center', label: 'Salário', field: 'SALARIO', sortable: true },
				{ name: 'DATA_ADMISSAO', align: 'center', label: 'Admissão', field: 'DATA_ADMISSAO', sortable: true },
				{ name: 'actions', label: 'Ações', field: '', align: 'center' },
			],
		}
	},
	computed:{
		...mapGetters('funcionarios',['getFuncionarios'])
	}
}
</script>

<style>
.FuncionarioList {
	height: 100%;
}

.FuncionarioList .grid {
	height: 100%;
}
</style>