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
          Option 1
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<DesktopOutlined />}
          onClick={() => {
            goPage('/test');
          }}
        >
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<PieChartOutlined />} title="Excel">
          <Menu.Item key="5">导出Excel</Menu.Item>
          <Menu.Item key="6">导入Excel</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
