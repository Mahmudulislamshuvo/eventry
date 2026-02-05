"use client";

import { useAuth } from "@/hooks/useAuth";
import Link from "next/link";

const SignInAndSignOut = () => {
  const { auth, setAuth } = useAuth();

  const logOut = () => {
    setAuth(null);
  };

  return (
    <div>
      {auth ? (
        <>
          <span className="mx-2">Hello, {auth?.name}</span>
          <span className="mx-1">|</span>
          <a className="cursor-pointer" onClick={logOut}>
            Logout
          </a>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default SignInAndSignOut;
