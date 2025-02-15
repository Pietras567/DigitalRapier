import './HomePage.css'
import {Component, createSignal, Match, onMount, Switch} from "solid-js";
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const HomePage: Component = () => {
    const [offerType, setOfferType] = createSignal(0);

    let map;

    function createMap() {
        map = L.map('map').setView([52.237049, 21.017532], 6);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

    }

    onMount(() => {
        createMap();
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    });

    return (
        <div class="flex flex-col w-full">
            <div class="flex gap-4 p-4 justify-center">
                <button
                    class={`px-4 py-2 rounded-md w-40 transition-colors ${
                        offerType() === 0
                            ? 'bg-purple-600 dark:bg-purple-500 text-white'
                            : 'bg-purple-200 hover:bg-purple-300 dark:bg-purple-900 dark:hover:bg-purple-800 dark:text-purple-100'
                    }`}
                    onClick={() => {setOfferType(0); createMap()}}
                >
                    Oferty pracy
                </button>
                <button
                    class={`px-4 py-2 rounded-md w-40 transition-colors ${
                        offerType() === 1
                            ? 'bg-purple-600 dark:bg-purple-500 text-white'
                            : 'bg-purple-200 hover:bg-purple-300 dark:bg-purple-900 dark:hover:bg-purple-800 dark:text-purple-100'
                    }`}
                    onClick={() => setOfferType(1)}
                >
                    Usługi freenlancer
                </button>
            </div>


            <Switch>
                <Match when={offerType() === 0}>
                    <div class="flex justify-end items-start min-h-screen w-full p-26">
                        <div id="map" class="h-150 w-250 z-0 relative shadow-md border-4 border-purple-300 rounded-md">

                        </div>
                    </div>
                </Match>
                <Match when={offerType() === 1}>
                    <div class="flex justify-center items-start min-h-screen w-full p-26">
                        Oferta 1
                    </div>
                </Match>
            </Switch>
        </div>
    );
};

export default HomePage;