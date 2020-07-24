<template>
  <q-field class="q-field__input text-right" :value="value" v-bind="moneyFormatForComponent" @input="emitValue" />
</template>

<script>
export default {
  props: ['text'],
  data() {
    return {
      value: 0,
      moneyFormatForComponent: {
        decimal: '.',
        thousands: ',',
        prefix: '$ ',
        suffix: ' #',
        precision: 2,
        masked: true,
      },
    }
  },
  methods: {
    emitValue(newVal) {
      this.$emit('input', newVal)
    },
  },
}
</script>
