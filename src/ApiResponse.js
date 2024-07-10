import React from "react";

import Meaning from "./Meaning";

export default function ApiResponse(response) {
  let word = response.results.word;
  let phonetic = response.results.phonetic;

  if (response.results) {
    return (
      <div>
        <h3>{word}</h3>
        <h4>{phonetic}</h4>
        {response.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning results={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
