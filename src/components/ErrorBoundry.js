import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false
    };
  }
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render(props) {
    if (this.state.hasError) return <div>Error</div>;
    return props.children;
  }
}

export default ErrorBoundry;
