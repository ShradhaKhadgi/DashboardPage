import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { countries } from "./data";

const Countries = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row box">
          {countries.map((elem) => {
            return (
              <div
                className="col-lg-2 col-md-4 col-sm-6 col-6 my-3 text-center"
                key={elem.id}
              >
                <p>{elem.name}</p>
                <h3>
                  {elem.rate}
                  {elem.arrow === "up" ? (
                    <span className="mx-2" style={{ color: "#58fcb0" }}>
                      <TiArrowSortedUp />
                    </span>
                  ) : (
                    <span className="mx-2 text-danger">
                      <TiArrowSortedDown />
                    </span>
                  )}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Countries;
