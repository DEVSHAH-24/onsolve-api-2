import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

// function refreshPage() {
//   window.location.reload(false);
// }
function App() {
  const url = "https://catfact.ninja/fact";

  const [isLoadingData, setisLoadingData] = React.useState(false);

  const [name, setName] = useState("");
  function callonClick() {
    fetch(url)
      .then((response) =>
        response != null ? response.json() : "Check your network"
      )
      .then((r)=> {
        setName(r);
        setisLoadingData(false);
      } );
  }
  return (
    <div className="App">
      
        {
        !isLoadingData ?
        ( 
        <p> {name.fact + " " + name.length}</p>) : (<p>'Please wait'</p>)
        }
      <button onClick={callonClick}>Click</button>
    </div>
  );

  
}

export default App;
