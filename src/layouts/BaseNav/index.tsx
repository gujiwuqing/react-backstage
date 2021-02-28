import {
  HomeOutlined,
  UserOutlined,
  FileExcelOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React from 'react';
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
          key="/"
          icon={<HomeOutlined />}
          onClick={() => {
            goPage('/');
          }}
        >
          首页
        </Menu.Item>
        <Menu.Item
          key="2"
          icon={<UserOutlined />}
          onClick={() => {
            goPage('/user');
          }}
        >
          用户管理
        </Menu.Item>
        <SubMenu key="sub2" icon={<HomeOutlined />} title="拖拽">
          <Menu.Item
            key="51"
            onClick={() => {
              goPage('/trag');
            }}
          >
            拖拽1
          </Menu.Item>
          <Menu.Item key="61">导入Excel</Menu.Item>
        </SubMenu>
        <SubMenu key="sub1" icon={<FileExcelOutlined />} title="Excel">
          <Menu.Item
            key="5"
            onClick={() => {
              goPage('/excel');
            }}
          >
            导出Excel
          </Menu.Item>
          <Menu.Item key="6">导入Excel</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
