import React, { ReactNode } from 'react';
import './index.less';
interface BasePageProps {
  children: ReactNode;
}
export default function index({ children }: BasePageProps) {
  return <div className="base-container">{children}</div>;
}
