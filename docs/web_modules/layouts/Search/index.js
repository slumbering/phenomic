import React, { Component, PropTypes } from "react"
// import styles from "./index.css"

export default class Homepage extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
  };

  render() {
    return (
      <span>
        { "Current query is" }
        { this.props.location.search }
      </span>
    )
  }
}
