import {useState} from 'react';
// We can export multiple things
// by just using the export keyword per file

// the catch is that we can only
// have 1 default export per file

const ourBlue = '#0000ee';

// For React to make UI updates to the UI,
// we need to trigger a "state" change
//When a components state changes,
// that component and all of its children
// will re-render


export const Todo = ({name,}) => {

  const [todoInput, setTodoInput] = useState('');

  const [todos, setTodos] = useState([]);

  // Tip use array method splice

  return (
    <div>
      <h1>This is the Todo App</h1>
      <p>Hi my name is {name} and these are my todos</p>
      <input
        value={todoInput}
        onChange={(event) => {
          setTodoInput(event.target.value);
        }}
      />
      <button
        onClick={() => {
          const newTodos = [...todos, todoInput];
          setTodos(newTodos);
          setTodoInput('');
          //   When the user clicks on the submit button
          //  update the todos state with the todoInput
          //  Catch: you cannot modify todos directly
          //  bonus: after the todo is added, reset the todoInput back to nothing
        }}
      >
        Submit
      </button>

      <ul>
        {
          todos.length === 0 ?
            <h1>No Todos Yet</h1>
            :
            todos.map((todo, index) => {
              return (
                <div
                  key={index}
                  style={{
                    color: index % 2 === 0 ? ourBlue : 'green',
                    display: 'flex'
                  }}
                >
                  <li>{todo}</li>
                  <button
                    onClick={() => {
                      const newTodos = [...todos];
                      newTodos.splice(index, 1);
                      setTodos(newTodos);
                    }}
                  >
                    X
                  </button>
                </div>
              );
            })
        }
      </ul>
    </div>
  );
};



