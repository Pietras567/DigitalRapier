export const AUTH_STATUS_COOKIE = 'auth_status';

export function setAuthStatus(status: boolean | null) {
    document.cookie = `${AUTH_STATUS_COOKIE}=${status};path=/;`;
}

export function getAuthStatus(): boolean | null {
    const cookies = document.cookie.split(';');
    const authCookie = cookies.find(cookie =>
        cookie.trim().startsWith(`${AUTH_STATUS_COOKIE}=`)
    );

    if (!authCookie) return null;

    const value = authCookie.split('=')[1];
    if (value === 'null') return null;
    return value === 'true';
}