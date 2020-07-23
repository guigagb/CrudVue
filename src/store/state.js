import { Notify } from 'quasar'
import { mdiAlertOctagon, mdiAlert, mdiCheckUnderline } from '@quasar/extras/mdi-v5'

export default {
  usuarios: [
    // informações provisórias, consumir de um backend
    { user: 'admin', nome: 'Admin', senha: 'admin' },
    { user: 'gui', nome: 'Guilherme', senha: '123' },
  ],
  usuarioLogado: undefined,
  msgAlert: '',
  typeAlert: {
    info: {
      icon: 'info',
      colorClose: 'white',
      type: 'info',
    },
    negative: {
      icon: mdiAlertOctagon,
      colorClose: 'white',
      type: 'negative',
    },
    positive: {
      icon: mdiCheckUnderline,
      colorClose: 'white',
      type: 'positive',
    },
    warning: {
      icon: mdiAlert,
      colorClose: 'black',
      type: 'warning',
    },
  },
  alert: function (msg, type = 'info') {
    Notify.create({
      message: msg,
      type: this.typeAlert[type].type, // info, warning, positive, negative
      timeout: 5000,
      progress: true,
      icon: this.typeAlert[type].icon,
      position: 'top-right',
      actions: [
        {
          icon: 'close',
          color: this.typeAlert[type].colorClose,
          handler: () => {
            /* ... */
          },
        },
      ],
    })
  },
}
