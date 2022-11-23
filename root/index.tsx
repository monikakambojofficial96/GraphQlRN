import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react"
import { SafeAreaView, Text } from "react-native"
import Home from "../src/Components/Home"

const Root = () => {

    const client = new ApolloClient({
        uri: 'https://countries.trevorblades.com/graphql',
        cache: new InMemoryCache()
    });
    return (
        <ApolloProvider client={client}>
            <Home />
        </ApolloProvider>
    )
}
export default Root