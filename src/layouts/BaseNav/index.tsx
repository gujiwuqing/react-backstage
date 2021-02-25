import React, { useState } from 'react';
import { PieChartOutlined, DesktopOutlined } from '@ant-design/icons';
import { Menu, Layout } from 'antd';
import { history, useModel } from 'umi';

const { SubMenu } = Menu;
const { Sider } = Layout;
export default function Index() {
  const { collapsed } = useModel('menuState', (model) => ({
    collapsed: model.collapsed,
  }));

  const goPage = (path: string) => {
    history.push(path);
  };
  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu
        defaultSelectedKeys={['1']}
        mode="inline"
        theme="dark"
        style={{ height: '100vh' }}
      >
        <Menu.Item
          key="1"
          icon={<PieChartOutlined />}
          onClick={() => {
            goPage('/');
          }}
        >
          首页
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<DesktopOutlined />}
          onClick={() => {
            goPage('/user');
          }}
        >
          用户管理
        </Menu.Item>
        <SubMenu key="sub1" icon={<PieChartOutlined />} title="Excel">
          <Menu.Item key="5">导出Excel</Menu.Item>
          <Menu.Item key="6">导入Excel</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
