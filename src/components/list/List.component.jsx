import React from 'react';

function List({ itemsArray, ToUse }) {
  return (
    <>
      {itemsArray.map((item) => {
        return <ToUse item={item} />;
      })}
    </>
  );
}

export default List;
