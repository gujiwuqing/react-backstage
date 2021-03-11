import React from 'react';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import FullScreen from '@/components/FullScreen';
import { useModel } from 'umi';
import { Layout } from 'antd';
import UserInfo from './AvatarDropdown';
import './index.less';
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
    <Header className="site-header">
      <div className="header-left">
        <div className="collapse-btn">
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: 'trigger',
              onClick: collapsed ? toggleFalseCollapsed : toggleCollapsed,
            },
          )}
        </div>
        <span>后台管理系统</span>
      </div>
      <div className="header-right">
        <FullScreen />
        <UserInfo />
      </div>
    </Header>
  );
}
