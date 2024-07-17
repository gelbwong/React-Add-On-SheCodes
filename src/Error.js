import React from "react";

import "./Error.css";

export default function Error(message) {
  if (message.message) {
    return (
      <section className="error-message text-center">
        Sorry your word, could not be found, please try another word again!
      </section>
    );
  } else {
    return null;
  }
}
