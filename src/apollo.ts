import ApolloClient, { Operation } from "apollo-boost";

const client = new ApolloClient({
    clientState: {
        defaults: {
            auth: {
                __typename: "Auth",
                isLoggedIn: Boolean(localStorage.getItem("jwt"))
            }
        },
        resolvers: {
            Mutation: {
                logUserIn: (_, { token }, { cache }) => {
                    localStorage.setItem("jwt", token);
                    cache.writeData({
                        auth: {
                            __typename: "Auth",
                            isLoggedIn: true
                        }
                    });
                    return null;
                },
                logUserOut: (_, __, { cache }) => {
                    localStorage.removeItem("jwt");
                    cache.writeData({
                        data: {
                            __typename: "Auth",
                            isLoggedIn: false
                        }
                    });
                    return null;
                }
            }
        }
    },
    // 발생하는 모든 리퀘스트 마다 동작 할 설정을 셋팅
    request: async (operation: Operation) => {
        // 발생하는 리퀘스트 마다 Context 를 셋팅하고 Context에 headers로 토큰을 담아 전송한다.
        operation.setContext({
            headers: {
                "X-JWT": localStorage.getItem("jwt") || ""
            }
        });
    },

    // ApolloClient 의 기본 옵션
    uri: "http://localhost:4000/graphql"
});

export default client;
