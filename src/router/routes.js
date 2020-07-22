
const routes = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{ path: '', name: 'Home', component: () => import('pages/Home/Home.vue') },
			{
				path: 'funcionarios', component: () => import('pages/Funcionarios/Funcionarios.vue'),
				children: [
					{ path: '', name: "Funcionários", component: () => import('pages/Funcionarios/FuncionariosList.vue') },
					{ path: '/incluir', component: () => import('pages/Funcionarios/FuncionariosIncluir.vue') },
					{ path: ':id/alterar', component: () => import('pages/Funcionarios/FuncionariosAlterar.vue') },
				]
			}
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
