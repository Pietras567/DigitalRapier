import {Switch, Match, onMount, createSignal} from 'solid-js'
import './App.css'
import { useAuth } from "./hooks/useAuth";
import Auth from "./auth.tsx";
import Register from "./register.tsx";
import { setAuthStatus } from "./utils/cookies";

export default function App() {
    const { isAuthenticated, authStatus } = useAuth();
    const [isRegistered, setIsRegistered] = createSignal(false);

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', {
                method: 'POST',
                credentials: 'include'
            });
            setAuthStatus(false);
            window.location.reload();
        } catch (error) {
            console.error('Błąd wylogowania:', error);
        }
    };

    onMount(() => {
        console.log("Komponent zamontowany!");

        const script = document.createElement("script");
        script.src = "app.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            console.log("Komponent odmontowany!");
            document.body.removeChild(script);
        };
    })

    return (
        <div class="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div
                class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
                <div class="container mx-auto p-4">
                    <div class="flex items-start mb-4 z-50 absolute right-10 top-10">
                        <img src="src/assets/moon.svg" class="moon cursor-pointer" alt="" style="height: 60px"/>
                        <img src="src/assets/sun.svg" class="sun cursor-pointer" alt="" style="height: 60px"/>
                    </div>

                    <Switch>
                        {/* Pokazuj loader podczas sprawdzania autentykacji */}
                        <Match when={authStatus.loading && isAuthenticated() === null}>
                            <div class="flex justify-center">
                                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"/>
                            </div>
                        </Match>

                        {/* Pokazuj zawartość dla zalogowanych użytkowników */}
                        <Match when={isAuthenticated()}>
                            <div>
                                <button
                                    onClick={handleLogout}
                                    class="bg-red-500 text-white p-2 rounded"
                                >
                                    Wyloguj się
                                </button>
                            </div>
                        </Match>

                        {/* Pokazuj formularz logowania dla niezalogowanych */}
                        <Match when={!isAuthenticated()}>
                            <div class="max-w-md mx-auto">
                                <Switch>
                                    <Match when={!isRegistered()}>
                                        <Register/>
                                    </Match>
                                    <Match when={isRegistered()}>
                                        <Auth/>
                                    </Match>
                                </Switch>
                            </div>
                        </Match>
                    </Switch>
                </div>
            </div>
        </div>
    );
}
