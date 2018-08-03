import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from './components/Header';
import { Home } from './components/Home';
import { NameForm } from "./components/NameForm";
import { ListView } from './components/ListView';
import { SplashScreenJointsBonesTeeth } from './components/SplashScreenJointsBonesTeeth';
import Quiz from './components/Quiz';
import quizQuestions from './api/quizQuestions';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      category: null,
      counter: 0,
      questionId: 1,
      question: null,
      title: null,
      fact: null,
      answerOptions: [],
      answer: null,
      answers: null,
      answersCount: {
        reallypoor: 0,
        poor: 0,
        fair: 0,
        great: 0,
        good: 0
      },
      result: null,
      name: null,
    };
  }

  componentDidMount() {
    //Fetch questions from the questions file
    quizQuestions.map((question, index) => {
      //console.log('the categoryId:'+ ' ' + quizQuestions[0].categoryId+' '+'question: '+quizQuestions[0].question+' '+'Title: '+quizQuestions[0].title + ' ' + 'Answer:'+ ' ' + JSON.stringify(quizQuestions[0].answers));
      //console.log(quizQuestions[index]);
      //console.log(quizQuestions[index].answers); 

      this.setState({
        question: quizQuestions[0].question,
        title: quizQuestions[0].title,
        fact: quizQuestions[0].fact,
        answers: quizQuestions[0].answers,
        answer: quizQuestions[0].answers[0].answer,
        category: quizQuestions[0].category
      });
    });
  }

  handleAnswerSelected(event) {
    //log the current answer clicked
    event.preventDefault();
    console.log('answer clicked');
  }

  updateName(name) {
    this.setState({ name: name });
    // console.log(this.state);
    this.props.history.push('/overview-list');
  }

  forwardToSplash() {
    this.props.history.push('/joints-bones-teeth');
  }

  forwardToQuiz() {
    this.props.history.push('/quiz');
    console.log(this.state.category);
    console.log(this.state);

  }

  render() {
    return (
      <div className="container">

        <Header
          logowhite={this.state.logowhite}
        />

        <Switch>
          <Route exact path="/"
            component={HomeScreen}
          />
          <Route path="/whats-your-first-name" render={(props) =>
            <NameForm
              updater={(name) =>
                this.updateName(name)} />} />
          <Route path="/overview-list" render={(props) =>
            <ListView updater={(name) =>
              this.forwardToSplash(name)} />}
          />
          <Route path="/joints-bones-teeth" render={(props) =>
            <SplashScreenJointsBonesTeeth
              updater={() => { this.forwardToQuiz() }} />}
          />
          <Route path="/quiz" render={(props) =>
            <Quiz
              answers={this.state.answers}
              answer={this.state.answer}
              answerOptions={this.state.answerOptions}
              questionId={this.state.questionId}
              question={this.state.question}
              title={this.state.title}
              fact={this.state.fact}
              category={this.state.category}
              //questionTotal={quizQuestions.length}
              onAnswerSelected={this.handleAnswerSelected}
            />} />
        </Switch>
      </div>
    );
  }
}

const HomeScreen = () => (
  <Home />
);

const Init = () => (
  <Router>
    <Route component={App} />
  </Router>
);

export default Init;
