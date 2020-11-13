import * as React from "react";

export default function Avatar({ person }: any) {
  return (
    <img
      src={person.avatar}
      alt={`${person} avatar`}
      width="50px"
      height="50px"
    />
  );
}
