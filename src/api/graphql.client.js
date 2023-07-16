import {ApolloClient, ApolloLink, createHttpLink, from, InMemoryCache} from '@apollo/client/core'

// HTTP connection to the API
const httpLink = createHttpLink({
    uri: 'https://venia.magento.com/graphql',
    fetchOptions: {
        mode: 'no-cors'
    }
})

// Cache implementation
const cache = new InMemoryCache()

const authMiddleware = new ApolloLink((operation, forward) => {
    operation.setContext({
        headers: {
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Origin': '*',
            "Content-Type": 'application/json',
            'Apollo-Require-Preflight': false,
        },
        fetchOptions: {
            mode: 'no-cors'
        }
    });
    return forward(operation);
});

// Create the apollo client
export const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
})
