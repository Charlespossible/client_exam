import React, { useState } from "react";
import {
  RegistrationFormData,
  RegistrationFormProps,
} from "../types/RegistrationForm";

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    referer: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear errors when the user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};

    // Validate First Name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    // Validate Last Name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    // Validate Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate Phone Number
    const phoneRegex = /^\+?[0-9]{10,15}$/;
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number.";
    }

    // Validate Password
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!formData.password.trim()) {
      newErrors.password = "Password is required.";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and include uppercase, lowercase, and numbers.";
    }

    // Validate Confirm Password
    if (!formData.confirmPassword.trim()) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      try {
        await onSubmit(formData); // Simulate async submission
      } catch (error) {
        console.error("Submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-[#97c966] mb-6">
          Register
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-4"
          aria-label="Registration Form"
        >
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="block text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97c966]"
              required
              aria-required="true"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="block text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97c966]"
              required
              aria-required="true"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97c966]"
              required
              aria-required="true"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97c966]"
              required
              aria-required="true"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          {/* Referer (Optional) */}
          <div>
            <label htmlFor="referer" className="block text-gray-700">
              Referer (Optional)
            </label>
            <input
              type="text"
              id="referer"
              name="referer"
              value={formData.referer}
              onChange={handleChange}
              placeholder="Who referred you? (Optional)"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97c966]"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97c966]"
              required
              aria-required="true"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div>
            <label htmlFor="confirmPassword" className="block text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#97c966]"
              required
              aria-required="true"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-[#97c966] rounded-lg hover:bg-[#97c966] focus:outline-none focus:ring-2 focus:ring-[#97c966] disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </div>
        </form>

        <p className="text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-[#97c966] hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
