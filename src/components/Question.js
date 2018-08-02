import React from 'react';

function Question(props) {

  return (
    <div className="question">
      <h2>{props.content}</h2>
    </div>
  );

}

Question.propTypes = {
  //content: React.PropTypes.string.isRequired
};

export default Question;
