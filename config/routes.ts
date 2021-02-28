const routes = [
  {
    path: '/',
    title: '首页',
    component: '@/layouts',
    routes: [
      {
        path: '/',
        title: '首页',
        component: '@/pages/home',
      },
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
      {
        path: '/excel',
        title: '导出excel',
        component: '@/pages/excel',
      },
    ],
  },
];

export default routes;
