import React, { useState, useRef } from 'react';
import { BaseTable } from '@/components/BaseTable';
import type { ProColumns, ActionType } from '@ant-design/pro-table';
import { Button } from 'antd';
import { getUserList } from '@/services/user/index';
import Create from './create';
export default function index() {
  const columns: ProColumns[] = [
    {
      title: '名字',
      dataIndex: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
    },
    {
      title: '城市',
      dataIndex: 'address',
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
