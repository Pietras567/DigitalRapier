import "./auth.css";
import {createSignal, Component } from "solid-js";

const auth: Component = () => {
    // Deklaracja zmiennej reaktywnej za pomocą createSignal
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");
    const [confirmPassword, setConfirmPassword] = createSignal("");

    const handleSubmit = (event: Event) => {
        event.preventDefault();
        // Przykładowa obsługa formularza:
        console.log("Email:", email());
        console.log("Password:", password());
        console.log("Confirm Password:", confirmPassword());
    };

    return (
        <div class="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
            <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]">
                <div class="h-screen flex justify-center items-center relative z-10">
                    <form onSubmit={handleSubmit} class="p-8 bg-white rounded shadow-md">
                        <h1 class="text-center mb-4">Sign Up</h1>
                        <div class="mb-4">
                            Email: {email()} {/* Wyświetlanie aktualnej wartości */}
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                required
                                value={email()} // Połączenie wartości sygnału z input
                                onInput={(e) => setEmail((e.target as HTMLInputElement).value)} // Aktualizacja sygnału
                                class="border p-2 w-full"
                            />
                            <br />
                        </div>
                        <div class="mb-4">
                            Password: {password()}
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                required
                                minlength="8"
                                value={password()}
                                onInput={(e) => setPassword((e.target as HTMLInputElement).value)}
                                class="border p-2 w-full"
                            />
                            <br/>
                        </div>
                        <div class="mb-4">
                            Confirm Password: {confirmPassword()}
                            <input
                                type="password"
                                name="confirmpassword"
                                placeholder="Confirm Password"
                                required
                                value={confirmPassword()}
                                onInput={(e) => setConfirmPassword((e.target as HTMLInputElement).value)}
                                class="border p-2 w-full"
                            />
                            <br/>
                        </div>

                        <button type="submit" class="p-2 rounded shadow-md">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default auth;
