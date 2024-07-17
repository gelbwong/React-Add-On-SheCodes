import React from "react";

import "./ImageDisplay.css";

export default function ImageDisplay(props) {
  if (props.results) {
    return (
      <div className="row ">
        {props.results.photos.map(function (info, index) {
          return (
            <div className="col-6 col-md-4 images" key={index}>
              <a href={info.url} target="_blank" rel="noreferrer">
                <img
                  src={info.src.landscape}
                  alt={info.alt}
                  className="img-fluid"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
