import React, { useState } from "react";
import Logo from "../../assets/logoWhite.png";
import { Link } from "react-router-dom";
import aboutBg from "../../assets/about.avif";

function Login() {
    return (
        <div
            className="flex min-h-screen items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${aboutBg})` }}
        >
            <div className="w-full max-w-md mx-auto rounded-xl border border-black/10 bg-black/10 backdrop-blur-md">
                <div className="p-6">
                    <div className="flex flex-col items-start text-center mb-8">
                        <img src={Logo} alt="Logo" className="w-48 mb-4" />
                        <h1 className="text-2xl font-semibold tracking-tight text-white">Welcome back,</h1>
                        <p className="text-sm text-slate-200">Create a new account for Synaptrix ERP Dashboard</p>
                    </div>

                    <div className="space-y-4">

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-white">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="name@synaptrixsol.com"
                                className="flex h-10 w-full rounded-md border outline-none px-3 py-2 text-sm ring-offset-white border-slate-200 bg-white/50"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-sm font-medium text-white">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                className="flex h-10 w-full rounded-md outline-none border px-3 py-2 text-sm ring-offset-white border-slate-200 bg-white/50"
                                required
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="remember"
                                    className="h-4 w-4 rounded outline-none border-slate-300 text-slate-900 focus:ring-slate-950"
                                />
                                <label htmlFor="remember" className="text-sm font-medium leading-none text-white">
                                    Remember me
                                </label>
                            </div>
                            <a
                                href="#"
                                className="text-sm font-medium text-white underline-offset-4 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>

                        <Link
                            to='/client/dashboard'
                            type="button"
                            className="inline-flex h-10 w-full items-center justify-center rounded-md bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:from-emerald-700 hover:to-emerald-700 px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-700"
                        >
                            Register Account
                        </Link>
                    </div>

                    <div className="relative my-6">
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-transparent px-2 text-slate-200">Or continue with</span>
                        </div>
                    </div>

                    <p className="mt-6 text-center text-sm text-slate-200">
                        Already have an account?{" "}
                        <Link
                            to="/"
                            className="font-medium text-white underline-offset-4 hover:underline"
                        >
                            Sign In
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;