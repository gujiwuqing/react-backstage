import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import FullScreen from '@/components/FullScreen';
import { useModel } from 'umi';
import { Layout } from 'antd';
import UserInfo from '../UserInfo';
const { Header } = Layout;
export default function Index() {
  const { collapsed, toggleCollapsed, toggleFalseCollapsed } = useModel(
    'menuState',
    (model) => ({
      collapsed: model.collapsed,
      toggleCollapsed: model.toggleCollapsed,
      toggleFalseCollapsed: model.toggleFalseCollapsed,
    }),
  );
  return (
    <Header className="site-layout-background">
      {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        className: 'trigger',
        onClick: collapsed ? toggleFalseCollapsed : toggleCollapsed,
      })}
      <div>
        <FullScreen />
        <UserInfo />
      </div>
    </Header>
  );
}
