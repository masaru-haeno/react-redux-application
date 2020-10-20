import React, {Component} from 'react';



const  App = () => {

  return <Counter />;
}

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
  incrementHandler = () => {
    this.setState({count: this.state.count + 1});
  }

  decrementHandler = () => {
    this.setState({count: this.state.count - 1});
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementHandler}>+1</button>
        <button onClick={this.decrementHandler}>-1</button>
        <p>counter {this.state.count}</p>
      </div>
    );
  }
}


export default App;
