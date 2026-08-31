import { features } from "../../data/features";

const FeatureStrip = () => {
  return (
    <section className="relative py-12 px-6">

      <div className="max-w-7xl mx-auto">

        <div
          className="
          bg-white
          rounded-[32px]
          shadow-xl
          border
          border-slate-100
          overflow-hidden
        "
        >

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {features.map((item, index) => (

              <div
                key={item.id}
                className="
                relative
                flex
                flex-col
                items-center
                justify-center
                py-10
                px-8
                text-center
                transition-all
                duration-300
                hover:bg-gradient-to-br
                hover:from-emerald-50
                hover:to-blue-50
              "
              >

                {index !== features.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 h-24 w-px bg-slate-200" />
                )}

                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-16 w-16 object-contain mb-5"
                />

                <h3 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-slate-600">
                  {item.subtitle}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default FeatureStrip;