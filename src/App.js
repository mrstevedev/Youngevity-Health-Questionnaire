import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from './svg/logo.svg';
import { NameForm } from "./components/NameForm";
import { ListView } from './components/ListView';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {
        poor: 0,
        great: 0,
        good: 0
      },
      result: ''
    };
  }

  handleSubmit(textInputValue) {
    // The callback passed to the child component will
    // submit the data back to it's parent.
    // Logic to post to localhost:8080/
  }

  render() {
    return (
      <div className="container">
        <header>
          <img src={logo} alt="" className="logo" />
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/whats-your-first-name" render={(props) => <NameForm />} />
          <Route path="/overview-list" render={(props) => <ListView value={this.state.value} onChangeValue={this.getUsernamePassword} />} />
        </Switch>
      </div>
    );
  }
}

const renderNameForm = () => (
  <div>

  </div>
);



const Home = () => (
  <Link to="/whats-your-first-name">
    <button>Get Started</button>
  </Link>

);

const Init = () => (
  <Router>
    <Route component={App} />
  </Router>
);

export default Init;
