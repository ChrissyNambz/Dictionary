import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";
import "./Phonetic.css"


export default function Results(props){

    if (props.results){
          return (
            <div className="Results">
              <section className="glass-card main-word-card">
                <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                  <h2 className="searched-word-title">{props.results.word}</h2>
                  <div className="phonetic-group-wrapper">
                    {props.results.phonetics.map(function (phonetic, index) {
                      return (
                        <div key={index} className="phonetic-item-box">
                          <Phonetic phonetic={phonetic} />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </section>
              {props.results.meanings.map(function (meaning, index) {
                return (
                  <section key={index} className="glass-card meaning-block-card">
                    <Meaning meaning={meaning} />{" "}
                  </section>
                );
              })}
            </div>
          );
    }
    else{
        return null;
    }

  
}