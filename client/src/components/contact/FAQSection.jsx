import { useState } from "react";
import {
  ChevronDown,
  HelpCircle,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "How can I enroll in a training program?",
    answer:
      "You can contact our team through phone, email or visit our office to enroll.",
  },
  {
    question: "Do you provide placement assistance?",
    answer:
      "Yes. We provide placement guidance, resume building and interview preparation.",
  },
  {
    question: "Do you offer internships?",
    answer:
      "Yes. Students can apply for internship opportunities throughout the year.",
  },
  {
    question: "Can businesses collaborate with Pinaki IT?",
    answer:
      "Absolutely. We provide software development, consulting and corporate training.",
  },
  {
    question: "Do you conduct college workshops?",
    answer:
      "Yes. We organize technical workshops, seminars and industrial training programs.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState(0);

  return (
    <section
      className="
        relative
        overflow-hidden
        bg-slate-50
        py-16
        sm:py-20
        lg:py-24
        dark:bg-slate-900
      "
    >
      {/* Ambient lights */}
      <div className="pointer-events-none absolute -left-40 top-20 h-72 w-72 rounded-full bg-emerald-300/15 blur-[120px] dark:bg-emerald-500/10" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-72 w-72 rounded-full bg-teal-300/15 blur-[120px] dark:bg-teal-500/10" />

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-700 dark:border-emerald-400/20 dark:bg-emerald-400/10 dark:text-emerald-300">
            <Sparkles size={14} />
            Need Help?
          </div>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-950 sm:text-5xl dark:text-white">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
              Questions
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
            Find quick answers to some of the questions we hear most often.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className={`
                  overflow-hidden
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  ${
                    isOpen
                      ? "border-emerald-300 bg-white shadow-lg shadow-emerald-900/5 dark:border-emerald-500/40 dark:bg-slate-950 dark:shadow-black/20"
                      : "border-slate-200 bg-white/70 hover:border-emerald-200 dark:border-slate-800 dark:bg-slate-950/60 dark:hover:border-slate-700"
                  }
                `}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                >
                  {/* Number */}
                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      text-xs
                      font-black
                      transition-all
                      ${
                        isOpen
                          ? "bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950"
                          : "bg-slate-100 text-slate-500 dark:bg-slate-900 dark:text-slate-500"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={`
                      flex-1
                      text-sm
                      font-bold
                      sm:text-base
                      ${
                        isOpen
                          ? "text-emerald-700 dark:text-emerald-400"
                          : "text-slate-800 dark:text-slate-200"
                      }
                    `}
                  >
                    {faq.question}
                  </span>

                  {/* Icon */}
                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-xl
                      transition-all
                      ${
                        isOpen
                          ? "rotate-180 bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400"
                          : "bg-slate-100 text-slate-500 dark:bg-slate-900 dark:text-slate-500"
                      }
                    `}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid transition-all duration-300 ease-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div className="flex gap-4 border-t border-slate-100 px-5 pb-6 pt-5 sm:px-6 dark:border-slate-800">
                      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                        <MessageCircleQuestion size={18} />
                      </div>

                      <p className="max-w-3xl text-sm leading-7 text-slate-600 sm:text-base dark:text-slate-400">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom help card */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5 text-center sm:flex-row sm:text-left dark:border-emerald-500/20 dark:bg-emerald-500/5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
              <HelpCircle size={20} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800 dark:text-slate-200">
                Still have a question?
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-500">
                Our team is happy to help.
              </p>
            </div>
          </div>

          <a
            href="#contact-form"
            className="text-sm font-bold text-emerald-700 transition hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300"
          >
            Contact us →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;