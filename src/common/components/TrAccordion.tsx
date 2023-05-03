import React, { useState } from "react";
import { Component } from "types/component";
import { Person } from "types/person";

type Props = {
  address: Person["address"];
} & Component;

const TrAccordion: React.FC<Props> = ({ children, address }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <tr onClick={() => setIsActive(!isActive)}>{children}</tr>

      {isActive && (
        <div className="address-container">
          <h2>Address</h2>

          <span>
            <strong>Building no:</strong> {address?.buildingNumber}
          </span>
          <span>
            <strong>Street:</strong> {address?.street}
          </span>
          <span>
            <strong>Street Name:</strong> {address?.streetName}
          </span>
          <span>
            <strong>City:</strong> {address?.city}
          </span>
          <span>
            <strong>Zipcode:</strong> {address?.zipcode}
          </span>
          <span>
            <strong>Country:</strong> {address?.country}
          </span>
          <span>
            <strong>Country code:</strong> {address?.county_code}
          </span>
          <span>
            <strong>Lat / Lon:</strong>{" "}
            {`${address?.latitude} / ${address.longitude}`}
          </span>
        </div>
      )}
    </>
  );
};

export default TrAccordion;
