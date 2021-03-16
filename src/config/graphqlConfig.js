import { ApolloClient, InMemoryCache, makeVar } from '@apollo/client'

export const favVars = makeVar([])

const client = new ApolloClient({
  uri: 'https://graphql-pokeapi.vercel.app/api/graphql',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          favorite: {
            read: () => {
              return favVars()
            }
          }
        }
      }
    }
  })
})

export default client