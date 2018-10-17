import React from 'react'; //import react module
import PropTypes from 'prop-types';
import ScreenRow from './screenRow.jsx';

const Screen = (props) => {
  return (
    <div className="screen">
      <ScreenRow value={props.question}/>
      <ScreenRow value={props.answer}/>
    </div>
  );
}

Screen.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
}

//export component
export default Screen;