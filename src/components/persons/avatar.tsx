import * as React from "react";
import { TPerson } from '../../models'

export default function Avatar({ person }: { person: TPerson }) {
  return (
    <img
      src={person.avatar}
      alt={`${person.name} avatar`}
      width="100px"
      height="100px"
    />
  );
}
