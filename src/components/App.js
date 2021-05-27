import Header from "./Header";
import React from "react";
import ContestList from "./ContestList";

class App extends React.Component {
  state = {
    message: "Naming Contexts",
    contests: this.props.initialContests,
  };

  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <Header message={this.state.message} />
        <ContestList contests={this.state.contests} />
      </div>
    );
  }
}

export default App;
