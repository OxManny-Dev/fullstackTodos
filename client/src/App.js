import {
  Todo,
} from './Todo';


// Functional components are functions
// that return html

//  attributes === props

const App = () => {
  return (
    <div className='green'>
      <Todo
        name={'Manny'}
        todos={[
          'Take the trash out',
          'Do the dishes',
          'Pay the bills',
        ]}
      />
      <Todo
        name={'Joseph'}
        todos={[
          'Wake up',
          'Cry',
          'Sleep',
        ]}
      />
      <h1 className='container manny weirdo'>Hello World</h1>
    </div>
  );
};

// Letting other files such as index.js use it
// module.exports = App;
export default App;


