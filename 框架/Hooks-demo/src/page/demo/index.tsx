import { useLayoutEffect, useEffect, useState } from 'react';

export function Demo() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState('');
  console.log('从头渲染');

  useEffect(() => {
    console.log('useEffect');
    setData(count + '哈哈哈');
  }, [count]);
  console.log('render');

  return (
    <>
      <div>Demo</div>
      <div>
        <div>Count : {count}</div>
        <div>Data : {data}</div>
        <button
          onClick={() => {
            setCount(count + 1);
            console.log('内置打印', count);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
