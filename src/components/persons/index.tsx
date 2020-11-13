import React, { useState } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import Spinner from "../spinner";
import { usePersons } from "../../providers/personContext";

import Person from "./person";

// TODO * as

const Row = ({ index, style }: any) => (
  <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
    Row {index}
  </div>
);

const PersonRow = ({ index, style, data }: any) => {
  console.log({ index, data });
  return (
    <div className={index % 2 ? "ListItemOdd" : "ListItemEven"} style={style}>
      <Person person={data[index]} />
    </div>
  );
};

export default function PersonsList() {
  const persons = usePersons();

  if (!persons) return <Spinner />;

  return (
    <div className="containesr" style={{ height: "100vh" }}>
      <div className="rosw" style={{ height: "100vh" }}>
        <ul style={{ height: "100%" }}>
          <AutoSizer>
            {({ height, width }: any) => {
              console.log({ height: width });

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
          </AutoSizer>
          {/* {persons.slice(0, 40).map((person: any) => (
            <Person key={person.id} person={person} />
          ))} */}
        </ul>
      </div>
    </div>
  );
}
