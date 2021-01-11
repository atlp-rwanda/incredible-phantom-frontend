import '../styles/landingPage.scss';
import React from 'react';
import { connect } from 'react-redux';
import { counterAction } from '../actionCreators/counter';

const mapStateToProps = (state) => ({ nbr: state.counterReducer.nbr });

const mapDispatchToProps = (dispatch) => ({
  add2: (nbr) => dispatch(counterAction(nbr)),
});

const Counter = ({ add2, nbr }) => {
  const handleAdd = () => add2(nbr);

  return (
    <div className='welcome-message'>
      <p>{nbr}</p>
      <button
        type='button'
        onClick={() => {
          handleAdd();
        }}
      >
        Add 2
      </button>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
