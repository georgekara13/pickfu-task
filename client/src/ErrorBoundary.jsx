import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, errorMsg: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, errorMsg: error };
  }

  /* the fallback UI that will render once the lifecycle gets invoked(see above)
   I didn't spend any time to properly style it though -
   I just wanted to showcase error handling on the client side :)
  */
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1 className="p-8 text-3xl">Error</h1>
          <h2 className="px-8 text-lg">
            Something went wrong. Please{" "}
            <a className="hover:underline text-blue-500" href="/">
              try again
            </a>
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
