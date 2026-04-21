import React, { useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    contact: "",
    password: "",
    isSeller: false,
  });

  const { handleRegister } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await handleRegister({
      username: formData.username,
      email: formData.email,
      contact: formData.contact,
      password: formData.password,
      isSeller: formData.isSeller,
    });
    navigate("/");
  };

  const handleOAuthLogin = (provider) => {
    console.log(`OAuth signup with ${provider}`);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding & Illustration */}
      <section className="hidden md:flex md:w-1/2 lg:w-3/5 relative overflow-hidden bg-blue-900">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrYjyRQLM81ZaCZFDCV0Z8DNJj14uwaD2n1R1ppf_D2HB6BKQJdaOycSm5oHzsw_TL-Kn1MYnTLPEjuhrNHcJUhregxdmTuE9fZPooiiMJTB1D0sL466QzhAWXMl1h6ZTxf3QKYMEjb78Nmz2xuHFOi-ib8K-gHvJ7fVCDAltflU8Ya6X1Yf_zTzrKgezWOHxRhLWgPCxxAeNZ3awqnJNMY9iP7glc3o0YCJM3YeIiucWiWprj5RZizaVPNLVBhVLNdbENgHRkew"
            alt="Professional curator"
            className="w-full h-full object-cover grayscale opacity-40"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/50 to-transparent z-10"></div>

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-between h-full p-16 w-full">
          {/* Top Branding */}
          <div className="space-y-2">
            <span className="text-cyan-400 font-bold tracking-widest text-sm uppercase">
              EST. 2024
            </span>
            <h1 className="text-white text-6xl font-black tracking-tighter leading-none">
              SNITCH
            </h1>
          </div>

          {/* Bottom Text */}
          <div className="max-w-md">
            <p className="text-white/80 text-xl font-light leading-relaxed mb-6">
              Curating a digital atmosphere of trust and sleek sophistication.
              Your journey into high-end precision starts here.
            </p>

            <div className="flex gap-4 items-center">
              <div className="h-px w-12 bg-cyan-400"></div>
              <span className="text-cyan-400 font-medium tracking-tight">
                The Precision Curator
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Right Side - Register Form */}
      <div className="w-full lg:w-1/2 bg-slate-50 flex items-center justify-center px-6 py-8 sm:px-8 lg:px-12">
        <div className="w-full max-w-sm">
          {/* Mobile Header */}
          <div className="lg:hidden mb-8">
            <p className="text-xs font-semibold text-cyan-600 tracking-widest mb-4">
              EST. 2024
            </p>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">SNITCH</h2>
            <p className="text-slate-600 text-sm">
              Curating a digital atmosphere of trust and sleek sophistication.
            </p>
          </div>

          {/* Welcome Section */}
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              Create Account
            </h2>
            <p className="text-slate-600 text-sm">
              Join the elite circle of curators.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name Field */}
            <div>
              <label className="block text-xs font-semibold text-cyan-600 uppercase tracking-wide mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Jonathan Doe"
                className="w-full px-0 py-2 bg-transparent border-b-2 border-slate-300 focus:border-slate-900 focus:outline-none text-slate-900 placeholder-slate-400 transition-colors"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-xs font-semibold text-cyan-600 uppercase tracking-wide mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="curator@snitch.com"
                className="w-full px-0 py-2 bg-transparent border-b-2 border-slate-300 focus:border-slate-900 focus:outline-none text-slate-900 placeholder-slate-400 transition-colors"
                required
              />
            </div>

            {/* Contact Field */}
            <div>
              <label className="block text-xs font-semibold text-cyan-600 uppercase tracking-wide mb-2">
                Contact Number
              </label>
              <input
                type="tel"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-0 py-2 bg-transparent border-b-2 border-slate-300 focus:border-slate-900 focus:outline-none text-slate-900 placeholder-slate-400 transition-colors"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-semibold text-cyan-600 uppercase tracking-wide mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-0 py-2 bg-transparent border-b-2 border-slate-300 focus:border-slate-900 focus:outline-none text-slate-900 placeholder-slate-400 transition-colors"
                required
              />
            </div>

            {/* Seller Checkbox */}
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                name="isSeller"
                checked={formData.isSeller}
                onChange={handleChange}
                className="w-4 h-4 text-cyan-600 bg-gray-100 border-gray-300 rounded focus:ring-cyan-500 focus:ring-2"
              />
              <label className="text-sm font-medium text-slate-700">
                I am registering as a seller
              </label>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-slate-950 hover:bg-slate-900 disabled:opacity-50 text-white font-bold py-3 px-4 uppercase tracking-wide transition-colors"
            >
              Create Account
            </button>
          </form>

          {/* OAuth Button */}
          <div className="w-full mt-6">
            <button
              onClick={() => handleOAuthLogin("google")}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 bg-white border-2 border-slate-200 hover:border-slate-300 hover:shadow-md transition-all rounded font-semibold text-slate-900"
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
              <span className="font-semibold text-sm">GOOGLE</span>
              <span className="text-sm">Continue with Google</span>
            </button>
          </div>

          {/* Sign In Link */}
          <p className="mt-6 text-center text-slate-600 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-semibold text-slate-900 hover:underline"
            >
              Sign In
            </Link>
          </p>

          {/* Terms & Privacy */}
          <div className="mt-6 pt-6 border-t border-slate-200 text-center">
            <p className="text-xs text-slate-500 leading-relaxed">
              BY CREATING AN ACCOUNT, YOU AGREE TO OUR
              <br />
              <span className="font-semibold">
                TERMS OF SERVICE & PRIVACY POLICY
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
