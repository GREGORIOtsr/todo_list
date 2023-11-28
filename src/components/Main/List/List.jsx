import React from 'react'
import { v4 as uuidv4 } from "uuid";
import Item from '../Item';

function List({list, setList}) {

  const deleteItem = (i) => {
    setList(list.filter((obj, j) => j !== i));
  };

  const getItems = () => {
    return list.map((item, i) => (
      <Item key={uuidv4()} message={item.message} deadline={item.deadline} priority={item.priority} func={() => deleteItem(i)} />
    ));
  };

  return (
    <article>
        <ul>
            {getItems()}
        </ul>
    </article>
  )
}

export default List