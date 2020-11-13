import * as React from "react";
import { Helmet } from "react-helmet";

import SearchInput from "./components/search";
import People from "./components/persons";

import { PersonsProvider } from "./providers/personContext";
// TODO: webpack alias for components

export default function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Person Finder</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="container">
        <h1>The Person Finder</h1>
        <p>
          If you just can't find someone and need to know what they look like,
          you've come to the right place! Just type the name of the person you're
          looking for below into the search box!
        </p>
        <PersonsProvider>
          <SearchInput />
          <People />
        </PersonsProvider>

      </div>
    </div>
  );
}
