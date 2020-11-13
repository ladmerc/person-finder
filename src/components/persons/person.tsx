import * as React from "react";
import Avatar from "./avatar";

export default function Person({ person }: any) {
  console.log({ person });
  const { name, avatar, description } = person;

  return (
    <li>
      <div className="container">
        <div className="row">
          <Avatar person={person} />
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}
