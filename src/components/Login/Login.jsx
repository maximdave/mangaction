import React, { useState } from "react";
import { Link } from "react-router-dom";
import providus from "../../assets/image2.png";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <main className="bg-login-image xl:w-screen xl:h-screen xl:bg-clip-border xl:flex xl:justify-center xl:items-center">
        <section className="xl:w-login-width xl:h-login-height bg-white rounded-md">
          <div className="mt-10 flex items-center flex-col">
            <img src={providus} alt="logo" />
            <h3 className="font-bold text-xl text-center text-lblack mt-4 flex flex-wrap w-48">
              Log In to Providus Card Dashboard
            </h3>
            <h6 className="text-lgray text-sm mt-5">
              Enter your email and password below
            </h6>
          </div>
          <form className="flex flex-col" onSubmit={submitHandler}>
            <label className="text-lgray text-xs font-bold mt-4 ml-8">
              EMAIL
            </label>
            <input
              type="email"
              placeholder="Email Address"
              className="bg-ibgray w-10/12 ml-8 mt-2 rounded-md border border-bgray placeholder:opacity-50"
            />
            <label className="text-lgray text-xs font-bold mt-4 ml-8">
              PASSWORD
            </label>
            <input
              type={passwordShown ? "text" : "password"}
              placeholder="Password"
              className="bg-ibgray w-10/12 ml-8 mt-2 rounded-md border border-bgray placeholder:opacity-50 placeholder:text-xs"
            />
            <div className="flex ml-10 mt-2">
              {" "}
              <input
                type="checkbox"
                className="mr-1"
                name=""
                id=""
                onClick={togglePassword}
              />{" "}
              <h6 className="text-lgray text-xs">Show password</h6>
            </div>
            <Link to="/dashboard">
              <button
                type="submit"
                className="mt-5 text-xs font-semibold bg-buyellow ml-8 h-10 rounded-md text-white w-10/12"
              >
                Log In
              </button>
            </Link>
          </form>
        </section>
      </main>
    </>
  );
};

export default Login;
