import { useState } from "react";
import "../styles/Login.module.css";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        const data = {
            email,
            password
        };

        console.log('data', data);

        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        });

        if(res.ok) {
            const resData = await res.json();
            window.localStorage.setItem("token", resData.token);
            window.location = "/home"
        } else {
            console.log(res.statusText);
        }
    }

    return(
        <form
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
            }}
            className="loginForm"
            onSubmit={handleLogin}
        >
            <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" type="email" />
            <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" type="password" />
            <button type="submit">Sign in</button>
        </form>
    )
}

export { Login };

// import { Login } from "../path"; ako e so named export
// import LoginPage from "../path"; ako e so default export