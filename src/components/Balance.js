import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsCurrencyBitcoin } from "react-icons/bs";
import { BsCurrencyDollar } from "react-icons/bs";
import { BsCurrencyEuro } from "react-icons/bs";
import { BsCurrencyYen } from "react-icons/bs";

const Balance = () => {
  return (
    <>
      <div className="container my-4">
        <div className="row fw-bold m-auto">
          <div className="col-lg-3 col-sm-6 col-6 border-end my-3">
            <p className="text text-uppercase">balance</p>
            <h3>$6420.00</h3>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 border-end profit my-3">
            <p className="text text-uppercase">profits</p>
            <h3>
              $846.00{" "}
              <span className="fs-6" style={{ color: "#82db1d" }}>
                <TiArrowSortedUp />
                +54%
              </span>
            </h3>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 border-end my-3">
            <p className="text text-uppercase">losses</p>
            <h3>
              $390.00{" "}
              <span className="fs-6 text-danger">
                <TiArrowSortedDown />
                +54%
              </span>
            </h3>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 my-3">
            <p className="text text-uppercase">currencies</p>
            <div className="d-flex justify-content-between fs-3 w-75">
              <BsCurrencyBitcoin className="rounded-circle p-1 currency mx-2" />
              <BsCurrencyDollar className="rounded-circle p-1 currency mx-2" />
              <BsCurrencyEuro className="rounded-circle p-1 currency mx-2" />
              <BsCurrencyYen className="rounded-circle p-1 currency mx-2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Balance;
