import React from "react";
import { useState } from "react";

function Login() {
    const [email, setEmail] = useState('');
    const [matno, setMatno] = useState('');

    const handleSubmit = () => {

    }

    return (
        <div>
            <h2> Login here</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" value={email} />
                </div>
                <div>
                    <label htmlFor="matno">Matriculation Number:</label>
                    <input type="matno" id="matno" value={matno} />
                </div>
            </form>
        </div>
    )
}

export default Login;