import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import './index.less';
const HorizontalDemo = () => {
  const items = [
    'https://img.gujiwuqing.top/093044-1551835844245d.jpg',
    'https://img.gujiwuqing.top/201425-1549541665f301.jpg',
    'https://img.gujiwuqing.top/201711-1554121031da2d.jpg',
  ];
  const [list, setList] = useState(items);
  const SortableItem = SortableElement(({ value }: any) => (
    <li style={{ listStyle: 'none' }}>
      <img src={value} style={{ width: '120px' }} />
    </li>
  ));

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
