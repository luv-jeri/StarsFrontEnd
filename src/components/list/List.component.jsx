import React from "react";

// Custom css import
import ms from "./List.module.css";

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
