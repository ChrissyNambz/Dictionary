import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import "./Phonetic.css";

export default function Phonetic(props) {
  function playAudio(event) {
    event.preventDefault();
    if (props.phonetic.audio) {
      let audioEngine = new Audio(props.phonetic.audio);
      audioEngine.play();
    }
  }
  return (
    <div className="phonetic-pill d-inline-flex align-items-center">
      {props.phonetic.audio && (
        <button
          className="audio-trigger-btn"
          onClick={playAudio}
          title="Audio Pronunciation"
        >
          <FontAwesomeIcon icon={faVolumeHigh} />
        </button>
      )}
      {props.phonetic.text && (
        <span className="phonetic-text-string">{props.phonetic.text}</span>
      )}
    </div>
  );
}
