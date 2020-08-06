import React, { Component } from 'react'

class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 100
    }
  }

  componentDidMount() {
    if (this.props.start !== undefined) {
      this.setState({ time: this.props.start })
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentDidUpdate() {
    if (this.state.time === 0) {
      this.componentWillUnmount();
    }
  }

  tick() {
    this.setState({
      time: this.state.time - 1
    });
  }

  render() {
    return (
      <>
        <h3>
          Hitung Mundur: {this.state.time}
        </h3>
      </>
    )
  }
}

export default Timer
