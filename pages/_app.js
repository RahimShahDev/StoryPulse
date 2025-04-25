// // pages/_app.js or _app.tsx
// import { useRouter } from 'next/router';
// import '../style/style.css';
// import Navbar from "../components/Nav-bar";
// function MyApp({ Component, pageProps }) {
//   const router = useRouter();
//   const isLoginPage = router.pathname === "/login" || router.pathname === "/sign-up" || router.pathname === "/otp";

//   return (
//  <div>
//     {isLoginPage ?  "" : <Navbar  />  }
//   {/* <Header /> */}
//   <Component {...pageProps} />
//   </div>
// );
// }

// export default MyApp;


// pages/_app.js
// import { Provider } from 'react-redux';
// import store from '../redux/store';
// import { useRouter } from 'next/router';
// import '../style/style.css';
// import Navbar from "../components/Nav-bar";
// function MyApp({ Component, pageProps }) {
//   const isLoginPage = router.pathname === "/login" || router.pathname === "/sign-up" || router.pathname === "/otp";

//   return (
//     <><Provider store={store}>
//       <Component {...pageProps} />
//     </Provider><div>
//             {isLoginPage ? "" : <Navbar />}
//          {/* <Header /> */}
//           </div></>
//   );
// }

// export default MyApp;



import { Provider } from "react-redux";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import store from "../redux/store.js";
import { setUser } from "../redux/slices/userSlice"; // Ensure this import is correct
import "../style/style.css";
import Navbar from "../components/Nav-bar";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const isLoginPage = router.pathname === "/login" || router.pathname === "/sign-up" || router.pathname === "/otp";

  return (
    <Provider store={store}>
      {!isLoginPage && <Navbar />}
      <UserInitializer /> {/* New component to handle user initialization */}
      <Component {...pageProps} />
    </Provider>
  );
}

// ✅ Move dispatch logic inside a separate component
const UserInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      dispatch(setUser(JSON.parse(userData)));
    }
  }, [dispatch]);

  return null; // This component doesn't render anything
};

export default MyApp;
