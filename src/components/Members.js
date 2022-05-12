import React, { useEffect, useState } from "react";
import { countries, team } from "./data";

const Members = () => {
  const [member, setMember] = useState(team);
  const [country, setCountry] = useState(countries);
  const filterTeam = () => {
    const memberData = team.filter((elem) => {
      return elem.id <= 4;
    });
    setMember(memberData);
  };
  const fiterCountry = () => {
    const countryData = countries.filter((elem) => {
      return elem.id <= 3;
    });
    setCountry(countryData);
  };
  useEffect(() => {
    filterTeam();
    fiterCountry();
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 mb-4">
            <div className="d-flex justify-content-between align-items-center mx-2">
              <h4>Team Members</h4>
              <h6
                className="pointer"
                style={{ color: "#5580ed" }}
                onClick={() => {
                  setMember(team);
                }}
              >
                View All
              </h6>
            </div>
            {member.map((elem) => {
              return (
                <div
                  className="d-flex justify-content-between align-items-center box p-2 my-2"
                  key={elem.id}
                >
                  <div>
                    <img
                      src={elem.img}
                      className="profile_icon2 float-start mt-2"
                      alt="profile"
                    />
                    <p className="float-start ms-3 mt-2">{elem.name}</p>
                  </div>
                  {elem.profile === "Manager" ? (
                    <span
                      className="badge rounded-pill p-2 px-3"
                      style={{ color: "#5580ed", background: "#d2ddfa" }}
                    >
                      {elem.profile}
                    </span>
                  ) : (
                    <span
                      className="badge rounded-pill p-2 px-3"
                      style={{ color: "#82db1d", background: "#ecfadc" }}
                    >
                      {elem.profile}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="d-flex justify-content-between align-items-center mx-2 mb-2">
              <h4>Comparison</h4>
              <h6
                className="pointer"
                style={{ color: "#5580ed" }}
                onClick={() => setCountry(countries)}
              >
                View All
              </h6>
            </div>
            <div className="box p-4">
              {country.map((elem) => {
                return (
                  <div className="mb-4" key={elem.id}>
                    <img
                      src={elem.img}
                      alt="country"
                      className="profile_icon2 float-start"
                    />
                    <p className="mx-5">{elem.name}</p>
                    <div
                      className="d-flex justify-content-between align-items-center"
                      style={{ height: "1.2rem" }}
                    >
                      <div style={{ width: "90%" }}>
                        <div className="progress" style={{ height: "0.5rem" }}>
                          <div
                            className="progress-bar rounded-pill"
                            role="progressbar"
                            style={{
                              width: elem.percentage,
                              background: "#58fcb0",
                            }}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                      <p className="">{elem.percentage}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
