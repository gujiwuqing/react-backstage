import React from 'react';
import { useModel, history } from 'umi';
interface tabItem {
  title: string;
  path: string;
}
export default function index() {
  const { tabList, changedTabList } = useModel('tab-list', (model) => ({
    tabList: model.tabList,
    changedTabList: model.changedTabList,
  }));
  return (
    <div className="tab-list">
      {tabList.map((item: tabItem) => {
        return (
          <span
            className={
              item.path === history.location.pathname
                ? 'tab-item active'
                : 'tab-item'
            }
            key={item.path}
            onClick={() => {
              history.push(item.path);
            }}
          >
            {item.title}
          </span>
        );
      })}
    </div>
  );
}
