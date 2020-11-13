import React, { useRef, useState } from "react";
import { Person } from "../models";
import data from "./mock.json";

type FilterPersonContext = {
  persons: Person[];
  setFilteredPersons: (persons: Person[]) => void;
};

const PersonStateContext = React.createContext<Person[] | undefined>(undefined);
const PersonStateFilterContext = React.createContext<
  FilterPersonContext | undefined
>(undefined);

const PersonsProvider = ({ children }: { children: React.ReactNode }) => {
  const persons = useRef<Person[]>(data);
  const [filteredPersons, setFilteredPersons] = useState<Person[]>(
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
