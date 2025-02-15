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
    type AccountType = 'employer' | 'jobSeeker' | 'freelancer';
    const [accountType, setAccountType] = createSignal<AccountType>('jobSeeker');

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
            <form onSubmit={handleSubmit} class="p-8 bg-white rounded shadow-md dark:bg-gray-900 dark:text-white">
                <h1 class="text-center mb-4">Sign Up</h1>

                <div class="mb-4">
                    <label
                        for="accountType"
                        class="text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                    >
                        Username: {username()}
                    </label>
                    <input
                        id="username"
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
                    <label
                        for="email"
                        class="text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                    >
                        Email: {email()} {/* Wyświetlanie aktualnej wartości */}
                    </label>
                    <input
                        id="email"
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
                    <label
                        for="password"
                        class="text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                    >
                        Password: {password()}
                    </label>
                    <input
                        id="password"
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
                    <label
                        for="confirmpassword"
                        class="text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                    >
                        Confirm Password: {confirmPassword()}
                    </label>
                    <input
                        id="confirmpassword"
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
                    <label
                        for="firstname"
                        class="text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                    >
                        First Name: {firstName()}
                    </label>
                    <input
                        id="firstname"
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
                    <label
                        for="lastname"
                        class="text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                    >
                        Last Name: {lastName()}
                    </label>
                    <input
                        id="lastname"
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
                    <label
                        for="phone"
                        class="text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                    >
                        Phone: {phone()}
                    </label>
                    <input
                        id="phone"
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

                <div class="mb-4">
                    <label
                        for="accountType"
                        class="text-sm font-medium text-gray-700 mb-2 dark:text-gray-300"
                    >
                        Typ konta
                    </label>
                    <select
                        id="accountType"
                        value={accountType()}
                        onChange={(e) => setAccountType(e.currentTarget.value as AccountType)}
                        class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-800"
                    >
                        <option value="employer" >Pracodawca</option>
                        <option value="jobSeeker">Poszukujący pracy</option>
                        <option value="freelancer">Freelancer</option>
                    </select>
                </div>

                <button type="submit" class="p-2 rounded shadow-md bg-gray-50 dark:bg-gray-800">Submit</button>
            </form>
        </div>
    );
};

export default register;