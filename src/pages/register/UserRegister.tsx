import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { IconBrandGoogle } from "@tabler/icons-react";

const ROLE_MAP = {
  client: "CLIENT",
  counselor: "COUNSELOR",
} as const;

const UserRegister = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"client" | "counselor" | null>(null);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "" as "client" | "counselor" | "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    const storedRole = sessionStorage.getItem("selectedRole") as
      | "client"
      | "counselor"
      | null;
    setRole(storedRole);

    if (storedRole) {
      setForm((prev) => ({ ...prev, role: storedRole }));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreedToTerms) {
      setError("You must agree to the Terms of Use and Privacy Policy.");
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const payload = {
        ...form,
        role: ROLE_MAP[form.role as "client" | "counselor"] || "",
      };

      const response = await axios.post(
        "http://localhost:3001/user/signup",
        payload,
      );

      if (response.data?.verificationId) {
        navigate(
          `/verify-email?verificationId=${response.data.verificationId}`,
        );
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err: any) {
      setError(err?.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden items-center justify-center p-12 rounded-tr-[250px] rounded-bl-[250px]">
        <div className="absolute inset-0">
          <img
            src="/src/asset/pexels-alexander-mass-748453803-31585181.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#4b2a75] bg-opacity-60 backdrop-blur-[3px]"></div>
        </div>
        <div className="relative z-10 text-white text-center">
          <img
            src="/src/asset/logo.png"
            alt="Unity Logo"
            className="h-16 w-auto mx-auto mb-6"
          />
          <h2 className="text-4xl font-bold mb-4">Welcome!!</h2>
          <p className="text-lg mb-8">
            Your Trusted platform for marriage, pre-marriage, and couple
            counseling
          </p>
          <button className="border-2 border-white text-white px-8 py-2 rounded-full hover:bg-white hover:text-[#4b2a75] transition-colors">
            Join us for a healthy relationship
          </button>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-gray-50">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#4b2a75] mb-2">Sign Up</h1>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2a75] focus:bg-white transition-colors"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2a75] focus:bg-white transition-colors"
                />
              </div>
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email address"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2a75] focus:bg-white transition-colors"
              />
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-100 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#4b2a75] focus:bg-white transition-colors"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                checked={agreedToTerms}
                onChange={() => setAgreedToTerms(!agreedToTerms)}
                className="rounded border-gray-300 text-[#4b2a75] focus:ring-[#4b2a75]"
              />
              <label htmlFor="terms" className="text-sm text-gray-500">
                By signing up, I agree with the{" "}
                <Link to="/terms" className="text-[#4b2a75] hover:underline">
                  Terms of Use
                </Link>{" "}
                &{" "}
                <Link to="/privacy" className="text-[#4b2a75] hover:underline">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <Button
              type="submit"
              disabled={loading || !agreedToTerms}
              className="w-full bg-[#4b2a75] hover:bg-[#3a2057] text-white py-3 rounded-lg text-base font-semibold">
              {loading ? "Signing Up..." : "Sign Up"}
            </Button>
            {error && (
              <p className="text-red-600 text-center mt-2 font-semibold">
                {error}
              </p>
            )}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-50 text-gray-500">
                  Or sign in with
                </span>
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-white rounded-lg hover:bg-gray-100 transition-colors shadow-sm">
                <IconBrandGoogle size={20} className="text-gray-600" />
                <span className="text-gray-700 font-medium">Google</span>
              </button>
            </div>
          </form>

          <div className="text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="text-[#4b2a75] hover:underline font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRegister;
