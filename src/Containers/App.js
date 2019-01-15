import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import "./App.css";
import Scroll from "../Components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robotsArray: [],
      searchTxt: ""
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(result => result.json())
      .then(users => this.setState({ robotsArray: users }));
  }
  onSearch = event => {
    this.setState({ searchTxt: event.target.value });
  };
  render() {
    const { searchTxt, robotsArray } = this.state;

    const filteredRobots = this.state.robotsArray.filter(robot =>
      robot.name.toLowerCase().includes(searchTxt.toLowerCase())
    );

    return !robotsArray.length ? (
      <div className="tc">
        <h1 className="f1">Loading</h1>
      </div>
    ) : (
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox onChange={this.onSearch} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}
export default App;
