import { useEffect, useState } from 'react'
import { ErrorState, LoginFormData } from '../../pages/login/Login'
import Error from '../error-auth/Error';


interface RegisterFormData extends LoginFormData {
    name: string;
}

type SignUpComponentProps = {
    setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
    setError: React.Dispatch<React.SetStateAction<ErrorState | null>>;
    error: ErrorState | null;
}

function SignUpComponent({ setIsLogin, setError, error }: SignUpComponentProps) {
    const [registerData, setRegisterData] = useState<RegisterFormData>({
        name: "",
        email: "",
        password: "",
    });

    useEffect(() => {
        if (error) {
            setError(null);
        }
    }, [registerData.name, registerData.email, registerData.password]);

    useEffect(() => {
        if (error) {
            const timeout = setTimeout(() => {
                setError(null);
            }, 30000);
            return () => clearTimeout(timeout);
        }
    }, [error]);

    const handleRegister = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        if (!registerData.name || !registerData.email || !registerData.password) {
            setError({ type: 'email', message: 'Please fill in all fields.' });
            return;
        }

        if (!/\S+@\S+\.\S+/.test(registerData.email)) {
            setError({ type: 'email', message: 'Please enter a valid email address.' });
            return;
        }

        if (registerData.password.length < 6 || !/[A-Za-z]/.test(registerData.password) || !/\d/.test(registerData.password)) {
            setError({ type: 'password', message: 'Password must be at least 6 characters long and contain one number' });
            return;
        }

        const response: Response = await fetch("http://localhost:8001/user/signup", {
            method: "POST",
            body: JSON.stringify(registerData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            const errorData = await response.json()
            if (errorData.message === 'User Already Exists') {
                setError({ type: 'email', message: 'User Already Exists' });
            } else if (errorData.message === 'Invalid Password') {
                setError({ type: 'password', message: 'Password must be at least 6 characters long and contain one number' });
            } else {
                setError({ type: 'server', message: 'Something went wrong' });
            }
        } else {
            const data = await response.json()
            setError({ type: 'success', message: data.message });
            setIsLogin(true)
        }
    }

    return (
        <div className="register-container flex flex-col gap-4 w-1/4">
            {error && <Error type={error.type} message={error.message} />}
            <h1 className="text-2xl font-bold self-center">Register</h1>
            <form className="space-y-4" onSubmit={handleRegister}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="register-name" className="font-bold">
                        Name
                    </label>
                    <input
                        type="text"
                        id="register-name"
                        className={`border-2 rounded-md p-2 ${error?.type == 'name' && error !== null ? "border-red-500" : "border-gray-600"}`}
                        placeholder="Name"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="register-email" className="font-bold">
                        Email
                    </label>
                    <input
                        type="email"
                        id="register-email"
                        className={`border-2 rounded-md p-2 ${error?.type == 'email' && error !== null ? "border-red-500" : "border-gray-600"}`}
                        placeholder="Email"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                        required
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="register-password" className="font-bold">
                        Password
                    </label>
                    <input
                        type="password"
                        id="register-password"
                        className={`border-2 rounded-md p-2 ${error?.type == 'password' && error !== null ? "border-red-500" : "border-gray-600"}`}
                        placeholder="Password"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white self-center font-bold w-full p-2 rounded-md">
                    Register
                </button>
            </form>
        </div>
    )
}

export default SignUpComponent
