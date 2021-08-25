import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list";
import { SearchBar } from "./components/search-bar/search";

export function App() {
      return (<main>
        <SearchBar />
        <CardList />
      </main>);
}
