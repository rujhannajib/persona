import { timeline } from "@/data/timeline";

export function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white border-t border-black"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-center mb-12 text-black">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <p className="text-lg mb-4 text-black">
           Associate Software Engineer Analyst at DHL. I build AI agents for work and for myself, and I'm working toward turning them into income. Interested in AI and robotics. Off the clock, I read a lot of history.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-black"></div>

          <div className="space-y-12">
            {timeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Icon */}
                  <div className="absolute left-8 md:left-1/2 -ml-4 w-8 h-8 rounded-full border-2 flex items-center justify-center z-10 bg-white border-black">
                    <Icon className="w-4 h-4 text-black" />
                  </div>

                  {/* Content */}
                  <div
                    className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"} pl-20 md:pl-0`}
                  >
                    <div className="border rounded-lg p-6 transition-all group border-black hover:bg-accent hover:border-accent">
                      <div className="text-sm mb-2 text-black/60 group-hover:text-white">
                        {item.period}
                      </div>
                      <h3 className="text-2xl mb-1 text-black group-hover:text-white">
                        {item.title}
                      </h3>
                      <p className="text-lg mb-3 text-black group-hover:text-white">
                        {item.role}
                      </p>
                      <p className="text-black group-hover:text-white">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
