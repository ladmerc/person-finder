import * as React from "react";
import debounce from "lodash.debounce";
import { useFilterPersons } from "../../providers/personContext";

export default function SearchInput() {
  const filterState = useFilterPersons();
  if (!filterState) return null;

  const { persons, setFilteredPersons } = filterState;

  const handleChange = ({
    target: { value }
  }: React.ChangeEvent<HTMLInputElement>): void => {
    if (!value?.trim()) {
      setFilteredPersons(persons);
    } else {
      const regex = new RegExp(value, "i");
      const filtered = persons.filter((x) => x.name.match(regex));
      setFilteredPersons(filtered);
    }
  };

  const debouncedChange = debounce(handleChange, 500);

  return (
    <div>
      <form>
        <input
          className="form-control"
          type="text"
          placeholder="Type a name..."
          onChange={debouncedChange}
        />
      </form>
    </div>
  );
}
