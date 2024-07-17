import React, { useState } from "react";
import axios from "axios";

import "./SearchEngine.css";
import ApiResponse from "./ApiResponse";
import Error from "./Error";

export default function SearchEngine(props) {
  let [searchInput, letSearchInput] = useState(props.defaultWord);
  let [apiResponse, letApiResponse] = useState("");
  let [found, letFound] = useState(null);
  let [loaded, letLoaded] = useState(false);

  function handleSearchInput(value) {
    letSearchInput(value.target.value);
  }

  function handleResponse(response) {
    if (response.data.message === "Word not found") {
      letFound(response.data);
      letApiResponse("");
    } else {
      letApiResponse(response.data);
      letFound(null);
    }
  }

  function load() {
    letLoaded(true);
    search();
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function search() {
    const key = "a5ca0d6dt74bbobcf0c9aa390574f791";
    let word = searchInput;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${key}`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        alert(
          `Sorry I cannot find the definition for ${searchInput}. Please try another word!`
        );
      });
  }

  if (loaded) {
    return (
      <div>
        <section>
          <form
            onSubmit={handleSubmit}
            className="search-engine"
            id={"search-engine"}
          >
            <input
              type="search"
              onChange={handleSearchInput}
              placeholder={searchInput}
            />
          </form>
          <p className="suggested-queries">
            What word would you like to define? Facetious? Blatherskite? Maybe
            even Loquacious?
          </p>
        </section>

        <ApiResponse results={apiResponse} />
        <Error message={found} word={searchInput} />
      </div>
    );
  } else {
    load();
    return <div>Please be patient as the site is loading...</div>;
  }
}
