import React from "react";
import update from 'immutability-helper';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from './components/Header';
import { Home } from './components/Home';
import { NameForm } from "./components/NameForm";
import { ListView } from './components/ListView';
import { SplashScreenJointsBonesTeeth } from './components/SplashScreenJointsBonesTeeth';
import Quiz from './components/Quiz';
import Result from './components/Result'
import quizQuestions from './api/quizQuestions';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      percentage: 20,
      category: 'Joints & Bones',
      categoryTotals: 6,
      counter: 1,
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
      firstname: null,
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
  }

  componentDidMount() {

    quizQuestions.map((question, index) => {

      this.setState({
        questionId: quizQuestions[0].questionId,
        question: quizQuestions[0].question,
        title: quizQuestions[0].title,
        fact: quizQuestions[0].fact,
        answers: quizQuestions[0].answers,
        category: quizQuestions[0].category,
        firstname: sessionStorage.getItem('firstname'),
      });
    });
    console.log(this.state);
  }

  handleAnswerSelected(event, answer) {

    this.setUserAnswer(answer);

    let currTarget = event.currentTarget;
    let answerSelected = currTarget.getAttribute('data-value');

    if (this.state.questionId < quizQuestions.length) {

      let userItemOver = document.getElementById(answerSelected);
      if (userItemOver) {
        userItemOver.classList.remove('over');
        userItemOver.classList.add('over');
      }

      let questionsContainer = document.getElementById('questionsContainer');

      if (questionsContainer) {
        questionsContainer.classList.remove('animated', 'fadeIn');
        questionsContainer.classList.add('animated', 'fadeOut');
      }

      setTimeout(() => this.setNextQuestion(answerSelected), 400);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 400);
    }
  }

  setUserAnswer(answer) {
    console.log('Setting the UserAnswer to:' + ' ' + answer);
    const updatedAnswersCount = update(this.state.answersCount, {
      [answer]: { $apply: (currentValue) => currentValue + 1 }
    });

    this.setState({
      answersCount: updatedAnswersCount,
      answer: answer
    });
  }

  setNextQuestion(answerSelected) {

    let questionsContainer = document.getElementById('questionsContainer');

    if (questionsContainer) {
      questionsContainer.classList.remove('animated', 'fadeOut');
      questionsContainer.classList.add('animated', 'fadeIn');
    }

    let userItemOver = document.getElementById(answerSelected);
    if (userItemOver) {
      userItemOver.classList.remove('over');
    }

    const counter = this.state.counter + 1;

    this.setState({
      counter: counter,
      question: quizQuestions[counter].question,
      title: quizQuestions[counter].title,
      fact: quizQuestions[counter].fact,
      answerOptions: quizQuestions[counter].answers,
      answer: answerSelected
    });

    if (counter === 6  ||
        counter === 12 ||
        counter === 18 ||
        counter === 24 ||
        counter === 28) {
      
      this.updateCategory();
      
      this.setState({ percentage: this.state.percentage + 20 })
    } else {
      console.log('category did not update');
    }
  }

  updateCategory() {
  
    console.log('category got updated');

    this.setState({
      category: 'Metabolism & Energy',
      questionId: this.state.questionId + 1
    });
    console.log(this.state);
  }

  getResults() {
    console.log('getResults() ran');

    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter((key) => answersCount[key] === maxAnswerCount);
  }

  updateName(name) {
    this.setState({ name: name });
    this.props.history.push('/overview-list');
  }

  forwardToSplash() {
    this.props.history.push('/joints-bones-teeth');
  }

  forwardToQuiz() {
    this.props.history.push('/quiz');
    console.log(this.state);

  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    );
  }

  render() {
    return (
      <div className="container">

        <Header logowhite={this.state.logowhite} />

        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route path="/whats-your-first-name" render={(props) => <NameForm updater={(name) => this.updateName(name)} />} />
          <Route path="/overview-list" render={(props) => <ListView updater={(name) => this.forwardToSplash(name)} />} />
          <Route path="/joints-bones-teeth" render={(props) => <SplashScreenJointsBonesTeeth updater={() => { this.forwardToQuiz() }} />} />
          <Route path="/quiz" render={(props) =>
            <Quiz
              percentage={this.state.percentage}
              answers={this.state.answers}
              answer={this.state.answer}
              answerOptions={this.state.answerOptions}
              category={this.state.category}
              questionId={this.state.questionId}
              question={this.state.question}
              title={this.state.title}
              fact={this.state.fact}
              name={this.state.name}
              questionTotal={quizQuestions.length}
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
