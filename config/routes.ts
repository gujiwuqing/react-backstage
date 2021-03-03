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
        path: '/trag/dnd',
        title: '用户管理',
        component: '@/pages/trag/dnd',
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
      {
        path: '/upload',
        title: '测试',
        component: '@/pages/upload',
      },
    ],
  },
];

export default routes;
