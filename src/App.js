import React from "react";

import TextEditor from "./components/TextEditor";
// import ComponentOne from "./components/ComponentOne"


export default class App extends React.Component {
  render() {
    return(
      <div className="App">
        <TextEditor/>
        {/* <ComponentOne/> */}
      </div>
    )
  }
}