import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CounselorRegister = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1004014/pexels-photo-1004014.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#4b2a75] bg-opacity-70 backdrop-blur-sm"></div>
      </div>
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center relative z-10">
        <div className="mb-8">
          <img src="/src/asset/logo.png" alt="Unity Logo" className="h-12 w-auto mx-auto mb-4" />
          <h1 className="text-2xl font-bold text-[#4b2a75] mb-2">Counselor Registration</h1>
          <p className="text-gray-600">Create your counselor account</p>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="text-left">
              <input
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2a75]"
              />
            </div>
            <div className="text-left">
              <input
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2a75]"
              />
            </div>
          </div>
          <div className="text-left">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2a75]"
            />
          </div>
          <div className="text-left">
            <input
              type="text"
              placeholder="Professional License Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2a75]"
            />
          </div>
          <div className="text-left">
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2a75]"
            >
              <option value="">Select Specialization</option>
              <option value="marriage">Marriage Counseling</option>
              <option value="premarital">Pre-marital Counseling</option>
              <option value="relationship">Relationship Counseling</option>
            </select>
          </div>
          <div className="text-left">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2a75]"
            />
          </div>
          <div className="text-left">
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2a75]"
            />
          </div>
          <Button className="w-full bg-[#4b2a75] hover:bg-[#3a2057] text-white py-3 rounded-lg text-lg">
            Create Account
          </Button>
        </form>

        <div className="mt-6">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-[#4b2a75] hover:underline font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CounselorRegister;