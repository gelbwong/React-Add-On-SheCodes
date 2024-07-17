import React, { useState } from "react";
import axios from "axios";

import "./SearchEngine.css";
import ApiResponse from "./ApiResponse";
import Error from "./Error";
import ImageDisplay from "./ImageDisplay";

export default function SearchEngine(props) {
  let [searchInput, letSearchInput] = useState(props.defaultWord);
  let [apiResponse, letApiResponse] = useState("");
  let [found, letFound] = useState(null);
  let [loaded, letLoaded] = useState(false);
  let [images, letImages] = useState("");

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

  function getImages(assets) {
    if (assets.total_results === 0) {
      letImages("");
    } else {
      letImages(assets.data);
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

    let imagesUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${key}`;

    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        alert(
          `Sorry I cannot find the definition for ${searchInput}. Please try another word!`
        );
      });

    axios
      .get(imagesUrl)
      .then(getImages)
      .catch((error) => {
        console.log("Cannot find images for searched query");
      });
  }

  if (loaded) {
    return (
      <div>
        <section className="header">
          <h4>What word would you like to define?</h4>
          <form
            onSubmit={handleSubmit}
            className="search-engine"
            id="search-engine"
          >
            <input
              type="search"
              onChange={handleSearchInput}
              placeholder={searchInput}
              id="search-bar"
            />
          </form>
          <p className="suggested-queries">
            Examples: facetious, blatherskite, maybe even loquacious?
          </p>
        </section>

        <ApiResponse results={apiResponse} />
        <Error message={found} word={searchInput} />

        <section>
          <ImageDisplay results={images} />
        </section>
      </div>
    );
  } else {
    load();
    return <div>Please be patient as the site is loading...</div>;
  }
}
