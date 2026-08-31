import { useState } from "react";

import {
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
} from "lucide-react";

const reviews = [
  {
    name: "Aryan Rangari",
    date: "23 July 2025",
    review: "Great place and a very good learning experience.",
    rating: 5,
  },
  {
    name: "Rahul Sharma",
    date: "15 June 2025",
    review:
      "The training sessions were practical and really helpful for building technical skills.",
    rating: 5,
  },
  {
    name: "Priya Singh",
    date: "02 May 2025",
    review:
      "Good environment, supportive mentors and useful industry-oriented guidance.",
    rating: 5,
  },
  {
    name: "Ankit Kumar",
    date: "18 April 2025",
    review:
      "The team was professional and the overall learning experience was excellent.",
    rating: 5,
  },
];

const avatars = [
  "https://i.pravatar.cc/150?img=12",
  "https://i.pravatar.cc/150?img=32",
  "https://i.pravatar.cc/150?img=47",
  "https://i.pravatar.cc/150?img=5",
  "https://i.pravatar.cc/150?img=11",
  "https://i.pravatar.cc/150?img=13",
  "https://i.pravatar.cc/150?img=15",
  "https://i.pravatar.cc/150?img=20",
];

const avatarStyles = [
  {
    position: "left-[10%] top-[17%]",
    size: "h-20 w-20",
    border: "border-pink-300",
  },
  {
    position: "right-[12%] top-[8%]",
    size: "h-24 w-24",
    border: "border-yellow-300",
  },
  {
    position: "left-[3%] top-[45%]",
    size: "h-20 w-20",
    border: "border-blue-400",
  },
  {
    position: "right-[1%] top-[43%]",
    size: "h-24 w-24",
    border: "border-purple-400",
  },
  {
    position: "left-[16%] bottom-[11%]",
    size: "h-20 w-20",
    border: "border-yellow-300",
  },
  {
    position: "right-[15%] bottom-[7%]",
    size: "h-24 w-24",
    border: "border-emerald-300",
  },
  {
    position: "left-[31%] top-[5%]",
    size: "h-14 w-14",
    border: "border-cyan-300",
  },
  {
    position: "right-[28%] bottom-[15%]",
    size: "h-14 w-14",
    border: "border-orange-300",
  },
];

const GoogleReviews = () => {
  const [current, setCurrent] = useState(0);

  const nextReview = () => {
    setCurrent((prev) => (prev + 1) % reviews.length);
  };

  const previousReview = () => {
    setCurrent(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  const review = reviews[current];

  return (
    <section
      className="
        relative
        overflow-hidden
        py-24
        transition-colors
        duration-300

        bg-gradient-to-b
        from-emerald-50
        via-white
        to-slate-50

        dark:from-slate-950
        dark:via-[#020617]
        dark:to-slate-950
      "
    >
      {/* =========================================================
          BACKGROUND GLOWS
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -left-48
          -top-48
          h-[600px]
          w-[600px]
          rounded-full
          bg-emerald-300/20
          blur-[150px]
          dark:bg-emerald-500/10
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          -right-48
          -bottom-48
          h-[600px]
          w-[600px]
          rounded-full
          bg-green-300/20
          blur-[160px]
          dark:bg-green-500/10
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =======================================================
            HEADING
        ======================================================= */}

        <div className="mb-16 text-center">

          <p
            className="
              text-sm
              font-bold
              uppercase
              tracking-[0.3em]
              text-emerald-600
              dark:text-emerald-400
            "
          >
            GOOGLE REVIEWS
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-extrabold
              tracking-tight
              text-slate-900
              md:text-5xl
              dark:text-white
            "
          >
            What Our{" "}

            <span
              className="
                bg-gradient-to-r
                from-green-600
                via-emerald-500
                to-green-400
                bg-clip-text
                text-transparent
              "
            >
              Community
            </span>{" "}

            Says
          </h2>

          <p
            className="
              mx-auto
              mt-5
              max-w-2xl
              text-lg
              leading-8
              text-slate-600
              dark:text-slate-300
            "
          >
            Real experiences from students, professionals and
            learners who have been part of the Pinaki IT journey.
          </p>

        </div>

        {/* =======================================================
            MAIN CONTENT
        ======================================================= */}

        <div
          className="
            grid
            items-center
            gap-16
            lg:grid-cols-[1.05fr_0.95fr]
          "
        >

          {/* =====================================================
              LEFT — EARTH / COMMUNITY VISUAL
          ===================================================== */}

          <div
            className="
              relative
              flex
              min-h-[560px]
              items-center
              justify-center
              overflow-visible
            "
          >

            {/* Large ambient glow */}

            <div
              className="
                absolute
                h-[470px]
                w-[470px]
                rounded-full
                bg-emerald-400/10
                blur-[100px]
                dark:bg-emerald-500/10
              "
            />

            {/* =================================================
                GLOBE
            ================================================= */}

            <div
              className="
                relative
                h-[430px]
                w-[430px]
                rounded-full

                border
                border-emerald-400/30

                bg-gradient-to-br
                from-emerald-100/30
                via-transparent
                to-cyan-100/20

                shadow-[0_0_100px_rgba(16,185,129,0.12)]

                dark:border-emerald-500/20
                dark:from-emerald-500/[0.04]
                dark:to-cyan-500/[0.03]
                dark:shadow-[0_0_120px_rgba(16,185,129,0.08)]
              "
            >

              {/* Outer globe ring */}

              <div
                className="
                  absolute
                  inset-[-18px]
                  rounded-full
                  border
                  border-emerald-300/15
                  dark:border-emerald-500/10
                "
              />

              {/* Inner globe ring */}

              <div
                className="
                  absolute
                  inset-[42px]
                  rounded-full
                  border
                  border-dashed
                  border-emerald-400/20
                  dark:border-emerald-500/15
                "
              />

              {/* =================================================
                  VERTICAL LONGITUDE LINES
              ================================================= */}

              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-full
                  w-[110px]
                  -translate-x-1/2
                  rounded-[50%]
                  border-x
                  border-emerald-400/20
                  dark:border-emerald-500/15
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-0
                  h-full
                  w-[230px]
                  -translate-x-1/2
                  rounded-[50%]
                  border-x
                  border-emerald-400/15
                  dark:border-emerald-500/10
                "
              />

              {/* =================================================
                  HORIZONTAL LATITUDE LINES
              ================================================= */}

              <div
                className="
                  absolute
                  left-0
                  top-1/2
                  h-[110px]
                  w-full
                  -translate-y-1/2
                  rounded-[50%]
                  border-y
                  border-emerald-400/20
                  dark:border-emerald-500/15
                "
              />

              <div
                className="
                  absolute
                  left-0
                  top-1/2
                  h-[230px]
                  w-full
                  -translate-y-1/2
                  rounded-[50%]
                  border-y
                  border-emerald-400/15
                  dark:border-emerald-500/10
                "
              />

              {/* Diagonal latitude */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[320px]
                  w-full
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-[50%]
                  border
                  border-emerald-400/10
                  rotate-[25deg]
                  dark:border-emerald-500/10
                "
              />

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  h-[320px]
                  w-full
                  -translate-x-1/2
                  -translate-y-1/2
                  rounded-[50%]
                  border
                  border-emerald-400/10
                  -rotate-[25deg]
                  dark:border-emerald-500/10
                "
              />

              {/* =================================================
                  CENTER
              ================================================= */}

              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  z-10
                  flex
                  h-36
                  w-36
                  -translate-x-1/2
                  -translate-y-1/2
                  flex-col
                  items-center
                  justify-center
                  rounded-full

                  border
                  border-emerald-400/30

                  bg-white/80
                  shadow-[0_0_50px_rgba(16,185,129,0.12)]
                  backdrop-blur-xl

                  dark:border-emerald-500/20
                  dark:bg-slate-900/85
                "
              >

                <Quote
                  size={34}
                  strokeWidth={1.7}
                  className="text-emerald-500"
                />

                <span
                  className="
                    mt-2
                    text-sm
                    font-bold
                    text-slate-800
                    dark:text-white
                  "
                >
                  Our Community
                </span>

                <span
                  className="
                    mt-1
                    text-[10px]
                    uppercase
                    tracking-[0.2em]
                    text-emerald-600
                    dark:text-emerald-400
                  "
                >
                  Together
                </span>

              </div>

            </div>

            {/* =================================================
                FLOATING AVATARS
            ================================================= */}

            {avatarStyles.map((style, index) => (
              <div
                key={index}
                className={`
                  absolute
                  ${style.position}
                  ${style.size}
                  z-20

                  rounded-full
                  border-4
                  ${style.border}

                  bg-white
                  p-1

                  shadow-[0_15px_40px_rgba(15,23,42,0.18)]

                  transition-all
                  duration-500

                  hover:z-30
                  hover:scale-110
                  hover:-translate-y-2

                  dark:bg-slate-900
                  dark:shadow-[0_15px_40px_rgba(0,0,0,0.45)]
                `}
              >
                <img
                  src={avatars[index]}
                  alt="Community member"
                  className="
                    h-full
                    w-full
                    rounded-full
                    object-cover
                  "
                />
              </div>
            ))}

            {/* =================================================
                DECORATIVE FLOATING DOTS
            ================================================= */}

            <div
              className="
                absolute
                right-[2%]
                top-[31%]
                h-6
                w-6
                rounded-full
                bg-blue-500/70
                shadow-[0_0_25px_rgba(59,130,246,0.35)]
              "
            />

            <div
              className="
                absolute
                left-[14%]
                bottom-[27%]
                h-5
                w-5
                rounded-full
                bg-emerald-500/80
                shadow-[0_0_25px_rgba(16,185,129,0.35)]
              "
            />

            <div
              className="
                absolute
                right-[25%]
                bottom-[19%]
                h-3
                w-3
                rounded-full
                bg-purple-500/70
              "
            />

            <div
              className="
                absolute
                left-[28%]
                top-[14%]
                h-3
                w-3
                rounded-full
                bg-pink-400/70
              "
            />

          </div>

          {/* =====================================================
              RIGHT — GOOGLE REVIEWS
          ===================================================== */}

          <div className="relative">

            <div
              className="
                rounded-[32px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-[0_25px_70px_rgba(15,23,42,0.10)]

                transition-all
                duration-300

                dark:border-slate-800
                dark:bg-slate-900
                dark:shadow-[0_25px_70px_rgba(0,0,0,0.30)]
              "
            >

              {/* =================================================
                  GOOGLE HEADER
              ================================================= */}

              <div className="flex items-center justify-between">

                <div>

                  <div className="text-3xl font-bold tracking-tight">

                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>

                  </div>

                  <div
                    className="
                      mt-1
                      text-sm
                      font-medium
                      text-slate-500
                      dark:text-slate-400
                    "
                  >
                    Google Reviews
                  </div>

                </div>

                <div className="text-right">

                  <div
                    className="
                      text-3xl
                      font-extrabold
                      text-slate-900
                      dark:text-white
                    "
                  >
                    4.7
                  </div>

                  <div className="mt-1 flex justify-end gap-1">

                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        size={18}
                        fill="currentColor"
                        className="text-yellow-400"
                      />
                    ))}

                  </div>

                </div>

              </div>

              {/* =================================================
                  REVIEW DIVIDER
              ================================================= */}

              <div
                className="
                  my-7
                  h-px
                  bg-slate-200
                  dark:bg-slate-800
                "
              />

              {/* =================================================
                  REVIEW CARD
              ================================================= */}

              <div
                className="
                  relative
                  min-h-[280px]
                  rounded-2xl
                  bg-slate-50
                  p-7

                  transition-colors
                  duration-300

                  dark:bg-slate-950
                "
              >

                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-4">

                    <div
                      className="
                        flex
                        h-14
                        w-14
                        items-center
                        justify-center
                        rounded-full

                        bg-gradient-to-br
                        from-purple-400
                        to-purple-600

                        text-xl
                        font-bold
                        text-white

                        shadow-lg
                      "
                    >
                      {review.name.charAt(0)}
                    </div>

                    <div>

                      <h3
                        className="
                          font-bold
                          text-slate-900
                          dark:text-white
                        "
                      >
                        {review.name}
                      </h3>

                      <p
                        className="
                          text-sm
                          text-slate-500
                          dark:text-slate-400
                        "
                      >
                        {review.date}
                      </p>

                    </div>

                  </div>

                  {/* Google G */}

                  <div className="text-2xl font-bold">
                    <span className="text-[#4285F4]">G</span>
                  </div>

                </div>

                {/* Stars */}

                <div className="mt-5 flex gap-1">

                  {[...Array(review.rating)].map((_, index) => (
                    <Star
                      key={index}
                      size={20}
                      fill="currentColor"
                      className="text-yellow-400"
                    />
                  ))}

                </div>

                {/* Review */}

                <p
                  className="
                    mt-5
                    text-lg
                    leading-8
                    text-slate-700
                    dark:text-slate-300
                  "
                >
                  "{review.review}"
                </p>

                {/* Decorative quote */}

                <Quote
                  size={46}
                  className="
                    absolute
                    bottom-5
                    right-6
                    text-emerald-200

                    dark:text-emerald-900
                  "
                />

              </div>

              {/* =================================================
                  NAVIGATION
              ================================================= */}

              <div className="mt-6 flex items-center justify-between">

                {/* Indicators */}

                <div className="flex gap-2">

                  {reviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrent(index)}
                      aria-label={`Go to review ${index + 1}`}
                      className={`
                        h-2
                        rounded-full
                        transition-all
                        duration-300

                        ${
                          current === index
                            ? "w-8 bg-emerald-500"
                            : "w-2 bg-slate-300 dark:bg-slate-700"
                        }
                      `}
                    />
                  ))}

                </div>

                {/* Arrows */}

                <div className="flex gap-3">

                  <button
                    onClick={previousReview}
                    aria-label="Previous review"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full

                      border
                      border-slate-200

                      bg-white
                      text-slate-700

                      shadow-sm

                      transition-all
                      duration-300

                      hover:-translate-x-1
                      hover:border-emerald-500
                      hover:text-emerald-600

                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-white
                    "
                  >
                    <ChevronLeft size={20} />
                  </button>

                  <button
                    onClick={nextReview}
                    aria-label="Next review"
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full

                      border
                      border-slate-200

                      bg-white
                      text-slate-700

                      shadow-sm

                      transition-all
                      duration-300

                      hover:translate-x-1
                      hover:border-emerald-500
                      hover:text-emerald-600

                      dark:border-slate-700
                      dark:bg-slate-800
                      dark:text-white
                    "
                  >
                    <ChevronRight size={20} />
                  </button>

                </div>

              </div>

              {/* =================================================
                  CTA
              ================================================= */}

              <button
                type="button"
                className="
                  mt-7
                  w-full
                  rounded-full

                  bg-gradient-to-r
                  from-emerald-600
                  via-green-500
                  to-teal-500

                  px-6
                  py-4

                  font-semibold
                  text-white

                  shadow-lg

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:shadow-emerald-500/30

                  dark:from-emerald-500
                  dark:via-green-500
                  dark:to-teal-500
                  dark:shadow-emerald-950/40
                "
              >
                Read More Google Reviews
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default GoogleReviews;