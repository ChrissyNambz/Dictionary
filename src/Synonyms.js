import React from "react";
import "./Synonym.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <ul className="synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <span key={index}>{synonym} </span>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}