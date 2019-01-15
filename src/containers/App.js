import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import "./App.css";
import { connect } from "react-redux";
import { setSearchField,requestRobots } from "../actions";
import Header from '../components/Header';
const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots : state.requestRobots.robots,
    isPending :state.requestRobots.isPending,
    error :state.requestRobots.error
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: event => setSearchField(dispatch,event.target.value),
    onRequestRobots: () => requestRobots(dispatch)
  };
};
class App extends Component {
 
  componentDidMount() {
    this.props.onRequestRobots();
  }

  render() { 
    const { searchField, onSearchChange ,robots} = this.props;
    const filterdRobots = robots.filter(robot =>
      robot.name.toLocaleLowerCase().includes(searchField)
    );
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <div className="tc">
      <Header/>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <CardList robots={filterdRobots} />
        </Scroll>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
