import React from 'react';
import { useModel, history } from 'umi';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import './index.less';

interface tabItem {
  title: string;
  path: string;
}
export default function index() {
  const { tabList, changedTabList } = useModel('tab-list', (model) => ({
    tabList: model.tabList,
    changedTabList: model.changedTabList,
  }));
  function handleClick(e, data) {
    console.log(data.foo);
  }
  return (
    <>
      <div className="tab-list">
        {tabList.map((item: tabItem) => {
          return (
            <ContextMenuTrigger id="same_unique_identifier">
              <div
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
                {' '}
                {item.title}
              </div>
            </ContextMenuTrigger>
          );
        })}
      </div>
      <ContextMenu id="same_unique_identifier">
        <MenuItem data={{ foo: 'bar' }} onClick={handleClick}>
          刷新
        </MenuItem>
        <MenuItem data={{ foo: 'bar' }} onClick={handleClick}>
          关闭其他
        </MenuItem>
        {/* <MenuItem divider /> */}
        <MenuItem data={{ foo: 'bar' }} onClick={handleClick}>
          关闭所有
        </MenuItem>
      </ContextMenu>
    </>
  );
}
