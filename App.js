import React from "react";
import ReactDOM from 'react-dom/client';

// react java script object 
const heading = React.createElement("h1",{ id:"heading", xyz:"abc"}, "Hello from Travg");

//root of react
const root = ReactDOM.createRoot(document.getElementById("root"));

// convert the object to the h1 tag and put in root element
root.render(heading);