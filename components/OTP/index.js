import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from "next/navigation"; // Import useRouter for redirection


const VerificationCode = () => {
    const [code, setCode] = useState(['', '', '', '']);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [accountCreated, setAccountCreated] = useState(false);
    const router = useRouter(); // Initialize useRouter

    
    useEffect(() => {
        const storedOTP = localStorage.getItem('otp');
        if (!storedOTP) {
            setMessage('⚠️ No OTP found. Please request a new one.');
        }
    }, []);

    const handleInputChange = (index, value) => {
        if (!/^\d*$/.test(value)) return;

        const newCode = [...code];
        newCode[index] = value;
        setCode(newCode);

        if (value && index < 3) {
            document.getElementById(`code-${index + 1}`).focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const fullCode = code.join('');
        const storedOTP = localStorage.getItem('otp');
        const storedEmail = localStorage.getItem('email');

        if (fullCode.length !== 4) {
            setMessage('Please enter all 4 digits.');
            return;
        }

        try {
            setLoading(true);
            const response = await axios.post('https://story-backend-nu.vercel.app/verify-otp', { otp: fullCode, email: storedEmail });
            console.log(response);
            if (response.data.success==true) {
                console.log(response.data.success)
                setMessage(' Account created successfully! ');
                setAccountCreated(true);
                localStorage.removeItem('otp');
                localStorage.removeItem('email');
                router.push("/"); 

                setTimeout(() => {
                    setMessage('');
                }, 5000); // Clear message after 5 seconds
            } else {
                setMessage('Invalid OTP, please try again.');
                setTimeout(() => {
                    setMessage('');
                }, 5000); // Clear message after 5 seconds
            }
        } catch (error) {
            setMessage('Error verifying OTP. Please try again later.');
            setTimeout(() => {
                setMessage('');
            }, 5000); // Clear message after 5 seconds
        } finally {
            setLoading(false);
        }
    };
    
    const handleResendCode = async () => {
        try {
            setLoading(true);
            const storedEmail = localStorage.getItem('email');
            const response = await axios.post('https://story-backend-nu.vercel.app/verify-otp', { email: storedEmail });
            
            if (response.data.success) {
                localStorage.setItem('otp', response.data.otp); 
                setMessage(' OTP has been resent. Check your email.');
                setTimeout(() => {
                    setMessage('');
                }, 5000); // Clear message after 5 seconds
            } else {
                setMessage(' Failed to resend OTP. Try again later.');
                setTimeout(() => {
                    setMessage('');
                }, 5000); // Clear message after 5 seconds
            }
        } catch (error) {
            setMessage(' Failed to resend OTP. Try again later.');
            setTimeout(() => {
                setMessage('');
            }, 5000); // Clear message after 5 seconds
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center px-4"
            style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-md text-center">
                <h2 className="text-2xl font-bold text-gray-800">Verify Your Account</h2>
                <p className="text-sm text-gray-600 mt-2">Enter the 4-Digit Code</p>

                <form onSubmit={handleSubmit} className="mt-4 space-x-2 flex justify-center">
                    {code.map((digit, index) => (
                        <input
                            key={index}
                            id={`code-${index}`}
                            type="text"
                            maxLength="1"
                            value={digit}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff9a68] transition duration-200"
                            required
                        />
                    ))}
                </form>

                {message && <p className={`text-sm mt-2 ${accountCreated ? 'text-green-600' : 'text-red-600'}`}>{message}</p>}

                {!accountCreated && (
                    <button
                        onClick={handleSubmit}
                        className={`w-full text-white mt-4 py-2 rounded-lg shadow-md transition duration-300 transform ${loading ? 'bg-gray-400' : 'bg-[#ff9a68] hover:bg-[#ff7a45]'}`}
                        disabled={loading}
                    >
                        {loading ? 'Verifying...' : 'Verify'}
                    </button>
                )}

                {!accountCreated && (
                    <p className="mt-4 text-gray-600 text-sm">
                        Code not received?{' '}
                        <button
                            onClick={handleResendCode}
                            className="text-[#ff9a68] font-medium hover:underline"
                            disabled={loading}
                        >
                            Resend Code
                        </button>
                    </p>
                )}
            </div>
        </div>
    );
};

export default VerificationCode;