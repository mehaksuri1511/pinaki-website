import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { loginUser } from "../API/authService.js";
import { useAuth } from "../context/AuthContext.jsx";
import logo from "../assets/images/pinaki-logo.jpeg.png";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (error) {
      setError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!form.email.trim() || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await loginUser({
        email: form.email.trim(),
        password: form.password,
      });

      const { token, user } = response.data;

      login(token, user);

      /*
       * If the user originally tried to access a protected page,
       * send them back there after successful login.
       *
       * Otherwise go to the Learning Portal.
       */
      const from = location.state?.from;

      if (from?.pathname) {
        navigate(
          `${from.pathname}${from.search || ""}${from.hash || ""}`,
          {
            replace: true,
          }
        );
      } else {
        navigate("/learning", {
          replace: true,
        });
      }
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your credentials and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="relative min-h-[calc(100vh-5rem)] overflow-hidden bg-slate-50 pt-20 text-slate-900 transition-colors duration-300 dark:bg-[#020617] dark:text-white">
      {/* =====================================================
          BACKGROUND GLOW
      ===================================================== */}

      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-400/20 blur-[120px] dark:bg-emerald-500/10" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-teal-400/20 blur-[120px] dark:bg-teal-500/10" />

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[120px] dark:bg-cyan-500/5" />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-slate-200 bg-white/90 shadow-2xl shadow-slate-900/10 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80 dark:shadow-black/30 lg:grid-cols-2">
          {/* =================================================
              LEFT BRAND PANEL
          ================================================= */}

          <div className="relative hidden overflow-hidden bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
            {/* Decorative circles */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-2xl" />

            <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-10 flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white p-1 shadow-lg">
                  <img
                    src={logo}
                    alt="Pinaki IT"
                    className="h-full w-full rounded-xl object-contain"
                  />
                </div>

                <div>
                  <p className="text-lg font-extrabold tracking-tight">
                    Pinaki IT
                  </p>

                  <p className="text-sm text-white/75">
                    Learn. Build. Grow.
                  </p>
                </div>
              </div>

              <div className="max-w-md">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold backdrop-blur-md">
                  <Sparkles size={14} />
                  Welcome Back
                </div>

                <h1 className="text-4xl font-black leading-tight xl:text-5xl">
                  Continue your
                  <span className="block text-white/80">
                    learning journey.
                  </span>
                </h1>

                <p className="mt-6 max-w-md text-base leading-7 text-white/80">
                  Access your courses, track your progress, work on projects,
                  and keep building the skills that move your career forward.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-12 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <ShieldCheck size={22} className="mb-3" />

                <p className="text-sm font-bold">
                  Secure Access
                </p>

                <p className="mt-1 text-xs leading-5 text-white/65">
                  Protected account and session management.
                </p>
              </div>

              <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <Sparkles size={22} className="mb-3" />

                <p className="text-sm font-bold">
                  Keep Learning
                </p>

                <p className="mt-1 text-xs leading-5 text-white/65">
                  Courses, projects and progress in one place.
                </p>
              </div>
            </div>
          </div>

          {/* =================================================
              RIGHT LOGIN FORM
          ================================================= */}

          <div className="relative p-6 sm:p-10 lg:p-12 xl:p-14">
            {/* Mobile logo */}

            <div className="mb-8 flex items-center gap-3 lg:hidden">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white p-1 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                <img
                  src={logo}
                  alt="Pinaki IT"
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>

              <div>
                <p className="font-extrabold text-slate-900 dark:text-white">
                  Pinaki IT
                </p>

                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Learning Portal
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-md">
              <div className="mb-8">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                  <LockKeyhole size={23} />
                </div>

                <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                  Welcome back
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                  Sign in to continue to your Pinaki IT learning experience.
                </p>
              </div>

              {/* Error */}

              {error && (
                <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-emerald-500 dark:focus:bg-slate-900"
                    />
                  </div>
                </div>

                {/* Password */}

                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-bold text-slate-700 dark:text-slate-200"
                    >
                      Password
                    </label>
                  </div>

                  <div className="relative">
                    <LockKeyhole
                      size={18}
                      className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      autoComplete="current-password"
                      value={form.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-12 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-emerald-500 dark:focus:bg-slate-900"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700 dark:hover:bg-slate-800 dark:hover:text-slate-200"
                      aria-label={
                        showPassword
                          ? "Hide password"
                          : "Show password"
                      }
                    >
                      {showPassword ? (
                        <EyeOff size={18} />
                      ) : (
                        <Eye size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  disabled={loading}
                  className="group flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-5 text-sm font-extrabold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/25 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                      Signing in...
                    </>
                  ) : (
                    <>
                      Sign In
                      <ArrowRight
                        size={17}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </>
                  )}
                </button>
              </form>

              {/* Register */}

              <div className="mt-8 text-center">
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    state={{
                      from: location.state?.from,
                    }}
                    className="font-bold text-emerald-600 transition-colors hover:text-teal-600 dark:text-emerald-400 dark:hover:text-teal-400"
                  >
                    Create an account
                  </Link>
                </p>
              </div>

              {/* Verification reminder */}

              <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/70">
                <p className="text-xs leading-5 text-slate-500 dark:text-slate-400">
                  New account? Complete email verification after registration
                  before signing in.
                </p>

                <Link
                  to="/verify-email"
                  className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-teal-600 dark:text-emerald-400 dark:hover:text-teal-400"
                >
                  Verify your email
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;