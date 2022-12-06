import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloClient, InMemoryCache, ApolloProvider,} from '@apollo/client';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {rootReducer} from './reducers';

import App from './App';


const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const store = createStore(rootReducer);


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App/>
    </Provider>
  </ApolloProvider>
);
