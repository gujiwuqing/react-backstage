import { DownOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Menu, message, Popconfirm } from 'antd';
import React from 'react';
import { history } from 'umi';

const AvatarDropdown = () => {
  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          个人中心
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          修改密码
        </a>
      </Menu.Item>
      <Menu.Item>
        <Popconfirm
          title="是否确定退出登录?"
          onConfirm={confirm}
          okText="确定"
          cancelText="取消"
        >
          <a href="#">退出登录</a>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );
  function confirm() {
    history.push('/login');
    message.success('退出成功');
  }

  let userInfo = { name: '' };
  return (
    <Dropdown overlay={menu}>
      {/* <a
        className="ant-dropdown-link"
        onClick={(e) => e.preventDefault()}
        style={{ marginLeft: '10px' }}
      >
        Hover me <DownOutlined />
      </a> */}
      <span>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <span>
          {userInfo?.name ? userInfo?.name : '孤寂无情'}
          <DownOutlined />
        </span>
      </span>
    </Dropdown>
  );
};

export default AvatarDropdown;
