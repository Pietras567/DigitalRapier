import { Switch, Match  } from 'solid-js'
import './App.css'
import { useAuth } from "./hooks/useAuth";
import Auth from "./auth.tsx";
import { setAuthStatus } from "./utils/cookies";

export default function App() {
    const { isAuthenticated, authStatus } = useAuth();

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
                        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900" />
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
                        <Auth />
                    </div>
                </Match>
            </Switch>
        </div>
    );
}
