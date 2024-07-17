import React from "react";
import Speech from "react-speech";

import "./ApiResponse.css";
import Meaning from "./Meaning";

export default function ApiResponse(response) {
  let word = response.results.word;
  let phonetic = response.results.phonetic;

  if (response.results) {
    return (
      <div>
        <section>
          <h3 className="main-word">{word}</h3>

          <div className="pronounciation-duo">
            <div className="phonetics">
              <h4>{phonetic}</h4>
            </div>

            <div className="pronounciation-button">
              <Speech text={word} textAsButton={true} displayText="▶" />
            </div>
          </div>
        </section>

        {response.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning results={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
