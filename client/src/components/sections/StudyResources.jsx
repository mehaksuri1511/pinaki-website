import ResourceCard from "../cards/ResourceCard";
import { resources } from "../../data/resources";

const StudyResources = () => {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Study Resources
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Everything you need to prepare, practice and succeed.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10 mt-20">

          {resources.map((resource) => (
            <ResourceCard
              key={resource.id}
              {...resource}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default StudyResources;