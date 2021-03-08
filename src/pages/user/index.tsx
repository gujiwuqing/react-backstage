import { BaseTable } from '@/components/BaseTable';
import { getUserList } from '@/services/user/index';
import type { ActionType, ProColumns } from '@ant-design/pro-table';
import { message, Tooltip } from 'antd';
import copy from 'copy-to-clipboard';
import React, { useRef, ReactNode } from 'react';
import Create from './create';
export default function index() {
  const columns: ProColumns[] = [
    {
      title: '名字',
      dataIndex: 'name',
      render: (_) => <a>{_}</a>,
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '城市',
      dataIndex: 'address',
      render: (_) => (
        <span
          onClick={() => {
            copyUrl(_);
          }}
        >
          <Tooltip title="复制城市">
            <span>{_}</span>
          </Tooltip>
        </span>
      ),
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
    },
  ];

  const ref = useRef<ActionType>();

  const reloadTable = () => {
    ref.current?.reload();
  };

  const copyUrl = (value: ReactNode | string) => {
    copy(value as any);
    message.success('复制成功，如果失败，请在输入框内手动复制.');
  };
  return (
    <BaseTable
      actionRef={ref}
      columns={columns}
      request={(params: any, sort: any, filter: any) => {
        return getUserList({}).then((data: any) => ({
          data: data.data.list,
          total: data.data.total,
        }));
      }}
      renderActions={() => (
        <>
          <Create reloadTable={reloadTable} />
        </>
      )}
    />
  );
}
