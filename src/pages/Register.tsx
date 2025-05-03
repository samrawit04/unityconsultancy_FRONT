import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Register = () => {
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
          <h1 className="text-2xl font-bold text-[#4b2a75] mb-2">Unity consultancy</h1>
          <p className="text-gray-600">Your journey starts here</p>
        </div>

        <div className="space-y-8 mb-8">
          <Link to="/register/client"  className="space-y-8 mb-8">
            <Button className="w-full bg-[#4b2a75] hover:bg-[#3a2057] text-white py-3 rounded-lg text-lg space-y-8 mb-8">
              Register as a client
            </Button>
          </Link>

          <Link to="/register/counselor">
            <Button className="w-full bg-white hover:bg-gray-50 text-[#4b2a75] border-2 border-[#4b2a75] py-3 rounded-lg text-lg">
              Register as a counselor
            </Button>
          </Link>
        </div>

        <p className="mt-6 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-[#4b2a75] hover:underline font-medium">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;