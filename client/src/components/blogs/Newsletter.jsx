import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  Sparkles,
} from "lucide-react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) return;

    setSubmitted(true);
    setEmail("");
  };

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-white
        py-16
        sm:py-20
        lg:py-24
        dark:bg-slate-950
      "
    >
      {/* Ambient glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          top-1/2
          h-80
          w-80
          -translate-y-1/2
          rounded-full
          bg-emerald-300/15
          blur-[120px]
          dark:bg-emerald-500/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-1/2
          h-80
          w-80
          -translate-y-1/2
          rounded-full
          bg-teal-300/15
          blur-[120px]
          dark:bg-teal-500/10
        "
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div
          className="
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-emerald-200
            bg-gradient-to-br
            from-emerald-50
            via-white
            to-teal-50
            px-6
            py-10
            shadow-xl
            shadow-emerald-900/5
            sm:px-10
            sm:py-12
            lg:px-14
            lg:py-14
            dark:border-emerald-500/20
            dark:from-emerald-950/40
            dark:via-slate-900
            dark:to-teal-950/30
            dark:shadow-black/20
          "
        >
          {/* Decorative glow */}
          <div
            className="
              pointer-events-none
              absolute
              -right-20
              -top-24
              h-64
              w-64
              rounded-full
              bg-emerald-300/20
              blur-[90px]
              dark:bg-emerald-400/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -bottom-24
              left-1/3
              h-56
              w-56
              rounded-full
              bg-teal-300/15
              blur-[80px]
              dark:bg-teal-400/10
            "
          />

          <div
            className="
              relative
              grid
              items-center
              gap-10
              lg:grid-cols-[1fr_0.9fr]
              lg:gap-16
            "
          >
            {/* Content */}
            <div>
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-emerald-200
                  bg-white/70
                  px-4
                  py-2
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-emerald-700
                  backdrop-blur-sm
                  dark:border-emerald-400/20
                  dark:bg-emerald-400/10
                  dark:text-emerald-300
                "
              >
                <Sparkles size={14} />
                Stay In The Loop
              </div>

              <h2
                className="
                  mt-5
                  max-w-2xl
                  text-3xl
                  font-black
                  leading-tight
                  tracking-tight
                  text-slate-950
                  sm:text-4xl
                  lg:text-5xl
                  dark:text-white
                "
              >
                Get Smarter About
                <span
                  className="
                    block
                    bg-gradient-to-r
                    from-emerald-600
                    via-green-500
                    to-teal-500
                    bg-clip-text
                    text-transparent
                    dark:from-emerald-400
                    dark:via-green-400
                    dark:to-teal-400
                  "
                >
                  Technology.
                </span>
              </h2>

              <p
                className="
                  mt-5
                  max-w-xl
                  text-base
                  leading-7
                  text-slate-600
                  sm:text-lg
                  sm:leading-8
                  dark:text-slate-400
                "
              >
                Receive useful technology insights, career tips and industry
                updates directly in your inbox. No unnecessary noise.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3">
                {[
                  "Technology insights",
                  "Career guidance",
                  "Industry trends",
                ].map((item) => (
                  <div
                    key={item}
                    className="
                      flex
                      items-center
                      gap-2
                      text-sm
                      font-semibold
                      text-slate-600
                      dark:text-slate-400
                    "
                  >
                    <CheckCircle2
                      size={16}
                      className="text-emerald-600 dark:text-emerald-400"
                    />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div
              className="
                rounded-[26px]
                border
                border-white/80
                bg-white/80
                p-5
                shadow-lg
                shadow-slate-900/5
                backdrop-blur-md
                sm:p-6
                dark:border-slate-700/70
                dark:bg-slate-900/80
                dark:shadow-black/20
              "
            >
              {submitted ? (
                <div className="flex min-h-[220px] flex-col items-center justify-center text-center">
                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      bg-emerald-100
                      text-emerald-600
                      dark:bg-emerald-400/10
                      dark:text-emerald-400
                    "
                  >
                    <CheckCircle2 size={28} />
                  </div>

                  <h3
                    className="
                      mt-5
                      text-xl
                      font-black
                      text-slate-900
                      dark:text-white
                    "
                  >
                    You're on the list.
                  </h3>

                  <p
                    className="
                      mt-2
                      max-w-sm
                      text-sm
                      leading-6
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Thanks for subscribing to Pinaki Insights.
                  </p>
                </div>
              ) : (
                <>
                  <div
                    className="
                      flex
                      items-center
                      gap-3
                      text-sm
                      font-bold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    <div
                      className="
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-xl
                        bg-emerald-50
                        text-emerald-600
                        dark:bg-emerald-400/10
                        dark:text-emerald-400
                      "
                    >
                      <Mail size={19} />
                    </div>

                    Subscribe to Pinaki Insights
                  </div>

                  <p
                    className="
                      mt-4
                      text-sm
                      leading-6
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    One useful email when there's something worth knowing.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-6">
                    <label
                      htmlFor="newsletter-email"
                      className="sr-only"
                    >
                      Email address
                    </label>

                    <div
                      className="
                        flex
                        flex-col
                        gap-3
                        sm:flex-row
                      "
                    >
                      <input
                        id="newsletter-email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder="Enter your email"
                        required
                        className="
                          min-w-0
                          flex-1
                          rounded-full
                          border
                          border-slate-200
                          bg-slate-50
                          px-5
                          py-3.5
                          text-sm
                          font-medium
                          text-slate-800
                          outline-none
                          transition-all
                          placeholder:text-slate-400
                          focus:border-emerald-400
                          focus:bg-white
                          focus:ring-4
                          focus:ring-emerald-500/10
                          dark:border-slate-700
                          dark:bg-slate-800
                          dark:text-white
                          dark:placeholder:text-slate-500
                          dark:focus:border-emerald-500
                          dark:focus:bg-slate-800
                        "
                      />

                      <button
                        type="submit"
                        className="
                          group
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          rounded-full
                          bg-gradient-to-r
                          from-emerald-600
                          to-teal-500
                          px-6
                          py-3.5
                          text-sm
                          font-bold
                          text-white
                          shadow-lg
                          shadow-emerald-600/20
                          transition-all
                          duration-300
                          hover:-translate-y-0.5
                          hover:shadow-xl
                          hover:shadow-emerald-600/25
                        "
                      >
                        Subscribe
                        <ArrowRight
                          size={16}
                          className="
                            transition-transform
                            duration-300
                            group-hover:translate-x-1
                          "
                        />
                      </button>
                    </div>
                  </form>

                  <p
                    className="
                      mt-4
                      text-[11px]
                      leading-5
                      text-slate-400
                      dark:text-slate-500
                    "
                  >
                    By subscribing, you agree to receive updates from Pinaki
                    IT. You can unsubscribe anytime.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;