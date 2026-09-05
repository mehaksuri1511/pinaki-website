import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Trophy,
  Target,
  Brain,
  ShieldCheck,
  Code2,
  BarChart3,
  Megaphone,
  Database,
} from "lucide-react";

import {
  quizCourses,
  courseQuizQuestions,
} from "../data/courseQuizData";

const courseIcons = {
  "generative-ai": Brain,
  "cyber-security": ShieldCheck,
  "machine-learning": BarChart3,
  "digital-marketing": Megaphone,
  "full-stack": Code2,
  "data-scientist": Database,
};

const courseReasons = {
  "generative-ai":
    "Your answers show a strong interest in AI, automation and intelligent technologies.",

  "cyber-security":
    "Your answers indicate a strong interest in security, problem solving and protecting digital systems.",

  "machine-learning":
    "Your answers show a strong preference for data, analytics, prediction and intelligent systems.",

  "digital-marketing":
    "Your answers suggest an interest in branding, digital growth, content and business strategy.",

  "full-stack":
    "Your answers indicate that you enjoy building applications, websites and complete digital products.",

  "data-scientist":
    "Your answers show a strong interest in data-driven decision making, statistics and advanced analytics.",
};

const CourseQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const question = courseQuizQuestions[currentQuestion];

  const selectedOption = selectedAnswers[question?.id];

  const progress =
    ((currentQuestion + (selectedOption ? 1 : 0)) /
      courseQuizQuestions.length) *
    100;

  const handleSelectOption = (optionId) => {
    setSelectedAnswers((previous) => ({
      ...previous,
      [question.id]: optionId,
    }));
  };

  const handleNext = () => {
    if (!selectedOption) return;

    if (currentQuestion === courseQuizQuestions.length - 1) {
      setShowResult(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    setCurrentQuestion((previous) => previous + 1);
  };

  const handlePrevious = () => {
    if (currentQuestion === 0) return;

    setCurrentQuestion((previous) => previous - 1);
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResult(false);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /*
   * Calculate course recommendations.
   *
   * Each question has four options.
   * Every option contains scores for all six courses.
   *
   * The score is normalized against the maximum
   * possible score for each course so that the
   * percentage is a proper match percentage.
   */
  const recommendations = useMemo(() => {
    const totals = {};

    quizCourses.forEach((course) => {
      totals[course.id] = {
        score: 0,
        maximum: 0,
      };
    });

    courseQuizQuestions.forEach((quizQuestion) => {
      const selectedAnswer = selectedAnswers[quizQuestion.id];

      const selectedOptionData = quizQuestion.options.find(
        (option) => option.id === selectedAnswer
      );

      if (!selectedOptionData) return;

      quizCourses.forEach((course) => {
        const score = selectedOptionData.scores?.[course.id] ?? 0;

        totals[course.id].score += score;
      });
    });

    /*
     * Find the maximum possible score for each course.
     * This is important because every question may have
     * different scoring values.
     */
    quizCourses.forEach((course) => {
      courseQuizQuestions.forEach((quizQuestion) => {
        const maximumForQuestion = Math.max(
          ...quizQuestion.options.map(
            (option) => option.scores?.[course.id] ?? 0
          )
        );

        totals[course.id].maximum += maximumForQuestion;
      });
    });

    return quizCourses
      .map((course) => {
        const result = totals[course.id];

        const percentage =
          result.maximum > 0
            ? Math.round((result.score / result.maximum) * 100)
            : 0;

        return {
          ...course,
          score: result.score,
          maximum: result.maximum,
          percentage,
        };
      })
      .sort((a, b) => b.percentage - a.percentage);
  }, [selectedAnswers]);

  if (showResult) {
    return (
      <main className="min-h-screen overflow-hidden bg-slate-50 pt-24 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
        {/* Ambient background */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[10%] h-96 w-96 rounded-full bg-emerald-300/20 blur-[130px] dark:bg-emerald-500/10" />
          <div className="absolute bottom-[-10%] right-[-5%] h-[28rem] w-[28rem] rounded-full bg-teal-300/20 blur-[140px] dark:bg-teal-500/10" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:py-16">
          {/* Result header */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 shadow-lg shadow-emerald-500/10 dark:border-emerald-400/20 dark:bg-emerald-400/10">
              <Trophy
                size={30}
                className="text-emerald-600 dark:text-emerald-400"
              />
            </div>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 shadow-sm dark:border-emerald-400/20 dark:bg-slate-900 dark:text-emerald-300">
              <Sparkles size={14} />
              Your Results
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
              Your Best
              <span className="ml-2 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:via-green-400 dark:to-teal-400">
                Course Matches
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
              Based on your answers, these courses appear to be the strongest
              matches for your interests, skills and career direction.
            </p>
          </motion.div>

          {/* Top 3 */}
          <div className="mt-12 space-y-5">
            {recommendations.slice(0, 3).map((course, index) => {
              const Icon = courseIcons[course.id] || Target;

              return (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 70 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1.05,
                    delay: index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative overflow-hidden rounded-[28px] border bg-white p-5 shadow-xl transition-all duration-500 hover:-translate-y-1 sm:p-6 dark:bg-slate-900 ${
                    index === 0
                      ? "border-emerald-300 shadow-emerald-500/10 dark:border-emerald-500/40"
                      : "border-slate-200 dark:border-slate-800"
                  }`}
                >
                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-emerald-300/10 blur-3xl dark:bg-emerald-500/10" />

                  <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
                    {/* Rank */}
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-lg font-black ${
                        index === 0
                          ? "bg-emerald-500 text-white"
                          : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      }`}
                    >
                      0{index + 1}
                    </div>

                    {/* Icon */}
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50 dark:border-emerald-400/20 dark:bg-emerald-400/10">
                      <Icon
                        size={25}
                        className="text-emerald-600 dark:text-emerald-400"
                      />
                    </div>

                    {/* Course information */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-xl font-black text-slate-900 dark:text-white sm:text-2xl">
                          {course.name}
                        </h2>

                        {index === 0 && (
                          <span className="rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                            Best Match
                          </span>
                        )}
                      </div>

                      <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">
                        {courseReasons[course.id]}
                      </p>

                      <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: `${course.percentage}%`,
                          }}
                          transition={{
                            duration: 1.2,
                            delay: 0.35 + index * 0.15,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"
                        />
                      </div>
                    </div>

                    {/* Percentage */}
                    <div className="shrink-0 text-left md:text-right">
                      <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400">
                        {course.percentage}%
                      </p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-500">
                        Match
                      </p>
                    </div>

                    {/* Course button */}
                    <Link
                      to={`/courses/${course.slug}`}
                      className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-emerald-600 dark:bg-white dark:text-slate-950 dark:hover:bg-emerald-400"
                    >
                      View Course
                      <ChevronRight size={17} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom actions */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.55,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <button
              type="button"
              onClick={handleRestart}
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-emerald-500 dark:hover:text-emerald-400"
            >
              <RotateCcw size={17} />
              Retake Quiz
            </button>

            <Link
              to="/courses"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-emerald-500/30"
            >
              Explore All Courses
              <ArrowRight size={17} />
            </Link>
          </motion.div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 pt-24 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-10%] top-[15%] h-96 w-96 rounded-full bg-emerald-300/20 blur-[130px] dark:bg-emerald-500/10" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[28rem] w-[28rem] rounded-full bg-teal-300/20 blur-[140px] dark:bg-teal-500/10" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 py-10 sm:px-8 lg:py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 65 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 shadow-sm dark:border-emerald-400/20 dark:bg-slate-900 dark:text-emerald-300">
            <Sparkles size={14} />
            Career Finder
          </div>

          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Find Your
            <span className="ml-2 bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:via-green-400 dark:to-teal-400">
              Perfect Course
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400 sm:text-lg">
            Answer 10 simple questions and discover the courses that best match
            your interests, strengths and career goals.
          </p>
        </motion.div>

        {/* Quiz Card */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.15,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mt-10 overflow-hidden rounded-[30px] border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-900/5 sm:p-8 dark:border-slate-800 dark:bg-slate-900 dark:shadow-black/20"
        >
          {/* Card glow */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl dark:bg-emerald-500/10" />

          <div className="relative">
            {/* Progress header */}
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
                  Question {currentQuestion + 1}
                </p>

                <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-500">
                  of {courseQuizQuestions.length}
                </p>
              </div>

              <div className="text-right">
                <p className="text-sm font-black text-slate-700 dark:text-slate-300">
                  {Math.round(progress)}%
                </p>
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500"
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </div>

            {/* Question */}
            <div className="mt-10 min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={question.id}
                  initial={{
                    opacity: 0,
                    y: 60,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -35,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h2 className="max-w-3xl text-2xl font-black leading-tight text-slate-950 sm:text-3xl lg:text-4xl dark:text-white">
                    {question.question}
                  </h2>

                  <p className="mt-3 text-sm text-slate-500 dark:text-slate-500">
                    Select the option that feels most like you.
                  </p>

                  {/* Options */}
                  <div className="mt-8 grid gap-4">
                    {question.options.map((option, index) => {
                      const isSelected = selectedOption === option.id;

                      return (
                        <motion.button
                          key={option.id}
                          type="button"
                          onClick={() => handleSelectOption(option.id)}
                          initial={{
                            opacity: 0,
                            y: 35,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          transition={{
                            duration: 0.65,
                            delay: index * 0.08,
                            ease: [0.22, 1, 0.36, 1],
                          }}
                          className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                            isSelected
                              ? "border-emerald-500 bg-emerald-50 shadow-lg shadow-emerald-500/10 dark:border-emerald-400 dark:bg-emerald-400/10"
                              : "border-slate-200 bg-slate-50/70 hover:-translate-y-0.5 hover:border-emerald-300 hover:bg-emerald-50/50 dark:border-slate-800 dark:bg-slate-950/50 dark:hover:border-emerald-500/40 dark:hover:bg-emerald-950/20"
                          }`}
                        >
                          <span
                            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-sm font-black transition-all duration-300 ${
                              isSelected
                                ? "bg-emerald-500 text-white"
                                : "bg-white text-slate-600 shadow-sm dark:bg-slate-800 dark:text-slate-300"
                            }`}
                          >
                            {isSelected ? (
                              <Check size={18} />
                            ) : (
                              option.id
                            )}
                          </span>

                          <span
                            className={`flex-1 text-sm font-semibold leading-6 sm:text-base ${
                              isSelected
                                ? "text-emerald-900 dark:text-emerald-200"
                                : "text-slate-700 dark:text-slate-300"
                            }`}
                          >
                            {option.text}
                          </span>

                          <ChevronRight
                            size={19}
                            className={`shrink-0 transition-all duration-300 ${
                              isSelected
                                ? "translate-x-1 text-emerald-600 dark:text-emerald-400"
                                : "text-slate-300 group-hover:translate-x-1 group-hover:text-emerald-500 dark:text-slate-600"
                            }`}
                          />
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition-all duration-300 ${
                  currentQuestion === 0
                    ? "cursor-not-allowed text-slate-300 dark:text-slate-700"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
                }`}
              >
                <ArrowLeft size={17} />
                Back
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!selectedOption}
                className={`inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-300 ${
                  selectedOption
                    ? "bg-gradient-to-r from-emerald-500 to-teal-500 shadow-emerald-500/20 hover:-translate-y-0.5 hover:shadow-emerald-500/30"
                    : "cursor-not-allowed bg-slate-300 shadow-none dark:bg-slate-800"
                }`}
              >
                {currentQuestion === courseQuizQuestions.length - 1
                  ? "See My Results"
                  : "Next Question"}

                <ArrowRight size={17} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Footer hint */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.35,
          }}
          className="mt-6 flex items-center justify-center gap-2 text-center text-xs font-medium text-slate-500 dark:text-slate-600"
        >
          <Target size={14} />
          There are no right or wrong answers — choose what feels most like you.
        </motion.div>
      </div>
    </main>
  );
};

export default CourseQuiz;