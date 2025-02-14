import './App.css'
import {Component, onMount} from "solid-js";


const App: Component = (props) => {
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
        <div class="relative inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div class="relative bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
                <nav class="absolute top-10 left-10">
                    <a href="/" class="pl-6">Home</a>
                    <a href="/account" class="pl-6">Account</a>
                </nav>
                {// @ts-ignore
                props.children}
            </div>
        </div>
    );
}

export default App;