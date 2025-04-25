// // // pages/login.js
// // import React, { useState } from 'react';
// // import Link from 'next/link';
// // import axios from 'axios';
// // import { useRouter } from 'next/router';
// // import Cookies from 'js-cookie';

// // const Login = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [showPassword, setShowPassword] = useState(false);
// //     const [message, setMessage] = useState('');
// //     const [isLoading, setIsLoading] = useState(false);
// //     const router = useRouter();

// //     const handleLogin = async (e) => {
// //         e.preventDefault();

// //         if (isLoading) return;

// //         setIsLoading(true);
// //         setMessage('');

// //         try {
// //             const response = await axios.post(
// //                 'https://story-backend-nu.vercel.app/login',
// //                 { email, password }
// //             );

// //             if (response.data.success && response.data.token) {
// //                 // Save token to cookies
// //                 Cookies.set('token', response.data.token);
// //                 setMessage('Login successful!');

// //                 // Redirect to home page
// //                 router.push('/');
// //             } else {
// //                 setMessage(response.data.message || 'Login failed. Check credentials.');
// //             }
// //         } catch (error) {
// //             setMessage(error.response?.data?.message || 'Login failed. Check credentials.');
// //         } finally {
// //             setIsLoading(false);
// //         }
// //     };

// //     return (
// //         <div
// //             className="min-h-screen flex items-center justify-center px-4"
// //             style={{
// //                 backgroundImage: `url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
// //                 backgroundSize: 'cover',
// //                 backgroundPosition: 'center',
// //             }}
// //         >
// //             <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl w-full max-w-md">
// //                 <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>

// //                 {message && <p className="text-sm text-gray-700 mb-2 text-center">{message}</p>}

// //                 <form onSubmit={handleLogin} className="space-y-6">
// //                     <div>
// //                         <input
// //                             type="email"
// //                             value={email}
// //                             onChange={(e) => setEmail(e.target.value)}
// //                             placeholder="Enter your email"
// //                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
// //                             required
// //                         />
// //                     </div>
// //                     <div className="relative">
// //                         <input
// //                             type={showPassword ? 'text' : 'password'}
// //                             value={password}
// //                             onChange={(e) => setPassword(e.target.value)}
// //                             placeholder="Enter your password"
// //                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
// //                             required
// //                         />
// //                         <button
// //                             type="button"
// //                             onClick={() => setShowPassword(!showPassword)}
// //                             className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
// //                         >
// //                             {showPassword ? '👁' : '👁‍🗨'}
// //                         </button>
// //                     </div>
// //                     <button
// //                         type="submit"
// //                         className="w-full text-white py-2 px-4 rounded-lg transition bg-orange-500 hover:bg-orange-600"
// //                         disabled={isLoading}
// //                     >
// //                         {isLoading ? 'Logging in...' : 'Login'}
// //                     </button>
// //                     <div className="text-center text-sm text-gray-600">
// //                         <p>
// //                             Don't have an account?{' '}
// //                             <Link href="/sign-up" className="text-orange-500 hover:underline font-medium">
// //                                 Sign up
// //                             </Link>
// //                         </p>
// //                     </div>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Login;




// // pages/login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import Link from 'next/link';
// import { useRouter } from 'next/router';
// import Cookies from 'js-cookie';
// import { useDispatch } from 'react-redux';
// import { setUser } from '../../redux/slices/userSlice';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [message, setMessage] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (isLoading) return;

//     setIsLoading(true);
//     setMessage('');

//     try {
//       const response = await axios.post(
//         'https://story-backend-nu.vercel.app/login',
//         { email, password }
//       );

//       if (response.data.success && response.data.token) {
//         // Save token to cookies
//         Cookies.set('token', response.data.token);
//         setMessage('Login successful!');

//         // Dispatch user data to Redux
//         dispatch(setUser(response.data.user)); // Ensure the API returns all user data

//         // Redirect to home page
//         router.push('/');
//       } else {
//         setMessage(response.data.message || 'Login failed. Check credentials.');
//       }
//     } catch (error) {
//       setMessage(error.response?.data?.message || 'Login failed. Check credentials.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-4"
//       style={{
//         backgroundImage: `url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>

//         {message && <p className="text-sm text-gray-700 mb-2 text-center">{message}</p>}

//         <form onSubmit={handleLogin} className="space-y-6">
//           <div>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Enter your email"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//               required
//             />
//           </div>
//           <div className="relative">
//             <input
//               type={showPassword ? 'text' : 'password'}
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Enter your password"
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//               required
//             />
//             <button
//               type="button"
//               onClick={() => setShowPassword(!showPassword)}
//               className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
//             >
//               {showPassword ? '👁' : '👁‍🗨'}
//             </button>
//           </div>
//           <button
//             type="submit"
//             className="w-full text-white py-2 px-4 rounded-lg transition bg-orange-500 hover:bg-orange-600"
//             disabled={isLoading}
//           >
//             {isLoading ? 'Logging in...' : 'Login'}
//           </button>
//           <div className="text-center text-sm text-gray-600">
//             <p>
//               Don't have an account?{' '}
//               <Link href="/sign-up" className="text-orange-500 hover:underline font-medium">
//                 Sign up
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;










// // pages/login.js
// import React, { useState } from 'react';
// import Link from 'next/link';
// import axios from 'axios';
// import { useRouter } from 'next/router';
// import Cookies from 'js-cookie';

// const Login = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [message, setMessage] = useState('');
//     const [isLoading, setIsLoading] = useState(false);
//     const router = useRouter();

//     const handleLogin = async (e) => {
//         e.preventDefault();

//         if (isLoading) return;

//         setIsLoading(true);
//         setMessage('');

//         try {
//             const response = await axios.post(
//                 'https://story-backend-nu.vercel.app/login',
//                 { email, password }
//             );

//             if (response.data.success && response.data.token) {
//                 // Save token to cookies
//                 Cookies.set('token', response.data.token);
//                 setMessage('Login successful!');

//                 // Redirect to home page
//                 router.push('/');
//             } else {
//                 setMessage(response.data.message || 'Login failed. Check credentials.');
//             }
//         } catch (error) {
//             setMessage(error.response?.data?.message || 'Login failed. Check credentials.');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     return (
//         <div
//             className="min-h-screen flex items-center justify-center px-4"
//             style={{
//                 backgroundImage: `url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//             }}
//         >
//             <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl w-full max-w-md">
//                 <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>

//                 {message && <p className="text-sm text-gray-700 mb-2 text-center">{message}</p>}

//                 <form onSubmit={handleLogin} className="space-y-6">
//                     <div>
//                         <input
//                             type="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             placeholder="Enter your email"
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             required
//                         />
//                     </div>
//                     <div className="relative">
//                         <input
//                             type={showPassword ? 'text' : 'password'}
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             placeholder="Enter your password"
//                             className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
//                             required
//                         />
//                         <button
//                             type="button"
//                             onClick={() => setShowPassword(!showPassword)}
//                             className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
//                         >
//                             {showPassword ? '👁' : '👁‍🗨'}
//                         </button>
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full text-white py-2 px-4 rounded-lg transition bg-orange-500 hover:bg-orange-600"
//                         disabled={isLoading}
//                     >
//                         {isLoading ? 'Logging in...' : 'Login'}
//                     </button>
//                     <div className="text-center text-sm text-gray-600">
//                         <p>
//                             Don't have an account?{' '}
//                             <Link href="/sign-up" className="text-orange-500 hover:underline font-medium">
//                                 Sign up
//                             </Link>
//                         </p>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default Login;




// pages/login.js
'use client'; // Add this directive for client-side components
import React, { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userSlice';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();

  // pages/login.js
const handleLogin = async (e) => {
  e.preventDefault();

  if (isLoading) return;

  setIsLoading(true);
  setMessage('');

  try {
    const response = await axios.post(
      'https://story-backend-nu.vercel.app/login',
      { email, password }
    );

    if (response.data.success && response.data.token) {
      // Save token to cookies
      Cookies.set('token', response.data.token);
      // After successful login
      localStorage.setItem("token", response.data.token);
      setMessage('Login successful!');

      // Dispatch user data to Redux
      dispatch(setUser(response.data.user));

      // Save user data to localStorage
      localStorage.setItem('user', JSON.stringify(response.data.user));

      // Redirect to home page
      router.push('/');
    } else {
      setMessage(response.data.message || 'Login failed. Check credentials.');
    }
  } catch (error) {
    setMessage(error.response?.data?.message || 'Login failed. Check credentials.');
  } finally {
    setIsLoading(false);
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
      <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>

        {message && <p className="text-sm text-gray-700 mb-2 text-center">{message}</p>}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm"
            >
              {showPassword ? '👁' : '👁‍🗨'}
            </button>
          </div>
          <button
            type="submit"
            className="w-full text-white py-2 px-4 rounded-lg transition bg-orange-500 hover:bg-orange-600"
            disabled={isLoading}
          >
            {isLoading ? 'Logging in...' : 'Login'}
          </button>
          <div className="text-center text-sm text-gray-600">
            <p>
              Don't have an account?{' '}
              <Link href="/sign-up" className="text-orange-500 hover:underline font-medium">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;