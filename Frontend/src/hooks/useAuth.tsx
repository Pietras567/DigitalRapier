import { createSignal, createResource, onMount } from "solid-js";
import { setAuthStatus, getAuthStatus } from "../utils/cookies";

export function useAuth() {
    const [isAuthenticated, setIsAuthenticated] = createSignal<boolean | null>(getAuthStatus());
    
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
        try {
            const response = await originalFetch(...args);
            if (response.status === 401) {
                setIsAuthenticated(false);
                setAuthStatus(false);
            }
            return response;
        } catch (error) {
            setIsAuthenticated(false);
            setAuthStatus(false);
            throw error;
        }
    };

    const [authStatus] = createResource(async () => {
        try {
            const response = await fetch('/api/auth/validate', {
                credentials: 'include'
            });

            const data = await response.json();
            setIsAuthenticated(data.authenticated);
            setAuthStatus(data.authenticated);
            return data.authenticated;
        } catch (error) {
            setIsAuthenticated(false);
            setAuthStatus(false);
            return false;
        }
    });

    onMount(() => {
        // Jeśli nie ma ciasteczka, ustawiamy na false
        if (getAuthStatus() === null) {
            setAuthStatus(false);
        }
    });

    return {
        isAuthenticated,
        authStatus
    };
}