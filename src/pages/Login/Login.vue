<template>
    <div id="pageLogin">
        <div class="login">
            <div class="login_header">
                <span style="line-height: 55px; padding-left: 10px; font-size: 20px;">CRUD Vue</span>
            </div>
            <q-form id="formLogin" ref="formLogin" class="login_content">
                <div class="form-group">
                    <div>
                        <span>Usuário</span>
                    </div>
                    <div>
                        <q-input ref="edtUsuario" clearable required v-model="usuario" :rules="requiredRules" light></q-input>
                    </div>
                </div>
                <div class="form-group">
                    <div>
                        <span>Senha</span>
                    </div>
                    <div>
                        <q-input maxlength="20" v-model="password" :type="showPass ? 'text' : 'password'" :append-icon="showPass ? 'fa fa-eye' : 'fa fa-eye-slash'" @click:append="showPass = !showPass" :rules="requiredRules" light></q-input>
                    </div>
                </div>
                <div class="btnLogin">
                    <q-btn ref="btnLogin" :disabled="btnLoginDisable" :loading="btnLoginDisable" @click="login" class="primary">Login</q-btn>
                </div>
                <div class="form-group rodape">
                    <a href=""><span>Cadastrar-se</span></a>
                </div>
            </q-form>
        </div>
    </div>
</template>

<script>
// import inputNumber from "../../components/inputNumber";
import * as util from "../../js/util";
import store from "../../store";

export default {
    name: "login",
    components: {},
    data() {
        return {
            requiredRules: [v => !!v || "O campo deve ser preenchido!"],
            password: undefined,
            showPass: false,
            btnLoginDisable: false,
            usuario: ""
        };
    },
    methods: {
        login() {
            this.$refs.formLogin
                .validate()
                .then(success => {
                    if (success) {
                        this.btnLoginDisable = true;
                        this.$refs.btnLogin.innerHTML =
                            '<i class="fa fa-spinner fa-spin"></i>';
                        return this.$store.dispatch("actLogar", {
                            usuario: this.usuario,
                            senha: this.password
                        });
                    } else {
                        return Promise.reject("Campos devem ser preenchidos!");
                    }
                })
                .then(r => {
                    setTimeout(() => {
                        this.$router.push({
                            path: "/"
                        });
                    }, 200);
                })
                .catch(r => {
                    this.$store.state.alert(r, "negative");
                })
                .finally(() => {
                    this.btnLoginDisable = false;
                });
        }
    },
    computed: {
        //   ...mapState(['usuarioLogado'])
    },
    beforeRouteEnter(to, from, next) {
        if (!store.state.usuarioLogado) next();
        else next("/");
    },
    mounted() {
        util.tabToEnter("#formLogin");
        window.store = this.$store;
    }
};
</script>

<style lang="stylus" scoped>
#pageLogin {
    background: #56ccf2;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to left,
            #61a0f3,
            #569ff2);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left,
            #61a0f3,
            #569ff2);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
}

.login {
    flex-direction: column;
    background-color: rgba(250, 250, 250, 0.801);
    border-radius: 12px;
    margin: auto;
    width: 350px;
}

.login,
.login_header {
    display: flex;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
        0 2px 1px -1px rgba(0, 0, 0, 0.12);
}

.login_header {
    color: rgb(255, 255, 255);
    padding-left: 80px;
    flex-direction: row;
    padding: 10px;
    background: #2f80ed;
    display: flex;
    align-items: center;
    justify-content: center;
}

.login_content {
    padding: 30px 24px 0;
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 10px;
    color: #3d3d3d;
}

.form-group a {
    color: #1c1c1c;
    text-transform: none;
    text-decoration: none;
}

.form-group a:hover {
    text-decoration: underline;
}

input {
    background-color: transparent;
    border: none;
    border-bottom: 1px solid #9e9e9e;
    border-radius: 0;
    outline: none;
    height: 3rem;
    width: 100%;
    font-size: 16px;
    margin: 0 0 8px 0;
    padding: 0;
    box-shadow: none;
    box-sizing: content-box;
    transition: box-shadow 0.3s, border 0.3s;
}

input:focus {
    border-bottom: 1px solid rgb(7, 185, 230);
}

.btnLogin {
    margin: 10px 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.btnLogin button {
    height: 50px;
    width: 100%;
    border-radius: 5px;
    border: 1px solid #fff;
    color: #f2f2f2;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 16px;
    background: #2f80ed;
}

.rodape {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    margin: 15px 0px;
}

.theme--dark.q-input>.v-input__control>.v-input__slot:before {
    border-color: rgba(0, 0, 0, 0.42) !important;
}
</style>
