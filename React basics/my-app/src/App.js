import logo from './logo.svg';
import './App.css';
import React from "react";
import {Component, StrictMode} from "react";

const Header = () => <h2>Hello World!</h2>;
// const Header = () => {
//   return <h2>Hello World!</h2>
// }

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

// function WhoAmI (props) {
//     return (
//         <div>
//             <h1>My name is {props.name()}, surname - {props.surname}</h1>
//             <a href={props.link}>My profile</a>
//         </div>
//     )
// }


class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++',
            position: ''
        }
        // this.nextYear = this.nextYear.bind(this)
    }

    // nextYear = () => {
    //     console.log('+++');
    //     this.setState({
    //         years: this.state.years + 1
    //     })
    // }

    nextYear = () => {
        console.log('+++');
        this.setState(state => ({
            years: state.years + 1
        }))
    }

    commitInputChanges = (e,color) => {
        console.log(color)
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const {name, surname, link} = this.props;
        const {position, years} = this.state;
        return (
            <div>
                <button onClick={this.nextYear}>{this.state.text}</button>
                <h1>My name is {name}, surname - {surname},
                    age - {years},
                    position = {position}</h1>
                <a href={link}>My profile</a>
                <form>
                    <span>Enter position</span>
                    <input type="text"
                           onChange={(e) => this.commitInputChanges(e, 'some color')}/>
                </form>
            </div>
        )
    }
}

function App() {
  return (
    <div className="App">
      <WhoAmI name="John" surname="Smith" link="facebook.com"/>
      <WhoAmI name="Alex" surname="Shepard" link="facebook.com"/>
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
