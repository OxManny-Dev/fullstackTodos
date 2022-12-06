import {useState} from 'react';
import {useQuery, useMutation} from '@apollo/client';
import {PacmanLoader} from "react-spinners";

import {CREATE_USER} from './graphql/mutations/createUser';
import {FETCH_USERS} from './graphql/queries/fetchUsers'
import CounterProvider, {useCounter} from './utils/CounterProvider';


import {useSelector, useDispatch,} from 'react-redux';
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

const Four = () => {
  const {counter, setCounter} = useCounter();

  console.log('4 rendered')
  return (
    <div>
      <h1>Component Four</h1>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};


const Five = () => {
  const {counter} = useCounter()
  console.log('5 rendered')
  return (
    <div>
      <h1>Component Five</h1>
      <p>{counter}</p>
    </div>
  );
};


const MyComponentWithChildren = ({children, backgroundColor}) => {

  return (
    <div
      style={{
        backgroundColor: backgroundColor || 'hotpink',
        color: 'green',
      }}
    >
      <h1>Manny is cool</h1>
      {children}
    </div>
  );
};


const App = () => {

  const {count} = useSelector((state) => state.counter);

  const {
    data,
    loading: isFetchUsersLoading,
    error,
  } = useQuery(FETCH_USERS);

  // 2 elements
  // 1st one is the actual function for calling the mutation
  // 2nd one is an object that looks like { data, loading, error }
  const [
    createUserMutation,
    {
      data: createUserMutationData,
      loading: isCreateUserMutationLoading,
      error: createUserMutationError,
    }
  ] = useMutation(CREATE_USER, {
    refetchQueries: [FETCH_USERS]
  });


  const [firstNameInput, setFirstNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');


  // useQuery is a built-in useEffect

  // console.log(storeState);

  // useState returns an array with 2 elements
  // 1st element = whatever pass as a parameter to useState
  // 2nd element = is a function for changing the value of the 1st element
  // const [count, setCount] = useState(0);


  return isFetchUsersLoading ?
    <PacmanLoader loading={isFetchUsersLoading}/>
    :
    <div className='green'>

      <CounterProvider>
        <Four/>
        <Five/>
      </CounterProvider>


      <MyComponentWithChildren
        backgroundColor='blue'
      >
        <p>My favorite videogames</p>
        <ul>
          <li>Final Fantasy VII</li>
          <li>Final Fantasy Tactics</li>
          <li>League of Legends</li>
        </ul>
      </MyComponentWithChildren>


      <MyComponentWithChildren>
        <h1>Hello World</h1>
      </MyComponentWithChildren>

      <form>
        <input
          name='firstName'
          value={firstNameInput}
          onChange={(e) => setFirstNameInput(e.target.value)}
        />
        <input
          name='lastName'
          value={lastNameInput}
          onChange={(e) => setLastNameInput(e.target.value)}
        />

        <button
          onClick={async (event) => {
            event.preventDefault();

            try {
              await createUserMutation({
                variables: {
                  firstName: firstNameInput,
                  lastName: lastNameInput,
                }
              });

              // window.location.reload();

            } catch (error) {
              console.log(error);
            }

          }}
        >
          Create User
        </button>
      </form>


      {
        data.fetchUsers.map(({_id, firstName, lastName, fullName}) => {
          return (
            <div key={_id}>
              <p>{firstName} {lastName}</p>
              <p>{fullName}</p>
            </div>
          );
        })
      }


      <p>Counter: {count}</p>
      <button
        onClick={() => {
          // setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          if (count > 0) {
            // setCount(count - 1);
          }
        }}
      >
        Decrement
      </button>

      <h1 className='container manny weirdo'>Hello World</h1>
    </div>
};

// Letting other files such as index.js use it
// module.exports = App;
export default App;


