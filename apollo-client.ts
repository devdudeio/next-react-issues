import { ApolloClient, InMemoryCache } from "@apollo/client";
import { relayStylePagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                search: relayStylePagination(["query"]),
            },
        },
    },
});

const client = new ApolloClient({
    uri: "https://api.github.com/graphql",
    cache,
    headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`,
    }
});

export default client;