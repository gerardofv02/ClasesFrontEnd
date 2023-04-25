import{InMemoryCache, ApolloClient, NormalizedCacheObject} from "@apollo/client";

// const client = new ApolloClient({
//     uri: "https://loquesea.com/graphql",
//     cache: new InMemoryCache(),
// })

let client : ApolloClient<NormalizedCacheObject>|undefined = undefined;

export const getSSRClient = () => {
        return new ApolloClient({
            uri: API_SSR,
            cache: new InMemoryCache(),
        })
}

export const CSRClient = new ApolloClient({
    uri: API_CSR;
    cache: new InMemoryCache(),
})
