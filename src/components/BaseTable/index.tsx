import React, { useState, ReactNode } from 'react';
import ProTable, { ProTableProps } from '@ant-design/pro-table';
import { ParamsType } from '@ant-design/pro-provider';
import { Button, Input } from 'antd';
import './index.less';
interface BaseTableProps<T, U extends ParamsType> extends ProTableProps<T, U> {
  inputPlachoderText?: string;
  renderActions?: () => ReactNode;
}

export function BaseTable<T, U extends ParamsType>({
  inputPlachoderText,
  renderActions,
  ...reset
}: BaseTableProps<T, U>) {
  return (
    <>
      <ProTable<T, U>
        search={false}
        rowKey="id"
        toolbar={{
          search: renderActions && renderActions(),
          actions: [
            <>
              <Input
                placeholder={
                  inputPlachoderText
                    ? inputPlachoderText
                    : '请输入你想查询的条件'
                }
              />
              <Button key="primary" type="primary">
                查询
              </Button>
              <Button key="reset" type="primary">
                重置
              </Button>
            </>,
          ],
        }}
        pagination={{ pageSize: 10, showQuickJumper: true }}
        {...reset}
      />
    </>
  );
}
