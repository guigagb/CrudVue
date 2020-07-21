import { Dialog } from 'quasar';

export default {
    logado: false,  // variável provisória, implementar login com JWT
    usuarios: [  // informações provisórias, consumir de um backend
        { user: 'admin', nome: 'admin', senha: 'admin' },
        { user: 'gui', nome: 'Guilherme', senha: '123' },
    ],
    usuarioLogado: undefined,
    msgAlert: '',
    alert: function (msg) {
        const dialog = Dialog.create({});
        dialog = Dialog
            .dialog({
                message: msg
            })
            .onOk(() => {
                // console.log('OK')
            })
            .onCancel(() => {
                // console.log('Cancel')
            })
            .onDismiss(() => {
                clearTimeout(timer);
                // console.log('I am triggered on both OK and Cancel')
            });

        const timer = setTimeout(() => {
            dialog.hide();
        }, 5000)
    }
}