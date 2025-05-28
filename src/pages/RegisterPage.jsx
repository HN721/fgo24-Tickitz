import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { AddUserAction, DeleteUserAction } from "../redux/reducers/register";
import Swal from "sweetalert2";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Eye, EyeClosed } from "lucide-react";

const schema = yup.object().shape({
  username: yup.string().min(3).required("Username is required"),
  phone: yup
    .string()
    .required("Phone is required")
    .matches(/^[0-9]{10,15}$/, "Phone must be 10–15 digits"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  rememberMe: yup.boolean(),
});

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitForm = (data) => {
    const isEmailUsed = users.find((user) => user.email === data.email);

    if (isEmailUsed) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email Already Used",
      });
      return;
    }

    dispatch(AddUserAction(data));
    Swal.fire({
      title: "Register successful!",
      icon: "success",
      draggable: true,
    });
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create a new account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{" "}
            <Link
              to="/login"
              className="font-medium text-secondary hover:text-orange-500"
            >
              sign in to your account
            </Link>
          </p>
        </div>

        <form
          className="mt-8 space-y-6"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmitForm)}
        >
          <div className="space-y-4">
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter Username"
                {...register("username")}
                className={`w-full px-3 py-2 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm border ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.username && (
                <p className="text-sm text-red-600">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </label>
              <input
                id="phone"
                type="text"
                placeholder="Enter Phone"
                {...register("phone")}
                className={`w-full px-3 py-2 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.phone && (
                <p className="text-sm text-red-600">{errors.phone.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email address"
                {...register("email")}
                className={`w-full px-3 py-2 rounded-md placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                {...register("password")}
                required
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm pr-10"
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-2 top-9 text-sm text-gray-500 hover:text-orange-500 focus:outline-none"
              >
                {showPassword ? <EyeClosed /> : <Eye />}
              </button>
              <p className="text-red-500 text-sm">{errors.password?.message}</p>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-900">
              <input
                id="remember-me"
                type="checkbox"
                {...register("rememberMe")}
                className="h-4 w-4 text-secondary focus:ring-orange-500 border-gray-300 rounded"
              />
              <span className="ml-2">Remember me</span>
            </label>
            <a
              href="#"
              className="text-sm font-medium text-secondary hover:text-orange-500"
            >
              Forgot your password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-secondary hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-orange-500 group-hover:text-orange-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
