import React from 'react';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
import { Menu, Button } from 'antd';
import { history } from 'umi';
export default function BaseNav() {
  return (
    <div>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        style={{ width: 200 }}
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<DesktopOutlined />}
          onClick={() => {
            history.push('/test');
          }}
        >
          Option 2
        </Menu.Item>
      </Menu>
    </div>
  );
}
