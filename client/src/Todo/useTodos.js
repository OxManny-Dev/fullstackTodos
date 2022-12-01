import {useState, useEffect, Component} from 'react';


export const useTodos = (url) => {

  const [todoInput, setTodoInput] = useState('');

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);


  // Tip use array method splice
  // useEffect= 3 class based components life cycle methods in 1 hook
  // componentDidMount, shouldComponentUpdate, componentWillUnmount
  // componentDidMount gets called after it renders html
  // if any value changes should this component re-render?
  // componentWillUnmount what to do when this component leaves the page
  // ex: unsubscribe to realtime events reset ui state back to default

  // function takes 2 parameters
  // 1  function that cannot be a promise = componentDidMount
  // 2 optional normally we pass an array inside
  // that array are values that we want to listen for
  // if those values change, the 1st param will get called again - shouldComponentUpdate
  useEffect(() => {
    console.log('inside of useEffect');
    setLoading(true);
    // 'https://jsonplaceholder.typicode.com/todos'
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      });

    // when we return a callback function in useEffect
    // this function will be called when this component leaves the page
    return () => {
      console.log('i am leaving the page');
      //   normally reset ui state, close modals that were open
    }
  }, []);



  return {
    todoInput, setTodoInput,
    loading,
    data,
  };
};