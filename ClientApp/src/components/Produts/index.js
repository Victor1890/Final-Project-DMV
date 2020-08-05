import React from "react";

export default function Item_Products() {
  return (
    <>
      <div className="col-md-4">
        <img
          className="img-fluid img-thumbnail"
          src={require("../../assets/img/bg-login.jpg")}
        />
        <h4 className="pricing-card-title">
          $120.00
          <small className="text-muted">/ mo</small>
        </h4>
      </div>
    </>
  );
}