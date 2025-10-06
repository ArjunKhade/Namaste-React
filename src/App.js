import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body></Body>
    </div>
  );
};

//root of react
const root = ReactDOM.createRoot(document.getElementById("root"));

// convert the object to the h1 tag and put in root element
root.render(<AppLayout></AppLayout>);
