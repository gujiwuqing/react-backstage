import { useState, useCallback } from 'react';

export default function menuState() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = useCallback(() => {
    setCollapsed(true);
  }, []);

  const toggleFalseCollapsed = useCallback(() => {
    setCollapsed(false);
  }, []);

  return {
    collapsed,
    toggleCollapsed,
    toggleFalseCollapsed,
  };
}
