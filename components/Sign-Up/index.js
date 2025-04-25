"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from "next/navigation"; // Import useRouter for redirection


const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter(); // Initialize useRouter

    const handleSignUp = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setMessage(null);

        try {
            const response = await axios.post('https://story-backend-nu.vercel.app/create-account', {
                name,
                email,
                password,
            });
               // Check if the login was successful
               console.log(response);
            if (response.data.success==true) {
                localStorage.setItem('userEmail', email); // Store email in localStorage
                
                // setMessage('OTP has been sent to your email. Please verify your account.');
                setMessage(response.data.message);
                router.push("/otp"); 
                // window.location.href = '/otp';
                console.log(response);
                
            } else {
                setError(response.data.message || 'User already exists. Try logging in.');
            }
        } catch (err) {
            console.error('SignUp Error:', err.response?.data || err.message);
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl w-full max-w-md">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                {message && <p className="text-green-500 text-sm text-center mb-4">{message}</p>}
                <form onSubmit={handleSignUp} className="space-y-6">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9a68]"
                        required
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9a68]"
                        required
                    />
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Create a password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9a68]"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
                        >
                            {showPassword ? '🙈' : '👁️'}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white py-2 px-4 rounded-lg bg-[#ff9a68] hover:bg-[#ff7a45]"
                        disabled={loading}
                    >
                        {loading ? 'Signing Up...' : 'Sign Up'}
                    </button>
                    <div className="text-center text-sm text-gray-600">
                        <p>
                            Already have an account?{' '}
                            <Link href="/login" className="text-[#ff9a68] hover:underline font-medium">Login</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
