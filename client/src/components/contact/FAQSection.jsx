import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-5xl font-black text-slate-900">

          Frequently Asked Questions

        </h2>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-3xl bg-white shadow-md"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="flex w-full items-center justify-between p-8 text-left"
              >

                <span className="text-xl font-semibold">

                  {faq.question}

                </span>

                {open === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}

              </button>

              {open === index && (

                <div className="px-8 pb-8 text-slate-600 leading-8">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default FAQSection;