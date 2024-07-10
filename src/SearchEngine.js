import React, { useState } from "react";

export default function SearchEngine() {
  let [searchInput, letSearchInput] = useState("");

  function handleSearchInput(value) {
    letSearchInput(value.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`furiously searching for ${searchInput} ...`);
  }

  return (
    <form onSubmit={search}>
      <input type="search" onChange={handleSearchInput} />
      <input type="submit" value="Search" />
    </form>
  );
}
