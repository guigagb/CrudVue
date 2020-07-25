const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('pages/Home/Home.vue'),
      },
      {
        path: 'funcionarios',
        props: true,
        component: () => import('pages/Funcionarios/Funcionarios.vue'),
        children: [
          {
            path: '',
            name: 'Funcionários',
            component: () => import('pages/Funcionarios/FuncionariosList.vue'),
          },
          {
            path: 'incluir',
            name: 'Funcionários | Incluir',
            component: () => import('pages/Funcionarios/FuncionariosForm.vue'),
          },
          {
            path: ':id',
            name: 'Funcionários | Alterar',
            props: true,
            component: () => import('pages/Funcionarios/FuncionariosForm.vue'),
          },
        ],
      },
    ],
  },
  {
    path: '/entrar',
    name: 'entrar',
    component: () => import('pages/Login/Login.vue'),
  },
  {
    path: '*',
    component: () => import('pages/404/Error404.vue'),
  },
]

export default routes
