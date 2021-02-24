import React, { useState, ReactNode } from 'react';
import ProTable, { ProTableProps } from '@ant-design/pro-table';
import { ParamsType } from '@ant-design/pro-provider';

interface BaseTableProps<T, U extends ParamsType> extends ProTableProps<T, U> {}

const Index = () => {
  return (
    <>
      <div></div>
    </>
  );
};

export default Index;
