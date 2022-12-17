import "./App.css";
import { Forma } from "./Components/form";
import Nav from "./Components/Navbar";
import { Fragment } from "react";
import { render } from "@testing-library/react";

function App() {
  return (
    <Fragment>
      <Nav />
      <Forma />
    </Fragment>
  );
}

export default App;
