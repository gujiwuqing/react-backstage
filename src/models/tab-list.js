import { useState, useCallback } from 'react';
export default function menuState() {
  // const [tabList, setTabList] = useState(JSON.parse(localStorage.getItem('tabList'))??[{ path: '/', title: '首页' }]);
  const [tabList, setTabList] = useState([{ path: '/', title: '首页' }]);
  const changedTabList = useCallback((value) => {
    let arr = [...tabList];
    arr.map((item) => {
      if (item.path != value.path) {
        arr.push({
          path: value.path,
          title: value.title,
        });
      }
    });
    // localStorage.setItem('tabList',JSON.stringify(arr))
    setTabList([...arr]);
  }, []);

  return {
    tabList,
    changedTabList,
  };
}
