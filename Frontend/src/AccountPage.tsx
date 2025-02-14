import {Switch, Match, createSignal, Component} from 'solid-js'
import './AccountPage.css'
import { useAuth } from "./hooks/useAuth";
import Auth from "./auth.tsx";
import Register from "./register.tsx";
import { setAuthStatus } from "./utils/cookies";

const AccountPage: Component = () => {
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

    return (
        <div class="container mx-auto p-4">


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

                        <div
                            class="text-center mt-4 absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30">
                            <button
                                class="text-blue-500 underline"
                                onClick={() => setIsRegistered(!isRegistered())}
                            >
                                {isRegistered() ? "Nie masz konta? Zarejestruj się" : "Masz już konto? Zaloguj się"}
                            </button>
                        </div>
                    </div>
                </Match>
            </Switch>
        </div>
    );
}

export default AccountPage;
