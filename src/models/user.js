import { useState, useCallback } from 'react';
export default function menuState() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState({});
  const changedToken = useCallback((value) => {
    setToken(value);
  }, []);

  const changedUser = useCallback((value) => {
    setUser(value);
  }, []);
  return {
    token,
    changedToken,
    user,
    changedUser,
  };
}
