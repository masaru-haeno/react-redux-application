import React from 'react';



const  App = () => {
  const profiles = [
    {name: "Taro", age: 10},
    {name: "Hanako", age: 5},
    {name: "Hanako"}
  ];
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index}/>
        })
      }
    </div>
  );
}

const User = (props) => {
  return (
    <div>
      <p>I'm {props.name}, and {props.age} years old!</p>
    </div>
  );
}

User.defaultProps = {
  age: 1
}

export default App;
