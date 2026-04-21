import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { handleLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);

      const user = await handleLogin({ email, password });
      console.log(email, password, user, handleLogin);

      if (user.role == "buyer") {
        navigate("/");
      } else if (user.role == "seller") {
        navigate("/seller/dashboard");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOAuthLogin = (provider) => {
    console.log(`OAuth login with ${provider}`);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding & Illustration */}
      <section className="hidden md:flex md:w-1/2 lg:w-3/5 bg-gray-100 relative flex-col items-center justify-center p-12 overflow-hidden">
        {/* Background Glow Effects */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-900 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-cyan-400 rounded-full blur-[120px]" />
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-lg text-center">
          {/* Image Card */}
          <div className="mb-12 inline-flex items-center justify-center p-8 bg-white/40 backdrop-blur-xl rounded-xl shadow-sm">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUZm0Awb_1nzY9Ihys8A8uWPD848CxIJrY6gjss7QcCeAZ80HMg5ITEdPZT5WT1gaRK9IUAzFjJ0h_QmI_UvB4zDb9R8N0REiSjwDqoR4okPrbkCXNyJsaWnO1AhqIXxgPFj4fBmvxizCQte7sBgc6xc2l4SDpBBgUgpZvFHFEtyI6S5CP39CB8Uj1GMCsCzJn0z9_h9zfPvF08NcF_Nsp4oQVvz_uYC0fW2Sk9bzY-kImAvRKXw_PwcQaPflUNqYEgZT6Gik7Fg"
              alt="Fashion Illustration"
              className="w-full max-w-100 h-auto"
            />
          </div>

          {/* Heading */}
          <h2 className="text-4xl lg:text-5xl font-black text-blue-900 tracking-tight mb-6 leading-tight">
            THE PRECISION CURATOR.
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-lg font-medium leading-relaxed max-w-md mx-auto">
            Experience a digital gallery designed for authority and curated for
            the modern individual.
          </p>
        </div>

        {/* Bottom Branding Strip */}
        <div className="absolute bottom-12 left-12 flex gap-4">
          <div className="w-1.5 h-12 bg-blue-900"></div>
          <div className="flex flex-col justify-center">
            <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-900">
              Established
            </span>
            <span className="text-xs font-bold text-gray-800">MMXXIV</span>
          </div>
        </div>
      </section>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col justify-center px-8 py-12 sm:px-12 lg:px-16">
        <div className="w-full max-w-md mx-auto lg:mx-0">
          {/* Mobile Header */}
          <div className="lg:hidden mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              THE PRECISION CURATOR
            </h2>
            <p className="text-slate-600 text-sm">
              Experience a digital gallery designed for authority and curated
              for the modern individual.
            </p>
          </div>

          {/* Welcome Section */}
          <div className="mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              Welcome back
            </h2>
            <p className="text-slate-600 text-sm">
              Please enter your details to sign in.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide mb-3">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-300 focus:border-slate-900 focus:outline-none text-slate-900 placeholder-slate-400 transition-colors"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wide">
                  Password
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                >
                  FORGOT PASSWORD?
                </Link>
              </div>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-0 py-3 bg-transparent border-b-2 border-slate-300 focus:border-slate-900 focus:outline-none text-slate-900 placeholder-slate-400 transition-colors"
                required
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-8 bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white font-bold py-3 px-4 uppercase tracking-wide transition-colors"
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="grow border-t border-slate-200"></div>
            <span className="px-4 text-xs font-semibold text-slate-600 uppercase tracking-wide">
              Or continue with
            </span>
            <div className="grow border-t border-slate-200"></div>
          </div>

          {/* OAuth Buttons */}
          <div className="w-full">
            <button
              onClick={() => handleOAuthLogin("google")}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border-2 border-slate-300 hover:border-slate-400 hover:shadow-md transition-all rounded font-semibold text-slate-900"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="text-sm">Continue with Google</span>
            </button>
          </div>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-slate-600 text-sm">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-slate-900 hover:underline"
            >
              Create an Account
            </Link>
          </p>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-xs text-slate-500 uppercase tracking-wide">
              Secure session
            </p>
            <p className="text-xs text-slate-500 mt-1">© 2024 SNITCH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
