import { extend } from 'umi-request';

const request = extend({
  prefix:
    'https://www.fastmock.site/mock/85c752f2a572df1e979659e4912eefd4/backstage',
  timeout: 1000,
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
});

request.use(async (ctx, next) => {
  const { req } = ctx;
  const { url, options } = req;

  // // 判断是否需要添加前缀，如果是统一添加可通过 prefix、suffix 参数配置
  // if (url.indexOf('/api') !== 0) {
  //   ctx.req.url = `/api/v1/${url}`;
  // }
  // ctx.req.options = {
  //   ...options,
  //   foo: 'foo',
  // };

  await next();

  const { res } = ctx;
  const { success = false } = res; // 假设返回结果为 : { success: false, errorCode: 'B001' }
  if (!success) {
    // 对异常情况做对应处理
  }
});
