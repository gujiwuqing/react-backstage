import React, { ReactNode } from 'react';
import { Button, message } from 'antd';
import { ModalForm, ModalFormProps } from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';
import { Form } from 'antd';

export interface BaseModalFormProps extends ModalFormProps {
  title?: string;
  triggerRender?: () => ReactNode;
  children?: ReactNode;
  width?: number;
}

const defaultTriggerRender = () => (
  <Button type="primary">
    <PlusOutlined />
    新建表单
  </Button>
);

export default ({
  title,
  children,
  triggerRender,
  width = 500,
  ...reset
}: BaseModalFormProps) => {
  const [form] = Form.useForm();
  return (
    <ModalForm
      title={title || '新建表单'}
      width={width}
      form={form}
      layout="horizontal"
      trigger={
        triggerRender ? triggerRender() : (defaultTriggerRender() as any)
      }
      modalProps={{
        onCancel: () => {
          form.resetFields();
        },
      }}
      {...reset}
    >
      {children}
    </ModalForm>
  );
};
