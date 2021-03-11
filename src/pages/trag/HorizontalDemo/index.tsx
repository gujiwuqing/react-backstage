import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import './index.less';
const HorizontalDemo = () => {
  const items = [
    'https://pics7.baidu.com/feed/0ff41bd5ad6eddc43738746669239af550663354.jpeg?token=cc0e1fc3ef641de5a8fc9e17586ba3e6',
    'https://pics2.baidu.com/feed/b999a9014c086e060045786a67e450fc0bd1cb12.jpeg?token=b66c3f04ad0b57b94f9b2b2f7d830cf9&s=BC0FB0541400255D46CA1B930300808Fs',
    'https://pics1.baidu.com/feed/c8ea15ce36d3d539038ac4464132c558342ab03a.jpeg?token=9894c94fb0a0e15c30c1cf5eb8bbd3a0&s=5202B20846633AB0469D048303007022',
  ];
  const [list, setList] = useState(items);
  const SortableItem = SortableElement(({ value }: any) => <img src={value} />);

  const Sortable = SortableContainer(({ children }: any) => {
    return <ul>{children}</ul>;
  });

  return (
    <div className="trag">
      <Sortable
        axis={'x'}
        onSortEnd={({ oldIndex, newIndex }: any) => {
          setList([...arrayMove(list, oldIndex, newIndex)]);
        }}
      >
        {list.map((value, index) => (
          <SortableItem key={index} index={index} value={value} />
        ))}
      </Sortable>
    </div>
  );
};

export default HorizontalDemo;
