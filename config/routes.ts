const routes = [
  {
    path: '/login',
    title: '登录',
    component: '@/pages/login',
  },
  {
    path: '/',
    title: '首页',
    exact: false,
    component: '@/layouts',
    routes: [
      {
        path: '/',
        title: '首页',
        component: '@/pages/home',
      },
      {
        path: '/table',
        title: '表格',
        routes: [
          {
            path: '/table/user/list',
            title: '用户管理',
            component: '@/pages/user',
          },
        ],
      },
      {
        path: '/trag',
        title: '拖拽',
        component: '@/pages/trag/hoc',
      },
      {
        path: '/excel',
        title: '导出excel',
        component: '@/pages/excel',
      },
      {
        path: '/test',
        title: '测试',
        component: '@/pages/test',
      },
    ],
  },
];

export default routes;
