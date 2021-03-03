import React, { useState, useMemo } from 'react';

export default function index() {
  const [number, setNumber] = useState(0);
  //   const handerClick1 = () => {
  //     /* 一些操作 */
  //   };
  //   const handerClick2 = () => {
  //     /* 一些操作 */
  //   };
  //   const handerClick3 = () => {
  //     /* 一些操作 */
  //   };

  const [handerClick1, handerClick2, handerClick3] = useMemo(() => {
    const fn1 = () => {
      /* 一些操作 */
      console.log('f1');
    };
    const fn2 = () => {
      /* 一些操作 */
      console.log('f2');
    };
    const fn3 = () => {
      console.log('f3');
      /* 一些操作 */
    };
    return [fn1, fn2, fn3];
  }, []);
  return (
    <div>
      <a onClick={handerClick1}>点我有惊喜1</a>
      <a onClick={handerClick2}>点我有惊喜2</a>
      <a onClick={handerClick3}>点我有惊喜3</a>
      <button onClick={() => setNumber(number + 1)}> 点击 {number} </button>
    </div>
  );
}
