import { Button, Checkbox, Form, Input, message } from 'antd';
import React, { useEffect } from 'react';
import { history, useModel } from 'umi';
import './index.less';
import { userLogin } from '@/services/login';
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginPage = () => {
  const [form] = Form.useForm();
  let loginUser = localStorage.getItem('loginUser');
  useEffect(() => {
    if (loginUser) {
      form.setFieldsValue({ ...JSON.parse(loginUser) });
    }
  }, []);

  const { changedToken, changedUser } = useModel('user', (model) => ({
    changedToken: model.changedToken,
    changedUser: model.changedUser,
  }));
  const onFinish = async (values: any) => {
    const { username, password, remember } = values;
    if (remember) {
      localStorage.setItem('loginUser', JSON.stringify({ username, password }));
    } else {
      localStorage.setItem('loginUser', '');
    }
    const { status, msg, body } = await userLogin({ ...values });
    if (status == 200) {
      message.success(msg);
      history.push('/');
      changedToken(body.token);
      localStorage.setItem('token', body.token);
      localStorage.setItem('user', JSON.stringify(body.user));
      changedUser(body.user);
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        flexDirection: 'column',
      }}
    >
      <h2 style={{ textAlign: 'center' }}>登录</h2>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        form={form}
      >
        <Form.Item
          label="账号"
          name="username"
          rules={[
            {
              required: true,
              message: '请先输入账号!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[
            {
              required: true,
              message: '请先输入密码!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
