import {useReducer} from 'react';
import {counterReducer} from './utils/counterReducer';
import {useCounter} from './utils/CounterProvider';

export const Counter = () => {
  const counterState = useCounter();
  // { count: 0 }
  // useReducer takes 2 parameters.
  // 1st is the reducer in charge of managing state
  // 2nd is the state for the reducer to manage
  const [state, dispatch] = useReducer(counterReducer, counterState);


  return (
    <div>
      <h1>I am counter component {state.count}</h1>
      <input
        onChange={(event) => {
          // Actions are just objects that require a "type" property
          // everything else is optional
          dispatch({
            type: 'CHANGE_NAME',
            payload: event.target.value,
          })
        }}
        value={state.name}
      />
      <button
        onClick={() => {
          // Dispatch requires an object as a parameter
          // that object must have a "type" property
          // that object will become what "action" is
          // on the reducer that created it
          dispatch({type: 'INCREMENT'});
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({type: 'DECREMENT'});
        }}
      >
        Decrement
      </button>
    </div>
  );
};