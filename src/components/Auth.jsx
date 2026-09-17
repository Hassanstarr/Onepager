import { useState, useEffect } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Auth({ token, setToken, setAuthModalOpen }) {

    const [activeForm, setActiveForm] = useState(
        token ? "account" : "login"
    );

    const [formData, setFormData] = useState({
        name: "",
        userName: "",
        email: "",
        password: "",
        comfirmPassword: "",
        newPassword: ""
    });

    const [status, setStatus] = useState(null);
    const [message, setMessage] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    useEffect(() => {

        if (token && activeForm !== "reset") {
            setActiveForm("account");
        }

        if (!token && activeForm === "account") {
            setActiveForm("login");
        }

    }, [token]);


    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value
        });
    };


    const handleLogin = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const apiUrl =
                import.meta.env.VITE_API_URL || "http://localhost:5000";

            const response = await fetch(`${apiUrl}/api/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    userName: formData.userName.trimEnd(),
                    password: formData.password.trimEnd()
                })
            });

            const data = await response.json();

            if (response.ok) {

                if (data.token) {
                    localStorage.setItem("token", data.token);

                    setToken(data.token);
                    setAuthModalOpen(false);
                }

            } else {

                setStatus("error");
                setMessage(data.message || "Login failed");

            }

        } catch (error) {

            setStatus("error");
            setMessage("Network error");

        }
    };


    const handleRegister = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const apiUrl =
                import.meta.env.VITE_API_URL || "http://localhost:5000";

            const response = await fetch(`${apiUrl}/api/user/register`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: formData.name.trimEnd(),
                    userName: formData.userName.trimEnd(),
                    email: formData.email.trim().toLowerCase(),
                    password: formData.password,
                    comfirmPassword: formData.comfirmPassword
                })
            });

            const data = await response.json();

            if (response.ok) {

                changeForm("login");
                setStatus("success");
                setMessage(data.message || "Registration successful");

            } else {

                setStatus("error");
                setMessage(data.message || "Registration failed");

            }

        } catch (error) {

            setStatus("error");
            setMessage("Network error");

        }
    };


    const handleForgotPassword = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {

            const apiUrl =
                import.meta.env.VITE_API_URL || "http://localhost:5000";

            const response = await fetch(
                `${apiUrl}/api/user/forgot-password`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        userName: formData.userName.trimEnd(),
                        email: formData.email.trimEnd()
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {

                setStatus(null);

                setMessage(
                    "Username and email verified. Please enter your new password."
                );

            } else {

                setStatus("error");
                setMessage(data.message || "Error occurred");

            }

        } catch (error) {

            setStatus("error");
            setMessage("Network error");

        }
    };


    const handleResetPassword = async (e) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";

            const token = localStorage.getItem("token");

            const response = await fetch(
                `${apiUrl}/api/user/reset-password`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    },
                    body: JSON.stringify({
                        password: formData.password.trimEnd(),
                        newPassword: formData.newPassword,
                        comfirmPassword: formData.comfirmPassword
                    })
                }
            );

            const data = await response.json();

            if (response.ok) {
                
                setStatus("success");
                changeForm("account")
                setMessage(data.message || "Password reset successfully");

            } else {

                setStatus("error");
                setMessage(data.message || "Error occurred");

            }

        } catch (error) {

            setStatus("error");
            setMessage("Network error");

        }
    };


    const handleLogout = () => {

        localStorage.removeItem("token");

        setToken(null);
        setAuthModalOpen(false);
    };


    const handleSubmit = (e) => {

        if (activeForm === "login") {
            handleLogin(e);
        }

        else if (activeForm === "register") {
            handleRegister(e);
        }

        else if (activeForm === "forgot") {
            handleForgotPassword(e);
        }

        else if (activeForm === "reset") {
            handleResetPassword(e);
        }
    };


    const changeForm = (form) => {

        setActiveForm(form);
        setFormData({
            name: "",
            userName: "",
            email: "",
            password: "",
            comfirmPassword: "",
            newPassword: ""
        });
        setShowPassword(false);
        setShowNewPassword(false);
        setShowConfirmPassword(false);
        setStatus(null);
        setMessage("");
    };


    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60 p-4">

            <div className="relative flex w-full max-w-xl flex-col items-center bg-[#333333] px-5 py-10 shadow-2xl md:px-15">

                <button
                    onClick={() => setAuthModalOpen(false)}
                    className="absolute right-5 top-4 cursor-pointer text-3xl font-bold text-white hover:text-[#2bb6b6]"
                >
                    &times;
                </button>


                <h1 className="mb-5 text-center font-['Courier_New'] text-[45px] font-bold uppercase text-white">

                    {activeForm === "account"
                        ? "Account"
                        : activeForm.toUpperCase()}

                </h1>


                <div className="w-full">

                    {activeForm === "account" ? (

                        <div className="text-center">

                            <p className="mb-5 font-['Courier_New'] text-[18px] text-white">
                                You are logged in!
                            </p>


                            <button
                                onClick={handleLogout}
                                className="mb-4 block h-18 w-full cursor-pointer border-none bg-[#ef4444] p-[4.75] text-center font-['Courier_New'] text-[14px] uppercase text-white transition-colors hover:bg-[#dc2626]"
                            >
                                Logout
                            </button>


                            <button
                                onClick={() => changeForm("reset")}
                                className="block h-18 w-full cursor-pointer border-none bg-[#2bb6b6] p-[4.75] text-center font-['Courier_New'] text-[14px] uppercase text-white transition-colors hover:bg-[#169c9a]"
                            >
                                Reset Password
                            </button>

                        </div>

                    ) : (

                        <div>
                            
                            <form
                                className="flex flex-col gap-2"
                                onSubmit={handleSubmit}
                            >

                                {activeForm === "register" && (
                                    <div className="mb-2.5 flex">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Full Name"
                                            className="block h-18 w-full rounded-none border border-[#eaeaea] bg-white p-4.5 pr-14 font-['Courier_New'] text-[14px] text-[#848484] outline-none placeholder:text-[#848484]"
                                        />
                                    </div>
                                )}


                                {activeForm !== "reset" &&(
                                    <div className="mb-2.5 flex">
                                        <input
                                            type="text"
                                            name="userName"
                                            value={formData.userName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Username"
                                            className="block h-18 w-full rounded-none border border-[#eaeaea] bg-white p-4.5 pr-14 font-['Courier_New'] text-[14px] text-[#848484] outline-none placeholder:text-[#848484]"
                                        />
                                    </div>
                                )}


                                {(activeForm === "register" ||
                                    activeForm === "forgot") && (

                                    <div className="mb-2.5 flex">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Email Address"
                                            className="block h-18 w-full rounded-none border border-[#eaeaea] bg-white p-4.5 pr-14 font-['Courier_New'] text-[14px] text-[#848484] outline-none placeholder:text-[#848484]"
                                        />
                                    </div>
                                )}


                                {(activeForm === "register" ||
                                    activeForm === "login" ||
                                    activeForm === "reset") && (

                                    <div className="relative mb-2.5">
                                        <input
                                            type={showPassword ? "text" : "password"}
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                            placeholder="Password"
                                            className="block h-18 w-full rounded-none border border-[#eaeaea] bg-white p-4.5 pr-14 font-['Courier_New'] text-[14px] text-[#848484] outline-none placeholder:text-[#848484]"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-xl text-[#848484]"
                                        >
                                            {showPassword ? <FaEye className="text-[#2bb6b6]" /> : <FaEyeSlash /> }
                                        </button>
                                    </div>
                                )}

                                {activeForm === "reset" && (
                                    <div className="relative mb-2.5">
                                        <input
                                            type={showNewPassword ? "text" : "password"}
                                            name="newPassword"
                                            value={formData.newPassword}
                                            onChange={handleChange}
                                            required
                                            placeholder="New Password"
                                            className="block h-18 w-full rounded-none border border-[#eaeaea] bg-white p-4.5 pr-14 font-['Courier_New'] text-[14px] text-[#848484] outline-none placeholder:text-[#848484]"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-xl text-[#848484]"
                                        >
                                            {showNewPassword ? <FaEye className="text-[#2bb6b6]" /> : <FaEyeSlash />  }
                                        </button>
                                    </div>
                                )}

                                {(activeForm === "register" ||
                                    activeForm === "reset") && (

                                    <div className="relative mb-2.5">
                                        <input
                                            type={showConfirmPassword ? "text" : "password"}
                                            name="comfirmPassword"
                                            value={formData.comfirmPassword}
                                            onChange={handleChange}
                                            required
                                            placeholder="Comfirm Password"
                                            className="block h-18 w-full rounded-none border border-[#eaeaea] bg-white p-4.5 pr-14 font-['Courier_New'] text-[14px] text-[#848484] outline-none placeholder:text-[#848484]"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer text-xl text-[#848484]"
                                        >
                                            {showConfirmPassword ? <FaEye className="text-[#2bb6b6]" /> : <FaEyeSlash /> }
                                        </button>
                                    </div>
                                )}


                                <button
                                    type="submit"
                                    disabled={status === "loading"}
                                    className="mt-3 block h-18 w-full cursor-pointer border-none bg-[#2bb6b6] p-[4.75] text-center font-['Courier_New'] text-[14px] uppercase text-white transition-colors hover:bg-[#169c9a] disabled:opacity-50"
                                >
                                    {status === "loading"
                                        ? "Processing..."
                                        : "Submit"}
                                </button>


                                {message && (
                                    <p
                                        className={`mt-2 text-center font-['Courier_New'] ${
                                            status === "error"
                                                ? "text-red-500"
                                                : "text-green-500"
                                        }`}
                                    >
                                        {message}
                                    </p>
                                )}

                            </form>

                            <div className="mt-5 flex flex-wrap justify-center gap-4">

                                {token ? (

                                    <button
                                        onClick={() => changeForm("account")}
                                        className="cursor-pointer font-['Courier_New'] text-[#2bb6b6] underline"
                                    >
                                        Back to Account
                                    </button>

                                ) : (

                                    <>

                                        {activeForm !== "login" && (
                                            <button
                                                onClick={() => changeForm("login")}
                                                className="cursor-pointer font-['Courier_New'] text-[#2bb6b6] underline"
                                            >
                                                Login
                                            </button>
                                        )}


                                        {activeForm !== "register" && (
                                            <button
                                                onClick={() => changeForm("register")}
                                                className="cursor-pointer font-['Courier_New'] text-[#2bb6b6] underline"
                                            >
                                                Register
                                            </button>
                                        )}


                                        {activeForm !== "forgot" &&
                                            activeForm !== "reset" && (
                                                <button
                                                    onClick={() => changeForm("forgot")}
                                                    className="cursor-pointer font-['Courier_New'] text-[#2bb6b6] underline"
                                                >
                                                    Forgot Password
                                                </button>
                                            )
                                        }

                                    </>

                                )}

                            </div>

                        </div>

                    )}

                </div>

            </div>

        </div>
    );
}

export default Auth;