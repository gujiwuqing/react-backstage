import React from 'react';
import { BaseTable } from '@/components/BaseTable';
import type { ProColumns } from '@ant-design/pro-table';
import { Button } from 'antd';
export default function index() {
  const columns: ProColumns[] = [
    {
      title: '名字',
      dataIndex: 'name',
      width: 48,
    },
  ];
  const data = [
    {
      name: '123',
    },
  ];
  return (
    <div>
      <BaseTable
        columns={columns}
        dataSource={data}
        renderActions={() => (
          <>
            <Button type="primary">新建</Button>
          </>
        )}
      />
    </div>
  );
}
