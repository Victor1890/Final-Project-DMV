import React, { useEffect, useState } from "react";
import axios from 'axios';
import Item_Products from "../../components/Produts";

export default function Products() {

  const [ dataProducts, setDataProducts ] = useState([]);

  useEffect(() => {
    axios.get('/api/ApiProducts')
    .then(res =>{
      setDataProducts(res.data);
    })
    .catch(err => console.log(err));
  },[dataProducts]);
  return (
    <>
      <div className="container">
        <div className='row text-center'>
          {dataProducts.map(e => <div key={e.id}>
            <Item_Products 
              title={e.nombre_Produts} 
              prices={e.precio_Produts} 
              disponible={e.num_Produts}
              imageurl={e.imagen_Produts}/>
          </div>)}
        </div>
      </div>
    </>
  );
}