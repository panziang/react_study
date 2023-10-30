import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      msg: "Hello World",
    };
  }
  render() {
    return (
      <div>
        <h2>{this.state.msg}</h2>
      </div>
    );
  }
}
export default App;
