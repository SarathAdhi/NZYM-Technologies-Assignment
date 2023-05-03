import React from "react";
import Avatar from "./Avatar";
import { Person } from "types/person";

type Props = {
  headingKey: string;
  value: string | number;
  fname: Person["first name"];
  lname: Person["last name"];
};

const TdRender: React.FC<Props> = ({ headingKey, value, fname, lname }) => {
  return (
    <td>
      {headingKey === "avatar" ? (
        <Avatar src={`${value}`} fname={fname} lname={lname} />
      ) : (
        value
      )}
    </td>
  );
};

export default TdRender;
