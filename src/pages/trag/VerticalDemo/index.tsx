import React, { useState } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortableItem = SortableElement(({ value }: any) => (
  <li tabIndex={0}>{value}</li>
));

const SortableList = SortableContainer(({ items }: any) => {
  return (
    <ul>
      {items.map((value: any, index: number) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </ul>
  );
});

const SortableComponent = () => {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
  const [list, setList] = useState(items);
  const onSortEnd = ({ oldIndex, newIndex }: any) => {
    setList([...arrayMove(list, oldIndex, newIndex)]);
  };

  return <SortableList items={list} onSortEnd={onSortEnd} />;
};
export default SortableComponent;
