import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import getBaseUrl from "../utils/baseURL";
import Swal from "sweetalert2";

const AdminLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate()
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    }
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    try {
      const response = await axios.post(`${getBaseUrl()}/api/auth/admin`, data, {
        headers : {
            'Content-Type' : "application/json"
        }
      })
      const auth = response.data
      console.log(auth)
      if(auth.token){
        localStorage.setItem('token', auth.token);
        setTimeout(() => {
            localStorage.removeItem('token')
            alert("Please Login Again.");
            navigate("/");
        }, 3600 * 1000)
      }
    //   alert(`${auth.user.username} Login Successfull`)
    Toast.fire({
        icon: "success",
        title: `${auth.user.username} Login successfully`
      });
      navigate("/dashboard")
    } catch (error) {
      setMessage("Please provide a Valid email and password");
      console.error(error);
    }
  };

  return (
    <div className="h-screen px-4 sm:px-40 flex justify-center items-center">
      <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-xl font-semibold text-center">
          Admin Dashboard Login
        </h2>
        <div className="w-[59px] h-[4px] bg-primary mb-4 mx-auto"></div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-gray-700 text-sm font-boldmb-2"
            >
              Username
            </label>
            <input
              {...register("username", { required: "Email is Required" })}
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 text-sm font-boldmb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              {...register("password", { required: "Password is required" })}
              name="password"
              id="password"
              placeholder="Password"
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow"
            />
            <div
              className="absolute right-0 inset-y-0 flex items-center cursor-pointer pr-4 mt-5"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>
          {message && (
            <p className="text-red-500 text-xs italic mb-3">{message}</p>
          )}
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 w-full text-white font-bold py-3 px-8 rounded focus:outline-none ">
              Login
            </button>
          </div>
        </form>

        <p className="mt-5 text-center text-gray-500 text-xs">
          2025{" "}
          <Link to="/" className="hover:text-primary text-blue-500">
            Book Store
          </Link>
          . All rights reserved
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
