import React from "react";

const Avatar = ({ src = "", fname = "", lname = "" }) => {
  return src ? (
    <img className="avatar" src={src} />
  ) : (
    <>{fname.substring(0, 1) + lname.substring(0, 1)}</>
  );
};

export default Avatar;
