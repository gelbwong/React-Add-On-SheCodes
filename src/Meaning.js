import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  let wordClass = props.results.partOfSpeech;
  let def = props.results.definition;
  let examples = props.results.example;

  return (
    <div className="meaning-component">
      <h4 className="word-class"> {wordClass}</h4>
      <p className="definitions"> {def} </p>
      <p className="examples">
        <em> {examples} </em>
      </p>
      <div className="synonyms">
        {Array.isArray(props.results.synonyms) ? (
          props.results.synonyms.map(function (synonym, index) {
            if (index === 0) {
              return <span key={index}>Synonymns: {synonym}</span>;
            } else {
              return <span key={index}>, {synonym}</span>;
            }
          })
        ) : (
          <div className="no-synonyms"></div>
        )}
      </div>
    </div>
  );
}
