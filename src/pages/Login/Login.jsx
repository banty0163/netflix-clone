// import React, { useState } from "react";
// import logo from "../../assets/logo.png";
// import background_banner from "../../assets/background_banner.jpg";
// import { signUp, login } from "../../firebase"



// const Login = () => {

//     const [signState, setSignState] = useState("Sign In")
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [password, setPassword] = useState("")
//     const [loading, setLoading] = useState(false);
//     const [rememberMe, setRememberMe] = useState(false);


//     const user_auth = async (e) => {
//         setLoading(true)
//         e.preventDefault();
//         if (signState === "Sign In") {
//             await login({ email, password });
//         } else {
//             await signUp({ name, email, password });
//         }
//         setLoading(false)
//     }

//     return (

//         <div
//             className="h-screen bg-cover bg-center flex flex-col items-center justify-center"
//             style={{
//                 backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background_banner})`,
//             }}
//         >
//             {/* Logo */}
//             <img src={logo} alt="Logo" className="w-[150px] mb-6" />

//             {/* Login Form Container */}
//             <div className="w-full max-w-md bg-black/60 mx-auto p-8 rounded-lg text-white">
//                 <h1 className="text-2xl font-semibold mb-6 text-center"> {signState}</h1>

//                 {/* Form */}
//                 <form className="flex flex-col gap-4">
//                     {
//                         signState === 'Sign Up' ? <input
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             type="text"
//                             placeholder="Your name"
//                             className="w-full h-[50px] bg-[#333] text-white px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
//                         /> : <></>
//                     }

//                     <input
//                         type="email"
//                         value={email}
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Email"
//                         className="w-full h-[50px] bg-[#333] text-white px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
//                     />
//                     <input
//                         type="password"
//                         value={password}
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Password"
//                         className="w-full h-[50px] bg-[#333] text-white px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600"
//                     />
//                     <button
//                         type="submit"
//                         onClick={user_auth}
//                         disabled={loading}
//                         className={`w-full bg-red-600 hover:bg-red-700 h-[50px] rounded font-semibold transition-all ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
//                     >
//                         {signState}
//                     </button>

//                     {/* Remember and Help */}
//                     <div className="flex justify-between items-center text-sm text-gray-300 mt-4">
//                         <div className="flex items-center gap-2">
//                             <input type="checkbox" id="remember" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} />
//                             <label htmlFor="remember">Remember Me</label>
//                         </div>
//                         <p className="cursor-pointer hover:underline">Need help?</p>
//                     </div>
//                 </form>

//                 <div className="mt-[40px] text-[#737373]">

//                     {
//                         signState === "Sign Up" ?
//                             <p>Already have account ?<span className="ml-[6px] text-[#fff] font-[500] cursor-pointer" onClick={() => { setSignState("Sign In") }}>Sign In </span></p>
//                             :

//                             <p>New to netflix ? <span className="ml-[6px] text-[#fff] font-[500] cursor-pointer"
//                                 onClick={() => { setSignState("Sign Up") }}
//                             >Sign Up now</span></p>
//                     }

//                 </div>




//             </div>
//         </div>
//     );
// };

// export default Login;




import React, { useState } from "react";
import logo from "../../assets/logo.png";
import background_banner from "../../assets/background_banner.jpg";
import { signUp, login } from "../../firebase";

const Login = () => {
    const [signState, setSignState] = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);

    const user_auth = async (e) => {
        setLoading(true);
        e.preventDefault();
        if (signState === "Sign In") {
            await login({ email, password });
        } else {
            await signUp({ name, email, password });
        }
        setLoading(false);
    };

    return (
        <div
            className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${background_banner})`,
            }}
        >
            {/* Logo */}
            <img
                src={logo}
                alt="Logo"
                className="w-[120px] sm:w-[150px] mb-6 sm:mb-8"
            />

            {/* Login Form Container */}
            <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg bg-black/70 mx-auto p-6 sm:p-8 rounded-lg text-white shadow-lg">
                <h1 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
                    {signState}
                </h1>
                {/* Form */}
                <form className="flex flex-col gap-4">
                    {signState === "Sign Up" ? (
                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            placeholder="Your name"
                            className="w-full h-[45px] sm:h-[50px] bg-[#333] text-white px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
                        />
                    ) : (
                        <></>
                    )}

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="w-full h-[45px] sm:h-[50px] bg-[#333] text-white px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
                    />
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="w-full h-[45px] sm:h-[50px] bg-[#333] text-white px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-600 text-sm sm:text-base"
                    />
                    <button
                        type="submit"
                        onClick={user_auth}
                        disabled={loading}
                        className={`w-full bg-red-600 hover:bg-red-700 h-[45px] sm:h-[50px] rounded font-semibold transition-all text-sm sm:text-base ${loading ? "opacity-60 cursor-not-allowed" : ""
                            }`}
                    >
                        {signState}
                    </button>

                    {/* Remember and Help */}
                    <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-gray-300 mt-4 gap-2">
                        <div className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                id="remember"
                                checked={rememberMe}
                                onChange={() => setRememberMe(!rememberMe)}
                            />
                            <label htmlFor="remember">Remember Me</label>
                        </div>
                        <p className="cursor-pointer hover:underline">Need help?</p>
                    </div>
                </form>

                {/* Switch state */}
                <div className="mt-8 text-center text-[#737373] text-sm sm:text-base">
                    {signState === "Sign Up" ? (
                        <p>
                            Already have account ?{" "}
                            <span
                                className="ml-1 text-white font-medium cursor-pointer hover:underline"
                                onClick={() => {
                                    setSignState("Sign In");
                                }}
                            >
                                Sign In
                            </span>
                        </p>
                    ) : (
                        <p>
                            New to Netflix?{" "}
                            <span
                                className="ml-1 text-white font-medium cursor-pointer hover:underline"
                                onClick={() => {
                                    setSignState("Sign Up");
                                }}
                            >
                                Sign Up now
                            </span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Login;
