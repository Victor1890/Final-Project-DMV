import React from "react";
import Item_Products from "../../components/Produts";

fetch('/api/ApiProducts')
.then(data => {return data.json()})
.then(pro => {console.log(pro)});


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