import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";

// Adding bootstrap
import "bootstrap/dist/css/bootstrap.css";

// Below RHS is JSX expression - Javascript XML
// Babel compiler transforms the below into React.createElement
// Try this out in babeljs.io/repl

const element = <h1>Hello World</h1>;

// Note ReactElement is a Virtual DOM which is a light weight representation
// of Real DOM. ReactElement listens to state changes and applies on the
// Real DOM accordingly

//ReactDOM.render(element, document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById("root"));

console.log(element);
