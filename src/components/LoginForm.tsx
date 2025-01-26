import React, { useState } from "react";
import { LoginFormData, LoginFormProps } from "../types/LoginForm";

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<LoginFormData>({
    emailOrPhone: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData); // Simulate form submission
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-[#97c966] mb-6">
          Login
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="emailOrPhone" className="block text-[#78846f] mb-4">
              Email or Phone Number
            </label>
            <input
              type="text"
              id="emailOrPhone"
              name="emailOrPhone"
              value={formData.emailOrPhone}
              onChange={handleChange}
              placeholder="Enter your email or phone number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#97c966]"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-[#78846f] mb-4" >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-[#97c966]"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-[#97c966] rounded-lg hover:bg-[#97c966] focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>

        <p className="text-center text-[#78846f] mt-4">
          Don't have an account?{" "}
          <a
            href="/register"
            className="text-[#97c966] hover:underline"
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
