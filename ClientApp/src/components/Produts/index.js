import React from "react";

export default function Item_Products({title, prices, disponible}) {
  return (
    <>
      <div className="col-md-4">
        <img
          className="img-fluid img-thumbnail"
          src={require("../../assets/img/bg-login.jpg")}
        />
        <h2 className='card-title'>
          {title}
        </h2>
        <h4 className="pricing-card-title">
          ${prices}
          <small className="text-muted">/ mo</small>
        </h4>
        <small className="text-muted"> Disponibles: {disponible}</small>
      </div>
    </>
  );
}