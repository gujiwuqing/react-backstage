import request from '../../utils/request';

const getUserList = (data) => {
  return request({
    url: '/user/list',
    data,
    method: 'POST',
  });
};
