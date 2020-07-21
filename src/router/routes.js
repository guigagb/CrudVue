
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home/Home.vue') }
    ]
  },
  {
    path: '/entrar',
    name: 'entrar',
    component: () => import('pages/Login/Login.vue')
  },
  {
    path: '*',
    component: () => import('pages/404/Error404.vue')
  }
]

export default routes
