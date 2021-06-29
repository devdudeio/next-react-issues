import 'tailwindcss/tailwind.css'
// import {Provider} from 'next-auth/client'
// import ApolloProviderWithToken from "../providers/ApolloProviderWithToken";
import {ApolloProvider} from "@apollo/client";
import client from "../apollo-client";
import {AppProps} from "next/app";

const MyApp = ({Component, pageProps}: AppProps)  => {
    return (
        // <Provider session={pageProps.session}>
            <ApolloProvider client={client}>
                <Component {...pageProps} />
            </ApolloProvider>
        // </Provider>
    )
}

export default MyApp



