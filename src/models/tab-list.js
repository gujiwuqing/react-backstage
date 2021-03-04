import { useState, useCallback } from 'react';

export default function menuState() {
  const [tabList, setTabList] = useState(false);

  const changedTabList = useCallback((value) => {
    console.log(value);
    setTabList([]);
  }, []);

  return {
    tabList,
    changedTabList,
  };
}
