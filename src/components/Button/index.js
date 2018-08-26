import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Button = ({ handleDisplayCards, evaluateButtonClass }) => {
  return (
    <div className={'button-container'}>
      <div className={evaluateButtonClass('people')} id='people' onClick={(e) => { handleDisplayCards(e); }}>people</div>
      <div className={evaluateButtonClass('planets')}  id='planets' onClick={(e) => handleDisplayCards(e)}>planets</div>
      <div className={evaluateButtonClass('vehicles')}  id='vehicles' onClick={(e) => handleDisplayCards(e)}>vehicles</div>
    </div>
  );
};

Button.propTypes = {
  handleDisplayCards: PropTypes.func,
  evaluateButtonClass: PropTypes.func
};

export default Button;