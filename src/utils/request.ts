import { extend } from 'umi-request';
import qs from 'qs';
const request = extend({
  prefix: 'http://127.0.0.1:10000',
  timeout: 15000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
  errorHandler: (err) => {
    console.log(err.response.status);
  },
});

export default request;
