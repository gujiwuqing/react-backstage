import BaseModalForm from '@/components/BaseModalForm';
import { PlusOutlined } from '@ant-design/icons';
import { ProFormText } from '@ant-design/pro-form';
import { Button, message, Form, Cascader } from 'antd';
import React from 'react';
import { addUser } from '@/services/user';
import options from '@/utils/cascader-address-options';
interface createUserProps {
  reloadTable: () => void;
}

export default function createUser({ reloadTable }: createUserProps) {
  return (
    <BaseModalForm
      title="新建用户"
      triggerRender={() => (
        <Button type="primary">
          <PlusOutlined />
          新建用户
        </Button>
      )}
      onFinish={async (values: any) => {
        console.log(values);
        const { code } = await addUser({ ...values });
        if (code == 200) {
          message.success('添加成功');
          reloadTable();
          return true;
        }
      }}
    >
      <ProFormText
        name="name"
        label="姓名"
        placeholder="请输入姓名"
        rules={[{ required: true }]}
      />
      <ProFormText
        name="age"
        label="年龄"
        placeholder="请输入年龄"
        rules={[{ required: true }]}
      />
      <Form.Item label="地址" name="address">
        <Cascader options={options}></Cascader>
      </Form.Item>
      <ProFormText name="email" label="邮箱" placeholder="请输入邮箱" />
    </BaseModalForm>
  );
}
