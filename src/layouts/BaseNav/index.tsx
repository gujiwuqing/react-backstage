import {
  HomeOutlined,
  UserOutlined,
  FileExcelOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { history, useModel } from 'umi';

const { SubMenu } = Menu;
const { Sider } = Layout;
export default function Index() {
  const [selectedKey, setSelectedKey] = useState<string>('/');
  const { collapsed } = useModel('menuState', (model) => ({
    collapsed: model.collapsed,
  }));

  const { tabList, changedTabList } = useModel('tab-list', (model) => ({
    tabList: model.tabList,
    changedTabList: model.changedTabList,
  }));
  const goPage = (path: string) => {
    history.push(path);
    setSelectedKey(path);
    changedTabList(path);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu
        selectedKeys={[selectedKey]}
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
          key="/user"
          icon={<UserOutlined />}
          onClick={() => {
            goPage('/user');
          }}
        >
          用户管理
        </Menu.Item>
        <SubMenu key="sub2" icon={<HomeOutlined />} title="拖拽">
          <Menu.Item
            key="/trag"
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
            key="/excel"
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
