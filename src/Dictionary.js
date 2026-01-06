import React, {useState}from "react";
import axios from "axios"
import Results from "./Results"
import Photos from "./Photos";
import "./Dictionary.css"

export default function Dictionary(props){
let [keyword, setKeyword]=useState(props.defaultKeyword);
let [results, setResults]=useState(null);
let [loaded, setLoaded]=useState(false);
let [photos, setPhotos]=useState(null)

 function handleResponse(response){
    setResults(response.data[0])


 }

  function handlePexResponse(response){
    setPhotos(response.data.photos);

  }

function search(){
  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(apiUrl).then(handleResponse);

 let pexApiKey = "hOvjf20B4f3mkVMKLnyxoIINQfAHQhaFAFcpqgBvslxVHPIzmLTA92ut";
  let pexApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
  let headers = { Authorization: `Bearer ${pexApiKey}` };
axios
  .get(pexApiUrl, {headers: headers })
  .then(handlePexResponse);
}


function handleSubmit(event){
    event.preventDefault();
   search()

  
}



function handleKeywordChange(event){
    setKeyword(event.target.value);

}

function load(){
    setLoaded(true);
    search()
}

if (loaded){
 return (
   <div className="Dictionary">
     <section>
       <h1> What word are you looking for? </h1>

       <form onSubmit={handleSubmit}>
         <input type="search" onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
       </form>
       <div className="hint">
         Suggested words: Apple,Cosmos,Volcanoe,Wine,Umbrella....
       </div>
     </section>
     <Results results={results} />
     <Photos photos={photos}/>
   </div>
 );

}else{
    load();
    return " Loading....."
}
   
}