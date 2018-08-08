import React from "react";
import update from 'immutability-helper';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header } from './components/Header';
import { Home } from './components/Home';
import { NameForm } from "./components/NameForm";
import { ListView } from './components/ListView';
import { SplashScreenJointsBonesTeeth } from './components/SplashScreenJointsBonesTeeth';
import { SplashScreenMetabolismEnergy } from './components/SplashScreenMetabolismEnergy';
import { SplashScreenBrainHeartHealth } from './components/SplashScreenBrainHeartHealth';
import Quiz from './components/Quiz';
import Result from './components/Result'
import quizQuestions from './api/quizQuestions';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      percentage: 20,
      categoryColor: 'progress-dark-orange',
      category: 'Joints & Bones',
      categoryTotals: 6,
      counter: null,
      questionId: 1,
      categoryId: 1,
      question: null,
      title: null,
      fact: null,
      answer: null,
      answers: null,
      result: null,
      firstname: null,
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this)
  }

  componentDidMount() {

    // if there are no answers in session Storage then display the first items from the looped array objects
    if (!sessionStorage.getItem('answers')) {
      quizQuestions.map((question, index) => {

        this.setState({
          categoryId: quizQuestions[0].categoryId,
          questionId: quizQuestions[0].questionId,
          question: quizQuestions[0].question,
          title: quizQuestions[0].title,
          fact: quizQuestions[0].fact,
          answers: quizQuestions[0].answers,
          category: quizQuestions[0].category,
          firstname: sessionStorage.getItem('firstname')
        });
      });
    } 
    // Otherwise get the data that is stored and persist that data to the current view
    else if (JSON.parse(sessionStorage.getItem('answers'))) {
      this.setState({
        categoryId: quizQuestions[0].categoryId,
        questionId: quizQuestions[0].questionId,
        question: sessionStorage.answers.question,
        title: quizQuestions[0].title,
        fact: quizQuestions[0].fact,
        answers: quizQuestions[0].answers,
        category: quizQuestions[0].category,
        firstname: sessionStorage.getItem('firstname')
      });
    }

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

    // function to repopulate states based on sessionStorage for questions/answers

    // check if answers extists in storage/state 
    // if exists get current answers from storage
    // append new answer to object
    // if it doesnt exist create starting object
    // check if questions exist 

    this.setState({
      answers: sessionStorage.setItem('answers', JSON.stringify({
        categoryId: this.state.categoryId,
        questionId: this.state.questionId,
        question: this.state.question,
        title: this.state.title,
        fact: this.state.fact,
        answer: answer,
        category: this.state.category,
        firstname: sessionStorage.getItem('firstname')
      }))
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
      category: quizQuestions[counter].category,
      categoryColor: quizQuestions[counter].categoryColor,
      questionId: quizQuestions[counter].questionId,
      question: quizQuestions[counter].question,
      title: quizQuestions[counter].title,
      fact: quizQuestions[counter].fact,
      answerOptions: quizQuestions[counter].answers,
      answer: answerSelected
    });

    console.log(this.state);

    if (counter === 6 ||
      counter === 12 ||
      counter === 18 ||
      counter === 24 ||
      counter === 28) {

      this.updateCategory(counter);

      this.setState({ percentage: this.state.percentage + 20 })
    } else {
      console.log('category did not update');
    }
  }

  updateCategory(counter) {

    if (counter === 6) {

      console.log('go to splash screen');
      this.props.history.push('/overview-list');

    } else if (counter === 12) {

      console.log('go to splash screen');
      this.props.history.push('/overview-list');

    } else if (counter === 24) {

      console.log('go to splash screen');
      this.props.history.push('./overview-list');

    } else if (counter === 28) {

      console.log('go to splash screen');
      this.props.history.push('./overview-list');
    }

    console.log('category got updated');

    this.setState({
      category: this.state.category,
      categoryId: this.state.categoryId + 1
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

  updateName() {
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
          <Route path="/overview-list" render={(props) => <ListView firstname={this.state.firstname} counter={this.state.counter} updater={(name) => this.forwardToSplash(name)} />} />
          <Route path="/joints-bones-teeth" render={(props) => <SplashScreenJointsBonesTeeth updater={() => { this.forwardToQuiz() }} />} />
          <Route path="/quiz" render={(props) =>
            <Quiz
              categoryColor={this.state.categoryColor}
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

          <Route path="/metabolism-energy" render={() => <SplashScreenMetabolismEnergy updater={() => { this.forwardToQuiz() }} />} />
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
