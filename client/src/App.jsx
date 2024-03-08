import './App.css'

import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';

import Nav from './components/Nav'
import { Outlet } from "react-router-dom";
import Foot from './components/Foot';

const httpLink = createHttpLink({
  uri: '/graphql'
})

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (<div>
    <ApolloProvider client={client}>
    <Nav/>
    <main>
    <Outlet/>
    </main>
    <Foot/>
    </ApolloProvider>
  </div>)
}
export default App
