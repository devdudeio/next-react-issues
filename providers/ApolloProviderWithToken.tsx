import {useState, useEffect, memo} from 'react';
import useCookie from 'react-use-cookie';

import {
    ApolloClient,
    HttpLink,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";
import { useSession, getSession } from 'next-auth/client'
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";

function createApolloClient(accessToken) {
    const authLink = setContext((request, { headers }) => {
        return {
            headers: {
                ...headers,
                ...(accessToken && {
                    Authorization: `Bearer ${accessToken}`
                })
            }
        };
    });

    const httpLink = new HttpLink({
        uri: process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_URL
    });

    const cache = new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    search: relayStylePagination(["query"]),
                },
            },
        },
    });

    //see https://github.com/apollographql/react-apollo/issues/3595#issuecomment-577706573 (memoize not working)
    return new ApolloClient({ cache, link: authLink.concat(httpLink) });
}

const ApolloProviderWithAuth =({ children }) => {
    const [accessToken, setAccessToken] = useState('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');
    useEffect(() => {
        (async () => {
            let tokenFromApi;

            try {
                tokenFromApi = await fetch('/api/auth/session')
                    .then(res => res.json())
                    .then(res => res.accessToken);

            } catch (err) {
                    console.error(err)
            }

            if (tokenFromApi) {
                setAccessToken(tokenFromApi);
            }
        })();
    }, [accessToken]);

    const client = createApolloClient('');

    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloProviderWithAuth;