<template>
  <q-table
    class="grid"
    :data="data"
    selection="none"
    :columns="columns"
    color="primary"
    :row-key="rowKey"
    :loading="loading"
    :pagination="{ rowsPerPage: 0 }"
  >
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn dense round flat color="grey" icon="edit" @click="editRow(props.row[rowKey])" />
        <q-btn dense round flat color="grey" icon="delete" @click="deleteRow(props.row[rowKey])" />
      </q-td>
    </template>

    <template v-slot:bottom>
      <q-space />
      <q-btn color="primary" label="INCLUIR" no-caps @click="incluir" />
    </template>
  </q-table>
</template>

<script>
export default {
  props: ['data', 'columns', 'rotaIncluir', 'rotaAlterar', 'rowKey'],
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    incluir() {
      this.$emit('insert')
    },
    editRow(value) {
      this.$emit('update', value)
    },
    deleteRow(value) {
      this.$emit('delete', value)
    },
  },
}
</script>

<style></style>
