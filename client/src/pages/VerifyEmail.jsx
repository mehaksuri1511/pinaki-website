import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  KeyRound,
  Mail,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { verifyEmail } from "../API/authService.js";
import logo from "../assets/images/pinaki-logo.jpeg.png";

const VerifyEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");

  const [loading, setLoading] = useState(false);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const savedEmail = sessionStorage.getItem(
      "pinaki_verification_email"
    );

    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    const cleanToken = token.trim();

    if (!cleanToken) {
      setError("Please enter the verification token.");
      return;
    }

    try {
      setLoading(true);

      await verifyEmail(cleanToken);

      setVerified(true);

      /*
       * The verification token is no longer needed
       * once verification succeeds.
       */
      sessionStorage.removeItem("pinaki_verification_email");

      /*
       * Verification is intentionally separate from login.
       *
       * Verify
       *   ↓
       * Login
       *   ↓
       * Original protected page OR Learning Portal
       */
      const from = location.state?.from;

      setTimeout(() => {
        navigate("/login", {
          replace: true,
          state: {
            from,
          },
        });
      }, 1800);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Verification failed. Please check the token and try again."
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
                  <ShieldCheck size={14} />
                  Account Security
                </div>

                <h1 className="text-4xl font-black leading-tight xl:text-5xl">
                  Verify your
                  <span className="block text-white/80">
                    email address.
                  </span>
                </h1>

                <p className="mt-6 max-w-md text-base leading-7 text-white/80">
                  Email verification helps keep your Pinaki IT account secure
                  and ensures you can access your learning portal safely.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-12 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-md">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
                <ClipboardCheck size={21} />
              </div>

              <p className="font-bold">
                Simple verification
              </p>

              <p className="mt-2 text-sm leading-6 text-white/70">
                Check your email, copy the verification token and paste it
                here. No verification link is required.
              </p>
            </div>
          </div>

          {/* =================================================
              RIGHT VERIFICATION FORM
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
                  Email Verification
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-md">
              {!verified ? (
                <>
                  <div className="mb-8">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <Mail size={23} />
                    </div>

                    <h2 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
                      Verify your email
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-500 dark:text-slate-400">
                      Enter the verification token sent to your email address.
                    </p>
                  </div>

                  {/* Email */}

                  <div className="mb-5">
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
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 text-sm text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-emerald-500 dark:focus:bg-slate-900"
                      />
                    </div>

                    <p className="mt-2 text-xs text-slate-400">
                      This is only used to show which account you're verifying.
                    </p>
                  </div>

                  {/* Error */}

                  {error && (
                    <div className="mb-5 rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    {/* Token */}

                    <div>
                      <label
                        htmlFor="token"
                        className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-200"
                      >
                        Verification Token
                      </label>

                      <div className="relative">
                        <KeyRound
                          size={18}
                          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                          id="token"
                          type="text"
                          value={token}
                          onChange={(e) =>
                            setToken(e.target.value)
                          }
                          placeholder="Paste your verification token"
                          autoComplete="off"
                          spellCheck="false"
                          className="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50 pl-11 pr-4 font-mono text-sm text-slate-900 outline-none transition-all placeholder:font-sans placeholder:text-slate-400 focus:border-emerald-500 focus:bg-white focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:focus:border-emerald-500 dark:focus:bg-slate-900"
                        />
                      </div>

                      <p className="mt-2 text-xs leading-5 text-slate-400">
                        Copy the token exactly as it appears in the
                        verification email.
                      </p>
                    </div>

                    {/* Submit */}

                    <button
                      type="submit"
                      disabled={loading}
                      className="group mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 px-5 text-sm font-extrabold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/25 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                    >
                      {loading ? (
                        <>
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                          Verifying...
                        </>
                      ) : (
                        <>
                          Verify Email
                          <ArrowRight
                            size={17}
                            className="transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </>
                      )}
                    </button>
                  </form>

                  {/* Instructions */}

                  <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/70">
                    <div className="flex gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                        <Sparkles size={16} />
                      </div>

                      <div>
                        <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                          Where is my token?
                        </p>

                        <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">
                          Check the inbox of the email address you used during
                          registration. Copy the token from the Pinaki IT
                          verification email and paste it above.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Login */}

                  <div className="mt-8 text-center">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      Already verified?{" "}
                      <Link
                        to="/login"
                        state={{
                          from: location.state?.from,
                        }}
                        className="font-bold text-emerald-600 transition-colors hover:text-teal-600 dark:text-emerald-400 dark:hover:text-teal-400"
                      >
                        Go to Login
                      </Link>
                    </p>
                  </div>
                </>
              ) : (
                /* =================================================
                   SUCCESS STATE
                ================================================= */

                <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <div className="relative">
                    <div className="absolute inset-0 rounded-full bg-emerald-400/20 blur-2xl dark:bg-emerald-500/10" />

                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
                      <CheckCircle2 size={48} />
                    </div>
                  </div>

                  <h2 className="mt-8 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                    Email verified!
                  </h2>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Your email has been successfully verified. Redirecting
                    you to login so you can access your Pinaki IT account.
                  </p>

                  <div className="mt-8 flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-400">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                    Redirecting to Login...
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VerifyEmail;