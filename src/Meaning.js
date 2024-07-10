import React from "react";

export default function Meaning(props) {
  let wordClass = props.results.partOfSpeech;
  let def = props.results.definition;
  let examples = props.results.example;

  return (
    <div>
      <h4> {wordClass}</h4>
      <p> {def} </p>
      <p>
        <em> {examples} </em>
      </p>

      {Array.isArray(props.results.synonyms) ? (
        props.results.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym} </span>;
        })
      ) : (
        <div>No synonyms found...</div>
      )}
    </div>
  );
}
