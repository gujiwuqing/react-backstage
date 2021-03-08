import { useState, useCallback } from 'react';
export default function menuState() {
  // const [tabList, setTabList] = useState(JSON.parse(localStorage.getItem('tabList'))??[{ path: '/', title: '首页' }]);
  const [tabList, setTabList] = useState([{ path: '/', title: '首页' }]);
  const changedTabList = useCallback((value) => {
    let num = tabList.findIndex((t) => t.path == value.path);
    if (num == -1) {
      tabList.push(value);
      setTabList([...tabList]);
    }
  }, []);

  return {
    tabList,
    changedTabList,
  };
}
