import Image from "next/image";
import React from "react";

const Avatar = ({ src = "", fname = "", lname = "" }) => {
  return src ? (
    <Image width={50} height={50} className="avatar" alt={fname} src={src} />
  ) : (
    <>{fname.substring(0, 1) + lname.substring(0, 1)}</>
  );
};

export default Avatar;
