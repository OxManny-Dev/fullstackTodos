// We can export multiple things
// by just using the export keyword per file

// the catch is that we can only
// have 1 default export per file

export const Todo = ({ name, todos}) => {



  return (
    <div>
      <h1>This is the Todo App</h1>
      <p>Hi my name is {name} and these are my todos</p>
      <ul>
        {
          todos.length === 0 ?
            <h1>No Todos Yet</h1>
            :
            todos.map(todo => <li>{todo}</li>)
        }
      </ul>
    </div>
  );
};




