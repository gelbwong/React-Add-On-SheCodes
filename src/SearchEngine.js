import React, { useState } from "react";
import axios from "axios";

export default function SearchEngine() {
  let [searchInput, letSearchInput] = useState("");

  function handleSearchInput(value) {
    letSearchInput(value.target.value);
  }

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();

    const key = "a5ca0d6dt74bbobcf0c9aa390574f791";
    let word = searchInput;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;

    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <form onSubmit={search}>
      <input type="search" onChange={handleSearchInput} />
      <input type="submit" value="Search" />
    </form>
  );
}
