import React from "react";

export function Products() {
  return (
    <>
      <div className="container">
        <div className="card-deck mb-3 text-center">

          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">test</h4>
            </div>
            <div className="card-body">
              <div className="card-title">
                <img
                  className="img-fluid img-thumbnail"
                  src={require("../../assets/img/bg-login.jpg")}
                />
                <h4 className="pricing-card-title">
                  $120.00
                  <small className="text-muted">/ mo</small>
                </h4>
              </div>
            </div>
          </div>

          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">test</h4>
            </div>
            <div className="card-body">
              <div className="card-title">
                <img
                  className="img-fluid img-thumbnail"
                  src={require("../../assets/img/bg-login.jpg")}
                />
                <h4 className="pricing-card-title">
                  $120.00
                  <small className="text-muted">/ mo</small>
                </h4>
              </div>
            </div>
          </div>

          <div className="card mb-4 shadow-sm">
            <div className="card-header">
              <h4 className="my-0 font-weight-normal">test</h4>
            </div>
            <div className="card-body">
              <div className="card-title">
                <img
                  className="img-fluid img-thumbnail"
                  src={require("../../assets/img/bg-login.jpg")}
                />
                <h4 className="pricing-card-title">
                  $120.00
                  <small className="text-muted">/ mo</small>
                </h4>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
}
