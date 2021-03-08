import request from '../../utils/request';
import qs from 'qs';
export function userLogin(data?: any) {
  return request('/login', {
    method: 'POST',
    data: qs.stringify(data),
  });
}
