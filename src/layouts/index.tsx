import React from 'react';
import './index.less';
import BaseNav from './BaseNav';
import BaseHeader from './BaseHeader';
import { Layout } from 'antd';

const { Content } = Layout;
export default function index({ children }: any) {
  return (
    <Layout className="container">
      <BaseNav />
      <Layout className="site-layout">
        <BaseHeader />
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
