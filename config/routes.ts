const routes = [
  {
    path: '/',
    title: '首页',
    component: '@/layouts',
    routes: [
        {
        path: '/test',
        title: 'test',
        component: '@/pages/test',
    }
],
  },
];

export default routes;
