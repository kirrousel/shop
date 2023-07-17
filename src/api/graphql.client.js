/* eslint-env node */
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'

// To bypass CORS locally
const graphqlEndpoint = () =>
  process.env.NODE_ENV === 'development' ? '/graphql' : 'https://venia.magento.com/graphql'

// HTTP connection to the API
const httpLink = createHttpLink({
  uri: graphqlEndpoint
})

// Create the apollo client
export const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})
