import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import React from 'react';

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        个人中心
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        首页
      </a>
    </Menu.Item>
  </Menu>
);

const userInfo = () => {
  return (
    <Dropdown overlay={menu}>
      <a
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
        style={{ marginLeft: '10px' }}
      >
        Hover me <DownOutlined />
      </a>
    </Dropdown>
  );
};

export default userInfo;
