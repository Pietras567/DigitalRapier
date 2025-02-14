/* @refresh reload */
import { render } from 'solid-js/web'
import './index.css'
import App from './App.tsx'
import { Router, Route } from "@solidjs/router";
import AccountPage from "./AccountPage.tsx";

 const root = document.getElementById('root')

render(
    () => (
        <Router root={App}>
            <Route path="/account" component={AccountPage} />
        </Router>
    ),
    root!
);