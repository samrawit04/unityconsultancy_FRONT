import { Link } from "react-router-dom";

const ResetPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4effc]">
      <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md text-center">
        <div className="mb-8">
          <img
            src="/src/asset/logo.png"
            alt="Unity Logo"
            className="h-12 w-auto mx-auto mb-4"
          />
          <h1 className="text-2xl font-bold text-[#4b2a75] mb-2">
            Reset Your Password
          </h1>
        </div>

        {/* Input */}
        <input
          type="email"
          placeholder="Enter Your Email Address"
          className="w-full px-4 py-3 rounded-md bg-gray-100 text-gray-700 mb-4 focus:outline-none"
        />

        {/* Reset Button */}
        <button
          type="submit"
          className="w-full bg-[#4b2a75] hover:bg-[#3a2057] text-white py-3 rounded-lg text-base font-semibold">
          Reset
        </button>

        {/* Links */}
        <div className="mt-6 space-y-2 text-sm text-gray-700">
          <p>
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#4b2a75] hover:underline font-medium">
              Sign in
            </Link>
          </p>
          <p>
            Don’t have an account?{" "}
            <Link
              to="/register/user"
              className="text-[#4b2a75] hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
