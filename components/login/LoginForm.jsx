"use client";

import { performLogin } from "@/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginForm = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const formData = new FormData(event.target);
    try {
      const loggedUser = await performLogin(formData);

      if (loggedUser) {
        router.push("/");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const removeErrorMsg = () => {
    if (error === "") return;
    if (error !== "") {
      setError("");
    }
  };

  return (
    <>
      <div>
        {error && <span className="text-red-600 text-xl">{error}</span>}
      </div>

      <form
        className="login-form"
        onSubmit={onSubmit}
        onChange={removeErrorMsg}
      >
        {/* <!-- email --> */}
        <div>
          <label htmlFor="email">Email Address</label>
          <input type="email" name="email" id="email" />
        </div>
        {/* <!-- password --> */}
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
