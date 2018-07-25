import React from 'react';

function Question(props) {

  return (
    <h2 className="question">{props.content}</h2>
  );

}

Question.propTypes = {
};

export default Question;
