import React from 'react';

// Custom css import
// import ms from "./List.module.css";

function List({ itemsArray, ToUse, onClick }) {
  return (
    <>
      {itemsArray.map((item) => {
        return (
          <div key={item._id} onClick={onClick}>
            <ToUse item={item} />
          </div>
        );
      })}
    </>
  );
}

export default List;
