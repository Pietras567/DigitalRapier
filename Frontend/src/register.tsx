import "./register.css"
import {createSignal, Component } from "solid-js";

const register: Component = () => {
    // Deklaracja zmiennej reaktywnej za pomocą createSignal
    const [email, setEmail] = createSignal("");
    const [password, setPassword] = createSignal("");
    const [confirmPassword, setConfirmPassword] = createSignal("");
    const [firstName, setFirstName] = createSignal("");
    const [lastName, setLastName] = createSignal("");
    const [username, setUsername] = createSignal("")
    const [phone, setPhone] = createSignal("")


    const handleSubmit = (event: Event) => {
        event.preventDefault();
        // Przykładowa obsługa formularza:
        console.log("Email: ", email());
        console.log("Password: ", password());
        console.log("Confirm Password: ", confirmPassword());
        console.log("First Name: ", firstName());
        console.log("Last Name: ", lastName());
        console.log("Phone: ", phone());

    };

    return (
        <div class="h-screen flex justify-center items-center relative z-10">
            <form onSubmit={handleSubmit} class="p-8 bg-white rounded shadow-md dark:bg-black dark:text-white">
                <h1 class="text-center mb-4">Sign Up</h1>

                <div class="mb-4">
                    Username: {username()}
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        required
                        value={username()}
                        onInput={(e) => setUsername((e.target as HTMLInputElement).value)}
                        class="border p-2 w-full"
                    />
                    <br/>
                </div>

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
                    <br/>
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

                <div class="mb-4">
                    First Name: {firstName()}
                    <input
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                        required
                        value={firstName()}
                        onInput={(e) => setFirstName((e.target as HTMLInputElement).value)}
                        class="border p-2 w-full"
                    />
                    <br/>
                </div>

                <div class="mb-4">
                    Last Name: {lastName()}
                    <input
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                        required
                        value={lastName()}
                        onInput={(e) => setLastName((e.target as HTMLInputElement).value)}
                        class="border p-2 w-full"
                    />
                    <br/>
                </div>

                <div class="mb-4">
                    Phone: {phone()}
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        required
                        pattern="[0-9]{9}" // Przykładowy wzorzec dla numeru telefonu
                        value={phone()}
                        onInput={(e) => setPhone((e.target as HTMLInputElement).value)}
                        class="border p-2 w-full"
                    />
                    <br/>
                </div>

                <button type="submit" class="p-2 rounded shadow-md">Submit</button>
            </form>
        </div>
    );
};

export default register;