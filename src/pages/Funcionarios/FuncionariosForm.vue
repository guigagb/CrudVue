<template>
  <div class="form-funcionario">
    <q-form id="formFuncionarios" ref="formFuncionarios">
      <div class="row q-mb-lg">
        <div class="col-2 q-pr-lg container-foto">
          <fieldset>
            <img
              class="foto"
              src="https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0"
            />
          </fieldset>
        </div>
        <div class="col-10">
          <div class="row q-mb-lg">
            <div class="col-12">
              <q-input
                v-model="funcionario.NOME"
                stack-label
                label="Nome"
                :rules="[required]"
              />
            </div>
          </div>
          <div class="row">
            <div class="col-2 q-pr-lg">
              <q-input
                v-model="funcionario.SALARIO"
                mask="#.##"
                fill-mask="0"
                reverse-fill-mask
                stack-label
                label="Salário"
              />
            </div>
            <div class="col-2 q-pr-lg">
              <q-input v-model="funcionario.DATA_ADMISSAO" stack-label label="Admissão" mask="date" :rules="[required]">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
                      <q-date
                        v-model="funcionario.DATA_ADMISSAO"
                        first-day-of-week="1"
                        @input="() => $refs.qDateProxy.hide()"
                      />
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
            <div class="col-4">
              <q-select class="select" v-model="funcionario.ID_CARGO" :options="getCargosToSelect" stack-label label="Cargo" :rules="[required]" />
            </div>
          </div>
        </div>
      </div>
    </q-form>
    <q-card-actions>
      <q-space />
      <q-btn :icon="mdiCancel" size="md" color="negative" class="q-pl-sm q-pr-sm">
        <span class="q-pl-sm">CANCELAR</span>
      </q-btn>
      <q-btn :icon="mdiCheckCircle" size="md" color="positive" class="q-pl-sm q-pr-sm">
        <span class="q-pl-sm">SALVAR</span>
      </q-btn>
    </q-card-actions>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mdiCheckCircle, mdiCancel } from '@quasar/extras/mdi-v5'
import { required } from '../../js/rules'
import { tabToEnter } from '../../js/util'

export default {
  data() {
    return {
      funcionario: {
        NOME: undefined,
        ID_CARGO: undefined,
        DATA_ADMISSAO: undefined,
        SALARIO: undefined,
      },
      mdiCheckCircle,
      mdiCancel,
      required,
    }
  },
  computed: {
    ...mapGetters('funcionarios', ['getCargosToSelect']),
  },
  mounted(){
    tabToEnter('#formFuncionarios')
  }
}
</script>

<style>
.form-funcionario {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.form-funcionario .container-foto {
  height: 155px;
}
.form-funcionario .container-foto fieldset {
  height: 100%;
  padding: 0px;
  border: 1px solid #c2c2c2;
}
.form-funcionario .container-foto .foto {
  width: 100%;
  height: 100%;
}
.q-card__actions .q-btn {
  min-width: 140px;
}
</style>
