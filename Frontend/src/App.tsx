import './App.css'
import AccountPage from "./AccountPage.tsx";
import {onMount} from "solid-js";


export default function App() {
    function checkLocalisation() {
        fetch('https://ipapi.co/json/')
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                localStorage.setItem('latitude', data.latitude);
                console.log(localStorage.getItem('latitude'));
                localStorage.setItem('longitude', data.longitude);
                console.log(localStorage.getItem('longitude'));
                localStorage.setItem('language', data.languages)
                console.log(localStorage.getItem('language'));
                localStorage.setItem('currency', data.currency)
                console.log(localStorage.getItem('currency'));
            })
    }

    onMount(() => {
        checkLocalisation();
    })

    return (
        <div>
            <AccountPage/>
        </div>
    );
}