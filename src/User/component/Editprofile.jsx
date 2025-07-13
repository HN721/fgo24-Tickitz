import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UpdateUserAction } from "../../redux/reducers/register";
import { UpdateAction } from "../../redux/reducers/auth";
import axios from "axios";

// Validasi schema
const validation = yup.object({
  firstName: yup
    .string()
    .min(3, "Nama depan minimal 3 karakter")
    .required("Nama depan wajib diisi"),
  lastName: yup
    .string()
    .min(2, "Nama belakang minimal 2 karakter")
    .required("Nama belakang wajib diisi"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Nomor hp harus berupa angka")
    .required("Nomor hp wajib diisi"),
  email: yup
    .string()
    .email("Format email tidak valid")
    .required("Email wajib diisi"),
  newPassword: yup
    .string()
    .min(8, "Password minimal 8 karakter")
    .max(10, "Password maksimal 10 karakter")
    .required("Password wajib diisi"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("newPassword"), null], "Konfirmasi password tidak cocok")
    .required("Konfirmasi password wajib diisi"),
});

export default function Editprofile() {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validation),
  });
  const token = useSelector((state) => state.auth.Auth?.token);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("http://localhost:8888/profile", {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const user = await res.data.results;
      setUser(user);
      console.log(user);
    };
    fetchUser();
  }, []);

  async function submitData(value) {
    const data = {
      id: user.id,
      fullname: value.firstName + " " + value.lastName,
      phone_number: value.phone,
    };
    const passwordRes = {
      password: value.newPassword,
    };
    const submitProfile = await axios.patch(
      "http://localhost:8888/profile",
      data,
      {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const submitPassword = await axios;
    console.log(data);

    dispatch(UpdateUserAction(data));
    dispatch(
      UpdateAction({
        id: data.id,
        username: data.username,
        email: data.email,
        phone: data.phone,
      })
    );
    alert("User Berhasil di Update");
  }

  return (
    <div className="mt-12 flex-1 px-4 sm:px-6 lg:px-8">
      {/* Tab Header */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 bg-white p-5 rounded-xl shadow-md w-full">
        <h1 className="text-secondary border-b-2 border-secondary pb-1 text-base sm:text-lg">
          Account Settings
        </h1>
        <Link to={"/Profile-Page"}>
          <h1 className="text-gray-500 text-base sm:text-lg">Order History</h1>
        </Link>
      </div>

      <form onSubmit={handleSubmit(submitData)}>
        <div className="mt-8 space-y-6">
          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Details Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  {...register("firstName")}
                  placeholder={`${user.username?.split(" ")[0] || ""}`}
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
                <p className="text-red-500 text-sm">
                  {errors.firstName?.message}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  {...register("lastName")}
                  placeholder={`${user.username?.split(" ")[1] || ""}`}
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
                <p className="text-red-500 text-sm">
                  {errors.lastName?.message}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">E-mail</label>
                <input
                  type="email"
                  {...register("email")}
                  placeholder={`${user.email}`}
                  autoComplete="off"
                  className="w-full border border-gray-300 rounded-lg p-2"
                />
                <p className="text-red-500 text-sm">{errors.email?.message}</p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Phone Number
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    value="+62"
                    className="w-full sm:w-20 border border-gray-300 rounded-lg p-2 text-center"
                    readOnly
                  />
                  <input
                    type="tel"
                    {...register("phone")}
                    placeholder={`${user.phone}`}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  />
                </div>
                <p className="text-red-500 text-sm">{errors.phone?.message}</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Account and Privacy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Write your password"
                    {...register("newPassword")}
                    className="w-full border border-gray-300 rounded-lg p-2 pr-10"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    👁️
                  </span>
                </div>
                <p className="text-red-500 text-sm">
                  {errors.newPassword?.message}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    {...register("confirmPassword")}
                    className="w-full border border-gray-300 rounded-lg p-2 pr-10"
                  />
                  <span
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    👁️
                  </span>
                </div>
                <p className="text-red-500 text-sm">
                  {errors.confirmPassword?.message}
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-start">
            <button
              type="submit"
              className="bg-secondary hover:bg-secondary text-white font-semibold py-2 px-6 rounded-lg"
            >
              Update changes
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
