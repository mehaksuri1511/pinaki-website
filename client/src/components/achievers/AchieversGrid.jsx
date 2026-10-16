
import { useMemo, useState } from "react";
import { Search, UsersRound, X } from "lucide-react";
import StudentCard from "./StudentCard";
import { achieversData } from "../../data/achieversData";
import ScrollReveal from "../common/ScrollReveal";
import SectionWatermark from "../common/SectionWatermark";

const AchieversGrid = () => {
  const [search, setSearch] = useState("");

  const filteredStudents = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return achieversData;

    return achieversData.filter((student) => {
      const searchableText = [
        student.name,
        student.degree,
        student.specialization,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      return searchableText.includes(query);
    });
  }, [search]);

  return (
    <section
      id="student-directory"
      className="
        relative isolate overflow-hidden
        bg-slate-50 py-16 sm:py-20 lg:py-24
        dark:bg-slate-950
        scroll-mt-24
      "
    >
      <SectionWatermark
        icons={[
          "Users",
          "Code2",
          "GraduationCap",
          "Sparkles",
          "Trophy",
          "Rocket",
        ]}
        intensity="subtle"
      />

      <div
        className="
          pointer-events-none absolute -left-40 top-1/4
          h-80 w-80 rounded-full bg-emerald-300/15
          blur-[120px] dark:bg-emerald-500/5
        "
      />

      <div
        className="
          pointer-events-none absolute -right-40 bottom-0
          h-80 w-80 rounded-full bg-teal-300/15
          blur-[120px] dark:bg-teal-500/5
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <div
                className="
                  inline-flex items-center gap-2
                  rounded-full border border-emerald-200
                  bg-emerald-50 px-4 py-2
                  text-xs font-bold uppercase
                  tracking-[0.16em] text-emerald-700
                  dark:border-emerald-500/20
                  dark:bg-emerald-500/10 dark:text-emerald-300
                "
              >
                <UsersRound size={14} />
                The Community
              </div>

              <h2
                className="
                  mt-5 text-3xl font-black tracking-tight
                  text-slate-950 sm:text-4xl lg:text-5xl
                  dark:text-white
                "
              >
                Meet the{" "}
                <span
                  className="
                    bg-gradient-to-r from-emerald-600
                    via-green-500 to-teal-500
                    bg-clip-text text-transparent
                    dark:from-emerald-400
                    dark:via-green-400 dark:to-teal-300
                  "
                >
                  Developers.
                </span>
              </h2>

              <p
                className="
                  mt-4 text-base leading-7 text-slate-600
                  sm:text-lg dark:text-slate-400
                "
              >
                Discover student profiles across coding and
                developer platforms, all in one place.
              </p>
            </div>

            <div
              className="
                inline-flex w-fit items-center gap-2
                rounded-2xl border border-slate-200
                bg-white/80 px-4 py-3 text-sm
                font-semibold text-slate-700 shadow-sm
                dark:border-slate-800 dark:bg-slate-900/70
                dark:text-slate-200
              "
            >
              <UsersRound
                size={18}
                className="text-emerald-600 dark:text-emerald-400"
              />

              {achieversData.length} Student Profiles
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <div className="mb-8">
            <label htmlFor="achievers-search" className="sr-only">
              Search student profiles
            </label>

            <div
              className="
                group flex max-w-xl items-center gap-3
                rounded-2xl border border-slate-200
                bg-white/90 px-4 py-3.5
                shadow-sm transition-all duration-300
                focus-within:border-emerald-400
                focus-within:ring-4
                focus-within:ring-emerald-500/10
                dark:border-slate-800 dark:bg-slate-900/80
                dark:focus-within:border-emerald-500
              "
            >
              <Search
                size={19}
                className="
                  shrink-0 text-slate-400
                  transition-colors group-focus-within:text-emerald-600
                  dark:group-focus-within:text-emerald-400
                "
              />

              <input
                id="achievers-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by student name or specialization..."
                className="
                  min-w-0 flex-1 bg-transparent text-sm
                  text-slate-900 outline-none
                  placeholder:text-slate-400
                  dark:text-white dark:placeholder:text-slate-500
                "
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Clear search"
                  className="
                    rounded-lg p-1.5 text-slate-400
                    transition hover:bg-slate-100
                    hover:text-slate-700
                    dark:hover:bg-slate-800
                    dark:hover:text-white
                  "
                >
                  <X size={17} />
                </button>
              )}
            </div>
          </div>
        </ScrollReveal>

        {filteredStudents.length > 0 ? (
          <>
            <p
              aria-live="polite"
              className="
                mb-5 text-sm text-slate-500
                dark:text-slate-400
              "
            >
              Showing {filteredStudents.length}{" "}
              {filteredStudents.length === 1 ? "profile" : "profiles"}
            </p>

            <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 lg:gap-6">
              {filteredStudents.map((student, index) => (
                <StudentCard
                  key={student.id}
                  student={student}
                  index={index}
                />
              ))}
            </div>
          </>
        ) : (
          <div
            className="
              rounded-[28px] border border-dashed
              border-slate-300 bg-white/70 px-6 py-16
              text-center dark:border-slate-700
              dark:bg-slate-900/50
            "
          >
            <div
              className="
                mx-auto flex h-14 w-14 items-center
                justify-center rounded-2xl bg-emerald-50
                text-emerald-600
                dark:bg-emerald-500/10 dark:text-emerald-400
              "
            >
              <Search size={25} />
            </div>

            <h3 className="mt-5 text-lg font-bold text-slate-900 dark:text-white">
              No students found
            </h3>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Try another name or specialization.
            </p>

            <button
              type="button"
              onClick={() => setSearch("")}
              className="
                mt-5 rounded-full bg-emerald-600
                px-5 py-2.5 text-sm font-semibold
                text-white transition hover:bg-emerald-700
              "
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AchieversGrid;
