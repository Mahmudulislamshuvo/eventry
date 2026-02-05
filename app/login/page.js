import LoginForm from "@/components/login/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div>
      <main className="">
        <section className="h-screen grid place-items-center">
          <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
            <h4 className="font-bold text-2xl">Sign in</h4>
            <LoginForm />

            <span className="text-center text-xs text-gray-500">
              Don&lsquo;t have an account?
              <Link
                className="underline hover:text-indigo-600"
                href="/register"
              >
                Register
              </Link>
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LoginPage;
