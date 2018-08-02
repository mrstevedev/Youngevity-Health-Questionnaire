import React from 'react';

function Title(props) {
    return (
        <div className="title">
            <h4>{props.content}</h4>
        </div>
    );
}

Title.propTypes = {
    //content: React.PropTypes.string.isRequired
  };

export default Title;