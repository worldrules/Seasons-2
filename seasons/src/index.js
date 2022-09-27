import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    
    this.state = { lat: null }
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err)
    );

    return <div>{this.state.lat}</div>
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
