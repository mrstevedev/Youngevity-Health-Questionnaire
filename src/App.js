import React from "react";
import update from 'immutability-helper';
import { BrowserRouter as Router, Switch, Route, Link, browserHistory } from "react-router-dom";
import { Header } from './components/Header';
import { Home } from './components/Home';
import { NameForm } from "./components/NameForm";
import { ListView } from './components/ListView';
import { CategoryScreen } from './components/CategoryScreen';
import Quiz from './components/Quiz';
import Result from './components/Result'
import quizQuestions from './api/quizQuestions';
import splashData from './api/splashData';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      percentage: 20,
      progressColor: 'progress-dark-orange',
      category: null,
      counter: null,
      questionId: 1,
      categoryId: 1,
      prevCategoryId: null,
      question: null,
      title: null,
      fact: null,
      answer: null,
      answers: null,
      result: null,
      firstname: null
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.handleStickySelect = this.handleStickySelect.bind(this);
    this.setPrevQuestion = this.setPrevQuestion.bind(this);
  }

  componentDidMount() {

    // if there are no answers in session Storage then display the first items from the looped array objects
    if (!sessionStorage.getItem('answers')) {
      quizQuestions.map(() => {

        this.setState({
          categoryId: quizQuestions[0].categoryId,
          questionId: quizQuestions[0].questionId,
          question: quizQuestions[0].question,
          title: quizQuestions[0].title,
          fact: quizQuestions[0].fact,
          answers: quizQuestions[0].answers,
          category: quizQuestions[0].category.replace(/\s+/g, '-'),
          firstname: sessionStorage.getItem('firstname'),
          choices: quizQuestions[0].choices
        });
      });
    }

    else if (sessionStorage.getItem('answers')) {
      let answerObj = JSON.parse(sessionStorage.getItem('answers'));
      let currentQuestionID = answerObj.length;
      let currentQuestionData = quizQuestions[currentQuestionID];

      console.log('saved in storage: ' + currentQuestionID);
      console.log('the current question data: ' + JSON.stringify(currentQuestionData));
      console.log('state is: ' + JSON.stringify(this.state));

      this.setState({
        categoryId: currentQuestionData.categoryId,
        questionId: currentQuestionData.questionId,
        question: currentQuestionData.question,
        title: currentQuestionData.title,
        fact: currentQuestionData.fact,
        answers: currentQuestionData.answers,
        category: currentQuestionData.category.replace(/\s+/g, '-'),
        counter: currentQuestionData.questionId - 1,
        prevCategoryId: currentQuestionData.categoryId - 1,
        percentage: currentQuestionData.percentage,
        progressColor: currentQuestionData.progressColor,
        firstname: sessionStorage.getItem('firstname'),
        choices: currentQuestionData.choices
      });
    }
  }

  handleStickySelect(event, answer) {

    // add a class an add an active state to append over states
    event.currentTarget.classList.toggle('active');

    // grab the active pseudo active class and pass it along

    console.log(event.currentTarget.classList[2] === 'active');

    // if(event.currentTarget.classList[2] === 'active') {
    //   this.setUserAnswer(answer);
    // } 
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
    // create answer object 

    var answerObj = {
      categoryId: this.state.categoryId,
      questionId: this.state.questionId,
      answer: answer
    };
    // function to repopulate states based on sessionStorage for questions/answers

    // check if answers extists in storage/state 
    // if exists get current answers from storage
    if (sessionStorage.getItem('answers') !== null) {
      var answers = JSON.parse(sessionStorage.getItem('answers'));
    }
    // if it doesnt exist create starting object
    else {
      var answers = [answerObj];
    }
    // check if questions exist 
    for (var i = 0; i < answers.length; i++) {
      //  if exists, overwrite current value
      if (answers[i].questionId === this.state.questionId) {
        answers[i].answer = answer;
        break;
      } else {
        // push value into JSON object
        // append new answer to object
        answers.push(answerObj);
        break;
      }
    }
    this.setState({
      answers: sessionStorage.setItem('answers', JSON.stringify(answers))
    });
  }

  setPrevQuestion(questionId) {
    // this method handles the Go Back link
    const counter = this.state.counter - 1;

    this.setState({
      counter: counter,
      category: quizQuestions[counter].category.replace(/\s+/g, '-'),
      categoryId: quizQuestions[counter].categoryId,
      progressColor: quizQuestions[counter].progressColor,
      questionId: quizQuestions[counter].questionId,
      question: quizQuestions[counter].question,
      title: quizQuestions[counter].title,
      fact: quizQuestions[counter].fact,
      answers: quizQuestions[counter].answers,
    });

    if (counter === 5 ||
      counter === 11 ||
      counter === 17 ||
      counter === 23) {

      this.setState({
        percentage: this.state.percentage - 20,
      });
    }

    console.log(this.state);


    // if the current categories Id is now greater than it previously was
    if (this.state.categoryId < this.state.prevCategoryId) {
      console.log('previous category yo');
    }
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
      category: quizQuestions[counter].category.replace(/\s+/g, '-'),
      categoryId: quizQuestions[counter].categoryId,
      progressColor: quizQuestions[counter].progressColor,
      questionId: quizQuestions[counter].questionId,
      question: quizQuestions[counter].question,
      title: quizQuestions[counter].title,
      fact: quizQuestions[counter].fact,
      answers: quizQuestions[counter].answers,
      answer: answerSelected,
      percentage: this.state.percentage,
      prevCategoryId: quizQuestions[counter].categoryId - 1,
    });

    console.log(this.state);

    if (counter === 6 ||
      counter === 12 ||
      counter === 18 ||
      counter === 24) {

      this.updateCategory();
    }
  }

  updateCategory() {

    this.setState({
      category: this.state.category.replace(/\s+/g, '-'),
      percentage: this.state.percentage + 20,
    });
    console.log('checking current state within updateCategory()');
    console.log(this.state);
    if (this.state.categoryId === 5) {
      this.setState({
        lastCategory: this.state.categoryId
      });
    }

    // if the current categories Id is now greater than it previously was
    if (this.state.categoryId > this.state.prevCategoryId) {
      this.props.history.push('/overview-list');
    }
  }

  getResults() {
    console.log('getResults() ran');
  }

  updateName() {
    this.props.history.push('/overview-list');
  }

  forwardToSplash() {
    console.log(this.state)
    if (this.state.categoryId > this.state.prevCategoryId) {
      this.props.history.push(`/${this.state.category}`);
    }
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
          <Route path="/whats-your-first-name" render={(props) =>
            <NameForm updater={(name) => this.updateName(name)} />}
          />
          <Route path="/overview-list" render={(props) =>
            <ListView
              categoryId={this.state.categoryId}
              firstname={this.state.firstname}
              counter={this.state.counter}
              updater={(name) => this.forwardToSplash(name)} />}
          />
          <Route
            path={`/${this.state.category}`}
            render={(props) =>
              <CategoryScreen
                categoryId={this.state.categoryId}
                updater={() => { this.forwardToQuiz() }} />}
          />
          <Route path="/quiz" render={(props) =>
            <Quiz
              lastCategory={this.state.lastCategory}
              categoryId={this.state.categoryId}
              category={this.state.category}
              questionId={this.state.questionId}
              question={this.state.question}
              progressColor={this.state.progressColor}
              percentage={this.state.percentage}
              answers={this.state.answers}
              answer={this.state.answer}
              answerOptions={this.state.answerOptions}
              title={this.state.title}
              fact={this.state.fact}
              name={this.state.name}
              questionTotal={quizQuestions.length}
              onAnswerSelected={this.handleAnswerSelected}
              onStickySelect={this.handleStickySelect}
              onPrevQuestion={this.setPrevQuestion}
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
