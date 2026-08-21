import {
  Code2,
  Globe,
  Cloud,
  BrainCircuit,
  ShieldCheck,
  ArrowRight,
  CloudCog,
  Container,
  Sparkles,
  Bot,
} from "lucide-react";
import { Link } from "react-router-dom";

const courses = [
  {
    icon: Globe,
    title: "Full Stack Development",
    description:
      "Build responsive and scalable web applications using HTML, CSS, JavaScript, React, Node.js, Express and MongoDB.",
  },

  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Learn cloud architecture, deployment, virtualization, networking and cloud services used by modern enterprises.",
  },

  {
    icon: BrainCircuit,
    title: "Machine Learning & Data Science",
    description:
      "Master data analytics, machine learning algorithms, predictive modeling and AI-powered business solutions.",
  },

  {
    icon: CloudCog,
    title: "DevOps",
    description:
      "Master CI/CD pipelines, Git, Jenkins, Kubernetes, infrastructure automation and cloud deployment workflows.",
  },

  {
    icon: Container,
    title: "Docker",
    description:
      "Learn containerization, Docker Compose, image management and application deployment using industry-standard practices.",
  },

  {
    icon: Sparkles,
     slug: "generative-ai",
    title: "Generative AI",
    description:
      "Explore ChatGPT, prompt engineering, Large Language Models (LLMs), AI automation and content generation.",
  },

  {
    icon: Bot,
    title: "Agentic AI",
    description:
      "Build intelligent AI agents capable of reasoning, planning, tool integration and autonomous task execution.",
  },

  {
    icon: Code2,
    title: "Data Structures & Algorithms",
    description:
      "Master DSA concepts in Java, C++ and Python for coding interviews, competitive programming and placements.",
  },

  {
    icon: ShieldCheck,
    title: "Cyber Security & Ethical Hacking",
    description:
      "Learn network security, penetration testing, vulnerability assessment and ethical hacking techniques.",
  },
];

const CoursesGrid = () => {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">
          <span className="inline-block rounded-full bg-emerald-100 px-5 py-2 text-sm font-semibold uppercase tracking-wider text-emerald-700">
            Our Courses
          </span>

          <h2 className="mt-6 text-5xl font-black text-slate-900">
            Industry-Focused Training Programs
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Learn the most in-demand technologies through practical training,
            live projects, expert mentorship and industry-oriented learning
            designed to make you career-ready.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <div
                key={index}
                className="
                  group
                  rounded-[32px]
                  border
                  border-slate-200
                  bg-white
                  p-8
                  shadow-lg
                  transition-all
                  duration-500
                  hover:-translate-y-3
                  hover:border-emerald-500
                  hover:shadow-2xl
                "
              >
                {/* Icon */}

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-100 transition-all duration-500 group-hover:bg-emerald-600">
                  <Icon
                    size={32}
                    className="text-emerald-600 transition-all duration-500 group-hover:text-white"
                  />
                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {course.title}
                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-slate-600">
                  {course.description}
                </p>

                {/* Button */}

                <Link
  to={`/courses/${course.slug}`}
  className="
    mt-8
    flex
    items-center
    gap-2
    font-semibold
    text-emerald-600
    transition-all
    group-hover:translate-x-1
  "
>
  Learn More
  <ArrowRight size={18} />
</Link>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default CoursesGrid;