
import AchieversHero from "../components/achievers/AchieversHero";
import AchieversGrid from "../components/achievers/AchieversGrid";
import ScrollReveal from "../components/common/ScrollReveal";

const StudentAchievers = () => {
  return (
    <main className="overflow-x-hidden bg-white dark:bg-slate-950">
      {/* ================= HERO ================= */}

      <AchieversHero />

      {/* ================= STUDENT DIRECTORY ================= */}

      <ScrollReveal>
        <AchieversGrid />
      </ScrollReveal>
    </main>
  );
};

export default StudentAchievers;
