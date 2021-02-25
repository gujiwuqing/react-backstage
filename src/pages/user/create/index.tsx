import BaseModalForm from '@/components/BaseModalForm';
import { PlusOutlined } from '@ant-design/icons';
import { ProFormText } from '@ant-design/pro-form';
import { Button, message } from 'antd';
import React from 'react';
import { addUser } from '@/services/user';

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
        width="md"
        name="name"
        label="姓名"
        placeholder="请输入姓名"
        rules={[{ required: true }]}
      />
      <ProFormText
        width="md"
        name="age"
        label="年龄"
        placeholder="请输入年龄"
        rules={[{ required: true }]}
      />
    </BaseModalForm>
  );
}
