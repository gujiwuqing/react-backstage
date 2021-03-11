import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import './index.less';

const Demo = () => {
  const items = [
    'item1',
    'item2',
    'item3',
    'item4',
    'item5',
    'item6',
    'item7',
    'item8',
  ];
  const [list, setList] = useState(items);
  const SortableItem = SortableElement(({ value }: any) => <li>{value}</li>);

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

export default Demo;
