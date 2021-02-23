import React from 'react';

import BaseNav from './components/BaseNav';

export default function index({ children }: any) {
  return (
    <div className='container'>
      <div>
        <BaseNav />
      </div>
      <div>{children}</div>
    </div>
  );
}
