"use client";
import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";
const Page = () => {
  const [username, SetUsername] = useState("");
  const [age, SetAge] = useState(0);
  const [password, setPassword] = useState("");
  const RegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (age < 18) {
      Swal.fire({
        title: "error",
        text: "yasiniz 18 den azdir",
        icon: "error",
      });
    }
    if (age > 18) {
      axios
        .post("http://localhost:8080/api/v1/register", {
          username,
          age,
          password,
        })
        .then((res) => {
          if (res.data.message == "bu istifadeci var") {
            Swal.fire({
              title: "error",
              text: res.data.message || "Register olundu",
              icon: "error",
            });
          } else {
            Swal.fire({
              title: "Good job!",
              text: res.data.message || "Register olundu",
              icon: "success",
            });
          }
        });
      SetAge(0);
      setPassword("");
      SetUsername("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
        <form className="flex flex-col gap-3" onSubmit={RegisterSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => SetUsername(e.target.value)}
            required
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="number"
            placeholder="Age"
            value={age}
            onChange={(e) => SetAge(Number(e.target.value))}
            required
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="submit"
            value={"Register"}
            className="bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
          ></input>
        </form>
        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Go to Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
