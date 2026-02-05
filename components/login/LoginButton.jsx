"use client";

const LoginButton = (formData) => {
  const handleLogin = (e) => {
    e.preventDefault();

    console.log("login", formData);
  };

  return (
    <>
      <button
        onClick={handleLogin}
        type="submit"
        className="btn-primary w-full mt-4 bg-indigo-600 hover:bg-indigo-800"
      >
        Login
      </button>
    </>
  );
};

export default LoginButton;
