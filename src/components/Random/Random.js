import React from 'react';
import {useActions, useRandomAPI} from '../../features/random';
import classes from './Random.module.css';

const Random = () => {
  /**
   *  Get count value from Redux store. We defined selector
   *  (state => state.counter.value) inside counter feature folder,
   *  to make component global state agnostic
   */
  const {number, isLoading, hasError, isFulfilled} = useRandomAPI();

  /** Create incrementCounter action, using custom hook from feature */
  const {getNumber} = useActions();

  /** Define pristine state condition, when user didn't do any actions */
  const isPristine = !isLoading && !hasError && !isFulfilled;

  return (
    <div className={classes.counter}>
      <h2 className={classes.header}>Async Random</h2>
      <button className={classes.button} type="button" onClick={getNumber}>
        Get random number
      </button>
      {isPristine && <div>Click the button to get random number</div>}
      {isLoading && <div>Getting number</div>}
      {isFulfilled && (
        <div>
          Number from random.org: <strong>{number}</strong>
        </div>
      )}
      {hasError && <div>Ups...</div>}
    </div>
  );
};

export default Random;
