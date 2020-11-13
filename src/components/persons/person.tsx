import * as React from "react";
import Avatar from "./avatar";
import { TPerson } from '../../models'

export default function Person({ person }: { person: TPerson }) {  
  const { name, description } = person;

  return (
    <li className="mt-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xs-6">
            <Avatar person={person} />
          </div>
          <div className="col-md-8 col-lg-8 col-xs-6 text-md-left">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </li>
  );
}
