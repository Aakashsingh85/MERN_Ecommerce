import React, { useState } from 'react';
import Header from './Header';
import SubscribeSection from './SubscribeSection';
import Footer from './Footer';

const Register = () => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await fetch(`${import.meta.env.VITE_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      alert('Registered successfully!');
    } else {
      alert(data.message);
    }
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-green-300">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-green-700">Create an Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Username"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            required
            className="w-full p-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded hover:bg-green-700 transition"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
          Already have an account? <a href="/login" className="text-green-600 hover:underline">Login</a>
        </p>
      </div>
    </div>
    <SubscribeSection/>
    <Footer/>
    </>
  );
};

export default Register;
