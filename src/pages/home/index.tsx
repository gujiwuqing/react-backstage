import React from 'react';
import { Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './index.less';

export default function Home() {
  return (
    <div style={{ width: '100vw' }} className="home-container">
      <div className="home-container_header">
        <Row>
          <Col span={6}>
            <div>
              <UserOutlined />
            </div>
            <div>
              <p>New Visits</p>
              <p>16</p>
            </div>
          </Col>{' '}
          <Col span={6}>
            <div>
              <UserOutlined />
            </div>
            <div>
              <p>New Visits</p>
              <p>16</p>
            </div>
          </Col>{' '}
          <Col span={6}>
            <div>
              <UserOutlined />
            </div>
            <div>
              <p>New Visits</p>
              <p>16</p>
            </div>
          </Col>{' '}
          <Col span={6}>
            <div>
              <UserOutlined />
            </div>
            <div>
              <p>New Visits</p>
              <p>16</p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
