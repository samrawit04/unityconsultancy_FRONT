import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IconBrandGoogle, IconBrandFacebook } from "@tabler/icons-react";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center p-12 rounded-tr-[250px] rounded-bl-[250px]">
        <div className="absolute inset-0">
          <img src="/src/asset/pexels-alexander-mass-748453803-31585181.jpg" alt="Background" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#4b2a75] bg-opacity-60 backdrop-blur-[3px]"></div>
        </div>
        <div className="relative z-10 text-white text-center">
          <img src="/src/asset/logo.png" alt="Unity Logo" className="h-16 w-auto mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Welcome Back!</h2>
          <p className="text-lg mb-8">Your Trusted platform for marriage, pre-marriage, and couple counseling</p>
          <button className="border-2 border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-[#4b2a75] transition-colors">
            Sign in to continue your journey
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#4b2a75] mb-2">Sign In</h1>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email address"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2a75] focus:bg-white transition-colors"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2a75] focus:bg-white transition-colors"
              />
              <button 
                type="button" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                👁️
              </button>
            </div>
            <Button className="w-full bg-[#4b2a75] hover:bg-[#3a2057] text-white py-3 rounded-lg text-base font-semibold">
              Sign In
            </Button>
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-50 text-gray-500">Or sign in with</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
              >
                <IconBrandGoogle size={20} className="text-gray-600" />
                <span className="text-gray-700 font-medium">Google</span>
              </button>
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-sm"
              >
                <IconBrandFacebook size={20} className="text-gray-600" />
                <span className="text-gray-700 font-medium">Facebook</span>
              </button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link to="/register" className="text-[#4b2a75] hover:underline font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;