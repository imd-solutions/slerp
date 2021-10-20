import fetch from "node-fetch";
import {createHttpLink} from "apollo-link-http";
import {InMemoryCache} from "apollo-cache-inmemory";

import ApolloClient from "apollo-client";

export default new ApolloClient({
    link: createHttpLink({
        uri: process.env.GRAPHQL_URL,
        fetch: fetch as any,
        headers: {
            authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJoYXN1cmEiLCJleHAiOjE2NTAyOTUyMjEsImh0dHBzOi8vaGFzdXJhLmlvL2p3dC9jbGFpbXMiOnsieC1oYXN1cmEtYWxsb3dlZC1yb2xlcyI6WyJwYXJ0bmVyIl0sIngtaGFzdXJhLWRlZmF1bHQtcm9sZSI6InBhcnRuZXIiLCJ4LWhhc3VyYS1wYXJ0bmVyLWlkIjoiOGM1YjkwNWEtZWY5OC00ZjNmLWEyYzgtZGNkMmM0YTAzOTYxIn0sImlhdCI6MTYzNDU3MDQyMSwiaXNzIjoic2xlcnAiLCJqdGkiOiIycW5paThxYmhpOTBmZm5mMWcwMDA3dTUiLCJuYmYiOjE2MzQ1NzA0MjF9.E_R1y9W4_ZDiiE4aYbLqo74XtcWwJMJjRhvOZIFdEqU',
        }
    }),
    cache: new InMemoryCache(),
});
