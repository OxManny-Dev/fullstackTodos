import {useTodos} from "./useTodos";
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

// in React functional components must be "Pure functions"
//  cannot cause "side effects" - API request
// they must return the same thing given the same input

export const Todo = ({name,}) => {
  const {
    todoInput, setTodoInput,
    loading,
    data,
  } = useTodos('https://jsonplaceholder.typicode.com/todos');



  return loading ?
    <h1>Todos are loading</h1>
    :
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
          const newTodos = [...data, todoInput];
          // setTodos(newTodos);
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
          data.length === 0 ?
            <h1>No Todos Yet</h1>
            :
            data.map((todo, index) => {
              return (
                <div
                  key={index}
                  style={{
                    color: index % 2 === 0 ? ourBlue : 'green',
                    display: 'flex'
                  }}
                >
                  <li>{todo.title}</li>
                  <button
                    onClick={() => {
                      const newTodos = [...data];
                      newTodos.splice(index, 1);
                      // setTodos(newTodos);
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
};



