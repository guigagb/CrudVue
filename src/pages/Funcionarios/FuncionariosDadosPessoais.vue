<template>
  <div class="formDadosPessoais">
    <q-form id="formDadosPessoais" ref="formDadosPessoais">
      <div class="row q-mb-lg">
        <div class="col col-md-2 col-sm-2 gt-xs q-pr-lg container-foto">
          <fieldset>
            <img
              class="foto"
              src="https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0"
            />
          </fieldset>
        </div>
        <div class="col col-md-10 col-sm-10 col-xs-12">
          <div class="row q-mb-lg">
            <div class="col col-md-2 col-sm-3 col-xs-4 q-pr-lg">
              <q-input
                ref="edtIdFuncionario"
                v-model="funcionario.ID_FUNCIONARIO"
                mask="######"
                maxlength="6"
                stack-label
                label="ID. Funcionário"
                :rules="[required]"
                :disable="disableIdFuncionario"
                @blur="duplicity()"
              />
            </div>
            <div class="col col-md-10 col-sm-9 col-xs-8 q-pr-lg">
              <q-input v-model="funcionario.NOME" stack-label label="Nome" :rules="[required]" />
            </div>
          </div>
          <div class="row">
            <div class="col col-md-2 col-sm-4 col-xs-6 q-pr-lg">
              <q-input
                v-model="funcionario.SALARIO"
                mask="#.##"
                fill-mask="0"
                reverse-fill-mask
                stack-label
                label="Salário"
              />
            </div>
            <div class="col col-md-3 col-sm-4 col-xs-6 q-pr-lg">
              <q-input
                v-model="funcionario.DATA_ADMISSAO"
                mask="##/##/####"
                stack-label
                label="Admissão"
                :rules="[required]"
              />
            </div>
            <div class="col col-md-3 col-sm-4 col-xs-12">
              <q-select
                ref="edtCargo"
                v-model="funcionario.ID_CARGO"
                class="select"
                :options="getCargosToSelect"
                stack-label
                label="Cargo"
                :rules="[required]"
                @keydown.enter="$emit('salvar', funcionario)"
              />
            </div>
          </div>
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { required } from '../../js/rules'
import { tabToEnter } from '../../js/util'

export default {
  components: {},
  data() {
    return {
      disableIdFuncionario: false,
      acao: undefined,
      required,
      price: 0,
      funcionario: {
        ID_FUNCIONARIO: undefined,
        NOME: undefined,
        ID_CARGO: undefined,
        CARGO: undefined,
        SALARIO: undefined,
        DATA_ADMISSAO: undefined,
      },
    }
  },
  computed: {
    ...mapGetters('funcionarios', ['getCargosToSelect']),
  },
  methods: {
    ...mapActions('funcionarios', ['actFuncionarioDuplicity', 'actGetFuncionario']),
    ...mapMutations('funcionarios', ['setFuncionario']),
    duplicity() {
      if (this.acao != 'incluir') return false
      this.actFuncionarioDuplicity(this.funcionario.ID_FUNCIONARIO).then((r) => {
        if (r) {
          this.$store.state.alert('Esse id já está sendo utilizado!', 'negative')
          this.$refs.edtIdFuncionario.validate(false)
          this.$refs.edtIdFuncionario.focus()
        }
      })
    },
    changeCargo(val, done) {
      console.log(val)
      done(val)
    },
  },
  mounted() {
    tabToEnter('#formDadosPessoais')
    this.acao = this.$route.path == '/funcionarios/incluir' ? 'incluir' : 'alterar'
    if (this.acao == 'incluir') {
      this.disableIdFuncionario = false
      this.$refs.formDadosPessoais.focus()
    } else if (this.acao == 'alterar') {
      this.disableIdFuncionario = true
      this.actGetFuncionario(this.$route.params.id).then((r) => (this.funcionario = r))
      this.$refs.formDadosPessoais.$children[1].focus()
    }
  },
}
</script>

<style>
.formDadosPessoais {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.formDadosPessoais .container-foto {
  height: 155px;
}
.formDadosPessoais .container-foto fieldset {
  height: 100%;
  padding: 0px;
  border: 1px solid #c2c2c2;
}
.formDadosPessoais .container-foto .foto {
  width: 100%;
  height: 100%;
}
.q-card__actions .q-btn {
  min-width: 140px;
}
</style>
