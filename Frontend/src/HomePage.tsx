import './HomePage.css'
import {Component, onMount} from "solid-js";
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const HomePage: Component = () => {
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
        <div class="flex justify-end items-start min-h-screen w-full p-26">
            <div id="map" class="h-150 w-250 z-0 relative shadow-md border-4 border-purple-300 rounded-md">

            </div>
        </div>
    );
};

export default HomePage;