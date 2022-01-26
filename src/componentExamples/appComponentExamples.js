import React, { Fragment, Component } from "react";
import "./App.css";

class App extends Component {
  // method class
  foo = () => "Bars";
  render() {
    // this is the same as the div element
    // return React.createElement(
    //   "div",
    //   { className: "app" },
    //   React.createElement("h1", null, "Hello World!")
    // );
    // you can opnly return one element so all elements need to be wrapped inside another element
    // Fragment works like a "ghost" element meaning it will not show when rendered
    // <Fragment>
    //   <h1>hello world</h1>
    //   <h2>Goodbye</h2>
    // </Fragment>
    const name = "Mattias";
    const loading = true;

    return (
      <div className="App">
        {loading ? <h4>Loading...</h4> : <h1>hello {name.toUpperCase()} </h1>}
        <h1>hello {name.toUpperCase()} </h1>
        <h2>Foo{this.foo()}</h2>
      </div>
    );
  }
}

export default App;
