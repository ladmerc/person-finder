import React, { useRef, useState } from "react";
import { TPerson } from "../models";
import data from "./mock.json";

type FilterPersonContext = {
  persons: TPerson[];
  setFilteredPersons: (persons: TPerson[]) => void;
};

const PersonStateContext = React.createContext<TPerson[] | undefined>(undefined);
const PersonStateFilterContext = React.createContext<
  FilterPersonContext | undefined
>(undefined);

const PersonsProvider = ({ children }: { children: React.ReactNode }) => {
  const persons = useRef<TPerson[]>(data);
  const [filteredPersons, setFilteredPersons] = useState<TPerson[]>(
    persons.current
  );

  return (
    <PersonStateContext.Provider value={filteredPersons}>
      <PersonStateFilterContext.Provider
        value={{ persons: persons.current, setFilteredPersons }}
      >
        {children}
      </PersonStateFilterContext.Provider>
    </PersonStateContext.Provider>
  );
};

const usePersons = () => React.useContext(PersonStateContext);
const useFilterPersons = () => React.useContext(PersonStateFilterContext);

export { PersonsProvider, usePersons, useFilterPersons };
