import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import { fontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function handlePexResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);

    let pexApiKey = "hOvjf20B4f3mkVMKLnyxoIINQfAHQhaFAFcpqgBvslxVHPIzmLTA92ut";
    let pexApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: pexApiKey };
    axios.get(pexApiUrl, { headers: headers }).then(handlePexResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="glass-card search-section">
          <h2 className="search-title"> What word are you looking for? </h2>

          <form onSubmit={handleSubmit} className="search-form-wrapper">
            <div className="input-icon-container">
              <input
                type="search"
                onChange={handleKeywordChange}
                defaultValue={props.defaultKeyword}
                placeholder="Search an existential word here..."
                className="search-input"
              />
              <fontAwesomeIcon
                icon={faMagnifyingGlass}
                className="search-glyph"
              />
            </div>
          </form>
          <div className="hint">
            Suggested Words: <span className="suggested-tag">Cosmos</span>,{" "}
            <span className="suggested-tag">Nebula</span>,{" "}
            <span className="suggested-tag">Aurora</span>,{" "}
            <span className="suggested-tag">Quantum</span>
          </div>
        </section>

        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return (
      <div className="loading-state text-center py-5">
        <div className="spinner-border text-purple" role="status"></div>
        <p className="mt-3 opacity-50"> Loading lexicon....</p>
      </div>
    );
  }
}
