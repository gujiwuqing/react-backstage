import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { history, useModel } from 'umi';
import routes from '../../../config/routes';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
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
  const goPage = (route: any) => {
    history.push(route.path);
    changedTabList(route);
  };

  return (
    <Sider trigger={null} collapsible collapsed={collapsed}>
      <Menu
        selectedKeys={[history.location.pathname]}
        mode="inline"
        theme="dark"
        style={{ height: '100vh' }}
      >
        {routes[1].routes.map((item) => {
          if (item.routes) {
            return (
              <SubMenu
                key={item.path}
                title={item.title}
                icon={<PieChartOutlined />}
              >
                {item.routes.map((i) => {
                  return (
                    <Menu.Item
                      key={i.path}
                      onClick={() => {
                        goPage(i);
                      }}
                    >
                      {i.title}
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          } else {
            return (
              <Menu.Item
                key={item.path}
                onClick={() => {
                  goPage(item);
                }}
                icon={<PieChartOutlined />}
              >
                {item.title}
              </Menu.Item>
            );
          }
        })}
        {/* <Menu.Item
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
        </SubMenu> */}
      </Menu>
    </Sider>
  );
}
