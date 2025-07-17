import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password, rememberMe });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col md:flex-row w-full h-full bg-white">
        
        {/* Left side (Form) */}
        <div className="flex flex-col justify-center items-center px-6 py-10 md:px-12 lg:px-24 md:w-1/2 h-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-center mb-3 font-semibold uppercase">
            Welcome back
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-gray-600 text-center font-normal mb-6">
            Welcome back! Please enter your details
          </p>

          <div className="w-full max-w-sm">
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm md:text-base font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full h-[41px] md:h-[48px] lg:h-[52px] px-3 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm md:text-base font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full h-[41px] md:h-[48px] lg:h-[52px] px-3 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Remember & Forgot - Optimized spacing */}
            <div className="flex justify-between items-center w-full mb-6">
              <label className="text-xs md:text-sm flex items-center font-medium text-black cursor-pointer">
                <input 
                  type="checkbox" 
                  className="mr-2" 
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <a 
                href="#" 
                className="text-xs md:text-sm font-medium text-black hover:underline"
                onClick={(e) => e.preventDefault()}
              >
                Forgot password?
              </a>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-4 text-red-500 text-sm text-center">
                {error}
              </div>
            )}

            {/* Sign in Button */}
            <button
              onClick={handleSubmit}
              className="w-full h-[41px] md:h-[48px] lg:h-[52px] bg-red-500 text-white text-sm md:text-base lg:text-lg rounded-lg mb-4 hover:bg-white hover:text-black hover:border hover:border-gray-300 transition-all duration-200 font-medium"
            >
              Sign in
            </button>

            {/* Google Sign in */}
            <button
              type="button"
              className="w-full h-[41px] md:h-[48px] lg:h-[52px] text-sm md:text-base lg:text-lg font-medium border border-gray-300 p-2 rounded-lg mb-4 hover:bg-black hover:text-white transition-all duration-200 flex items-center justify-center"
            >
             <img src="./google.svg" alt="Google" className="w-5 h-5" />
              Sign in with Google
            </button>
          </div>

          {/* Sign up */}
          <p className="text-center text-xs md:text-sm lg:text-base font-medium text-gray-500">
            Don't have an account?
            <span className="font-bold text-red-500 ml-1 cursor-pointer hover:underline">
              Sign up for free
            </span>
          </p>
        </div>

        {/* Right side (Image) */}
        <div className="hidden md:flex items-center justify-center md:w-1/2 h-full">
          <img
            src="./LoginBgr.jpg"
            alt="Login Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}