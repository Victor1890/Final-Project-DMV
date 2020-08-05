import React from "react";
import Item_Products from "../../components/Produts";


export function Products() {
  return (
    <>
      <div className="container">
        <div className='row text-center'>
          <Item_Products/>
          <Item_Products/>
          <Item_Products/>
        </div>
      </div>
    </>
  );
}