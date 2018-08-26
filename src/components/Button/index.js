import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Button = ({ handleDisplayCards, evaluateButtonClass }) => {
  return (
    <div className={'button-container'}>
      <div className={evaluateButtonClass('people')} id='people' onClick={(event) => { handleDisplayCards(event); }}>people</div>
      <div className={evaluateButtonClass('planets')}  id='planets' onClick={(event) => handleDisplayCards(event)}>planets</div>
      <div className={evaluateButtonClass('vehicles')}  id='vehicles' onClick={(event) => handleDisplayCards(event)}>vehicles</div>
    </div>
  );
};

Button.propTypes = {
  handleDisplayCards: PropTypes.func,
  evaluateButtonClass: PropTypes.func
};

export default Button;