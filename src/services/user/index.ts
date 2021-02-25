import request from '../../utils/request';

export function getUserList(data?: any) {
  return request('/user/list', {
    method: 'POST',
    data,
  });
}

export function addUser(data: any) {
  return request('/user/add', {
    method: 'POST',
    data,
  });
}
