import logo from './logo.svg';
import './App.css';
import React from "react";
import {Component, StrictMode} from "react";


const Header = () => {
  return <h2>Hello World!</h2>
}

// const Field = () => {
//   const holder = 'Enter here';
//   const styledField = {
//     width: '300px'
//   };
//   return <input
//           placeholder={holder}
//           type="text"
//           style={styledField}/>
// }

class Field extends Component {
    render() {
        const holder = 'Enter here';
        const styledField = {width: '300px'
        };
        return <input
              placeholder={holder}
              type="text"
              style={styledField}/>
    }
}

function Btn() {
  const text = 'Log in';
  const logged = false;
  // const res = () => {
  //   return 'Log in';
  // }
  // const p = <p>LOG IN</p>
  return <button>{logged ? 'Enter' : text}</button>
}

function WhoAmI (props) {
    return (
        <div>
            <h1>My name is {props.name()}, surname - {props.surname}</h1>
            <a href={props.link}>My profile</a>
        </div>
    )
}

function App() {
  return (
    <div className="App">
      <WhoAmI name={() => {return "John"}} surname="Smith" link="facebook.com"/>
      {/*<WhoAmI name={{firstName: "Alex"}} surname="Shepard" link="facebook.com"/>*/}
      <Header></Header>
      <StrictMode>
          <Header/>
      </StrictMode>
      <Field/>
      <Btn/>
      {/*<header className="App-header">*/}
      {/*  <img src={logo} className="App-logo" alt="logo" />*/}
      {/*  <p>*/}
      {/*    Edit <code>src/App.js</code> and save to reload.*/}
      {/*  </p>*/}
      {/*  <a*/}
      {/*    className="App-link"*/}
      {/*    href="https://reactjs.org"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Learn React*/}
      {/*  </a>*/}
      {/*</header>*/}
    </div>
  );
}

export {Header};
export default App;
