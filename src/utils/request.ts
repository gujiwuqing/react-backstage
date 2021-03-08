import { extend } from 'umi-request';

const request = extend({
  prefix:
    'https://www.fastmock.site/mock/85c752f2a572df1e979659e4912eefd4/backstage',
  timeout: 15000,
  //   headers: {
  //     'Content-Type': 'multipart/form-data',
  //   },
  errorHandler: (err) => {
    console.log(err.response.status);
  },
});

export default request;
