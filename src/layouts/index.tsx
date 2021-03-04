import React from 'react';
import './index.less';
import BaseNav from './BaseNav';
import BaseHeader from './BaseHeader';
import BaseTab from './BaseTab';
import { Layout } from 'antd';

const { Content } = Layout;
export default function index({ children }: any) {
  return (
    <Layout className="container">
      <BaseNav />
      <Layout className="site-layout">
        <BaseHeader />
        <BaseTab />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
}
