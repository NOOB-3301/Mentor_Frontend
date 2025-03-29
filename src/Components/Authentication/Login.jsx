import { useState } from 'react';
import { motion } from 'framer-motion';
import { GoHomeFill } from "react-icons/go";

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }} 
      className="min-h-screen bg-white flex items-center justify-center p-4"
    >
        <motion.div>
            <GoHomeFill className='text-3xl text-black absolute top-5 left-5 cursor-pointer' onClick={() => window.location.href = '/'} />
        </motion.div>
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md border-black border-2 rounded-2xl shadow-xl p-8 
                   transition-all duration-300 hover:shadow-2xl bg-white"
      >
        <h1 className="text-3xl font-bold text-black text-center mb-8">
          Hi, Welcome Back !!!!
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div whileFocus={{ scale: 1.05 }} className="relative group">
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-200 rounded-lg text-black 
                     placeholder-transparent focus:outline-none focus:ring-2 
                     focus:ring-black peer transition-colors duration-200"
              placeholder="Email"
              id="email"
            />
            <label 
              htmlFor="email"
              className="absolute left-4 -top-3.5 text-black text-sm
                     transition-all duration-200 peer-placeholder-shown:text-base
                     peer-placeholder-shown:text-gray-600 
                     peer-placeholder-shown:top-3.5 peer-focus:-top-3.5
                     peer-focus:text-sm peer-focus:text-black"
            >
              Email
            </label>
          </motion.div>

          <motion.div whileFocus={{ scale: 1.05 }} className="relative group">
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-200 rounded-lg text-black
                     placeholder-transparent focus:outline-none focus:ring-2 
                     focus:ring-black peer transition-colors duration-200"
              placeholder="Password"
              id="password"
            />
            <label 
              htmlFor="password"
              className="absolute left-4 -top-3.5 text-black text-sm
                     transition-all duration-200 peer-placeholder-shown:text-base
                     peer-placeholder-shown:text-gray-600 
                     peer-placeholder-shown:top-3.5 peer-focus:-top-3.5
                     peer-focus:text-sm peer-focus:text-black"
            >
              Password
            </label>
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-black hover:bg-gray-800 text-white 
                   rounded-lg font-semibold transform transition-all duration-300"
          >
            Login
          </motion.button>
        </form>

        <div className='flex flex-row items-center justify-center gap-3'>
            <div className="mt-6 text-center">
                <a href="/signup" className="text-black hover:text-gray-800 
                        transition-colors duration-200 text-sm">
                    Don't have any account? Sign Up
                </a>
            </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Login;