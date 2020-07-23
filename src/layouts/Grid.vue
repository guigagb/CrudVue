<template>
  <q-table
    class="grid"
    :data="getFuncionarios"
    selection="none"
    :columns="columns"
    color="primary"
    row-key="name"
    :loading="loading"
    :pagination="{ rowsPerPage: 0 }"
  >
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn dense round flat color="grey" icon="edit" @click="editRow(props)" />
        <q-btn dense round flat color="grey" icon="delete" @click="deleteRow(props)" />
      </q-td>
    </template>

    <template v-slot:bottom>
      <q-tab-panel />
      <q-space />
      <q-btn color="primary" label="NOVO FUNCIONÁRIO" no-caps @click="exportTable" />
    </template>
  </q-table>
</template>

<script>
export default {}
</script>

<style></style>
