import React, { FC, useMemo, useState } from "react";
import IWidget from "./utils/mock-data/widget.type";
// import { interval, tap } from "rxjs";
// import { useObservable } from "./utils/rxjs-react-helpers";
// import { Product, products, sortBy, sortedProducts } from "./utils/sort/sortby";
import widgets from "./utils/mock-data/widgets";
import { search } from "./utils/search/search";
import Searchinput from "./utils/search/searchinput";

type AppProps = {
  message: string;
};

//  export const App = ({ message }: AppProps) =>

//  <>
//  <div>{message}</div>;
//  </>
export function App({ message }: AppProps) {


  const [query, setQuery] = useState<string>("");
  const resultWidgets = widgets
  .filter((widget) =>
    search<IWidget>(widget, ["title", "description"], query)
  )



  return <div> 
     <Searchinput onChangeSearchQuery={(query) => setQuery(query)} />
     <h3>Results:</h3>
      {resultWidgets.length > 0 && (
        <div className="row">
          {resultWidgets.map((widget) => (
            <div key={widget.id}> {widget.title}</div>
          ))}
        </div>
      )}
      {resultWidgets.length === 0 && <p>No results found!</p>}
    </div>
     
  //const sorted = sortedProducts(products, "name")
}
