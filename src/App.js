import React, {Component} from 'react';


// function App() {
//   return (
//     <h1>
//         Hello World!!.
//     </h1>
//   );
// }

class App extends Component {
  render() {

    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={()=> console.log("Text Chenge")}></input>
      </React.Fragment>
    );
  }
}

export default App;
