import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import './index.css';
import App from './App';
// import * as serviceWorker from '../../../unit_testing/serviceWorker';

const client = new ApolloClient({
    // uri: 'https://countries-274616.ew.r.appspot.com',
    uri: 'https://countries.trevorblades.com/',
    cache: new InMemoryCache()
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
