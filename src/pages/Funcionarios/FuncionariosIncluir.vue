<template>
  <div class="FuncionariosIncluir q-pa-md">
    <Form />
  </div>
</template>

<script>
import Form from './FuncionariosForm'

export default {
  components: { Form },
}
</script>

<style>
.FuncionariosIncluir {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
