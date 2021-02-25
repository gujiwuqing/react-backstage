import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({ value }: any) => (
  <img src={value} width={80} style={{ marginRight: '20px' }} />
));

const SortableList = SortableContainer(({ items }: any) => {
  return (
    <ul style={{ display: 'flex' }}>
      {items.map((value: string, index: number) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

const items = [
  'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  'https://img.gujiwuqing.top/201425-1549541665f301.jpg',
  'https://img.gujiwuqing.top/225841-1554908321d437.jpg',
];

const index = () => {
  const [list, setList] = useState(items);
  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    setList([...arrayMove(items, oldIndex, newIndex)]);
    console.log(arrayMove(items, oldIndex, newIndex));
  };
  return <SortableList items={list} onSortEnd={onSortEnd} axis={'x'} />;
};
export default index;
