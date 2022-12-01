import {useState} from 'react';

import {
  Todo,
} from './Todo';


// Functional components are functions
// that return html

//  attributes === props

// For React to make UI updates to the UI,
// we need to trigger a "state" change
// When a components state changes,
// that component and all of its children
// will re-render


const App = () => {

  // useState returns an array with 2 elements
  // 1st element = whatever pass as a parameter to useState
  // 2nd element = is a function for changing the value of the 1st element
  const [count, setCount] = useState(0);


  return (
    <div className='green'>
      <p>Counter: {count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>
      {
        count % 2 === 0 ?
          <Todo
            name={'Manny'}
            todos={[
              'Take the trash out',
              'Do the dishes',
              'Pay the bills',
            ]}
          />
          :
          null
      }
      {/*<Todo*/}
      {/*  name={'Joseph'}*/}
      {/*  todos={[*/}
      {/*    'Wake up',*/}
      {/*    'Cry',*/}
      {/*    'Sleep',*/}
      {/*  ]}*/}
      {/*/>*/}

      <h1 className='container manny weirdo'>Hello World</h1>
    </div>
  );
};

// Letting other files such as index.js use it
// module.exports = App;
export default App;


