import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import Spinner from "../spinner";
import { usePersons } from "../../providers/personContext";

import Person from "./person";


const PersonRow = ({ index, style, data }: any) => {

  return (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      <Person person={data[index]} />
    </div>
  );
};

export default function PersonsList() {
  const persons = usePersons();

  if (!persons) return <Spinner />;
  if (!persons.length) return <p className="mt-1">No person matches your search</p>;

  return (
    <div className="containesr" style={{ height: "100vh" }}>
      <div className="rosw" style={{ height: "100vh" }}>
        <ul style={{ height: "100%" }}>
          {/* <AutoSizer>
            {({ height, width }: any) => {

              return (
                <List
                  className="List"
                  height={height}
                  itemCount={1000}
                  itemSize={35}
                  width={width}
                  itemData={persons}
                >
                  {PersonRow}
                </List>
              );
            }}
          </AutoSizer> */}
          {persons.map(person => <Person person={person} key={person.id}/>)}
        </ul>
      </div>
    </div>
  );
}
