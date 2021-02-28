import request from '../../utils/request';
import { userDTO } from './type';
export function getUserList(data?: any) {
  return request('/user/list', {
    method: 'POST',
    data,
  });
}

export function addUser(data: userDTO) {
  return request('/user/add', {
    method: 'POST',
    data,
  });
}
