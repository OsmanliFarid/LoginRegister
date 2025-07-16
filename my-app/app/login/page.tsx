"use client";
import { User } from "@/Types/login";
import axios from "axios";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
const page = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const SubmitClick = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/v1/login", { username, password })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire({
            title: "Uğurla login olundu",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        if (error.response) {
          Swal.fire({
            title: "Xəta",
            text: error.response.data.message || "Login uğursuz oldu",
            icon: "error",
          });
        } else {
          Swal.fire({
            title: "Xəta",
            text: "Şəbəkə xətası və ya serverə qoşulmaq mümkün deyil",
            icon: "error",
          });
        }
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <form className="flex flex-col gap-3" onSubmit={SubmitClick}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            value="Login"
            type="submit"
            className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          ></input>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default page;
