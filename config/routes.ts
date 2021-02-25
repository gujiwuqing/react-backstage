const routes = [
  {
    path: '/',
    title: '首页',
    component: '@/layouts',
    routes: [
      {
        path: '/user',
        title: '用户管理',
        component: '@/pages/user',
      },
      {
        path: '/trag',
        title: '用户管理',
        component: '@/pages/trag/hoc',
      },
    ],
  },
];

export default routes;
