import { useEffect, useState } from 'react';
import { ErrorState, LoginFormData } from '../../pages/login/Login';
import { setUser } from '../../redux/UserSlice/UserSlice';
import { useNavigate } from 'react-router-dom';
import Error from '../error-auth/Error';


function LoginComponent({ error, setError }: { error: ErrorState | null, setError: React.Dispatch<React.SetStateAction<ErrorState | null>> }) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<LoginFormData>({
        email: '',
        password: '',
    });

    useEffect(() => {
        if (error) {
            setError(null);
        }
    }, [formData.email, formData.password]);

    useEffect(() => {
        if (error) {
            const timeout = setTimeout(() => {
                setError(null);
            }, 30000);
            return () => clearTimeout(timeout);
        }
    }, [error]);

    const fetchLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!formData.email || !formData.password) {
            setError({ type: 'email', message: 'Please fill in all fields.' });
            return;
        }

        if (!/\S+@\S+\.\S+/.test(formData.email)) {
            setError({ type: 'email', message: 'Please enter a valid email address.' });
            return;
        }

        try {
            const response = await fetch('http://localhost:8001/user/login', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    "Accept": "application/json",
                },
                credentials: 'include',
            });

            if (!response.ok) {
                const errorData = await response.json();
                if (errorData.message === 'Invalid Password') {
                    setError({ type: 'password', message: 'The password you entered is incorrect. Please try again.' });
                } else if (errorData.message === 'User Not Found') {
                    setError({ type: 'email', message: 'No account found with this email address.' });
                } else {
                    setError({ type: 'server', message: 'Something went wrong. Please try again later.' });
                }
            } else {
                setError({type : 'success', message : 'Login successful'})
                const data = await response.json();
                setUser(data.user);
                localStorage.setItem('accessToken' , data.accessToken)
                navigate('/');
            }
        } catch (error) {
            setError({ type: 'network', message: 'Network error. Please check your connection and try again.' });
            console.error('Login failed:', error);
        }
    };

    return (
        <div className="login-container flex flex-col gap-4 w-1/4">
            {error && <Error type={error.type} message={error.message} />}
            <h1 className="text-2xl font-bold self-center">Login</h1>
            <form className="space-y-4" onSubmit={fetchLogin}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="login-email" className="font-bold">
                        Email Address
                    </label>
                    <input
                        type="email"
                        id="login-email"
                        className={`border-2 rounded-md p-2 ${
                            error?.type === 'email' ? 'border-red-500' : 'border-gray-600'
                        }`}
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="login-password" className="font-bold">
                        Password
                    </label>
                    <input
                        type="password"
                        id="login-password"
                        className={`border-2 rounded-md p-2 ${
                            error?.type === 'password' ? 'border-red-500' : 'border-gray-600'
                        }`}
                        placeholder="Password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white cursor-pointer self-center font-bold w-full p-2 rounded-md hover:bg-blue-600 active:scale-95 transition-all duration-300"
                >
                    Log in
                </button>
            </form>
            <p className="text-blue-500 cursor-pointer underline text-md self-center">
                Forgot your password?
            </p>
        </div>
    );
}

export default LoginComponent;