import React from 'react';

// class App extends Component {
//   render() {

//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={()=> console.log("Text Chenge")}></input>
//       </React.Fragment>
//     );
//   }
// }

const  App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
}

const Cat = () => {
  return (
    <div>
      <p>Mewow</p>
    </div>
  );
}

export default App;
