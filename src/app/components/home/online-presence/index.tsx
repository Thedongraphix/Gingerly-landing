"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

interface HowItWorksItem {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
}

function OnlinePresence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [howItWorksList, setHowItWorksList] = useState<HowItWorksItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setHowItWorksList(data?.howItWorksList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const bottomAnimation = (index: number) => ({
    initial: { y: 50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 },
    transition: { duration: 0.8, delay: 0.4 + index * 0.2 },
  });

  return (
    <section id="work">
      <div ref={ref} className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-10 md:gap-20">
            <div className="max-w-2xl text-center">
              <p className="text-sm uppercase tracking-widest text-teal-brand font-medium mb-4">How It Works</p>
              <h2>
                <TextGenerateEffect
                  words="From setup to successful collection in"
                  duration={0.5}
                />
                <TextGenerateEffect
                  words="four steps"
                  delay={1.2}
                  className="italic font-normal instrument-font"
                />
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6 w-full">
              {howItWorksList?.map((item, index) => (
                <motion.div
                  key={index}
                  className="group flex flex-col gap-4 sm:gap-6 p-5 sm:p-8 rounded-2xl border border-border bg-white dark:bg-white/5 hover:shadow-lg transition-shadow"
                  {...bottomAnimation(index)}
                >
                  <div className="flex items-center gap-4">
                    <span className="text-4xl sm:text-5xl font-instrument-serif italic text-teal-brand/30 font-normal">
                      {item.step}
                    </span>
                    <div>
                      <h3 className="text-xl font-medium">{item.title}</h3>
                      <p className="text-sm text-teal-brand">{item.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags?.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs border border-border py-1.5 px-3 rounded-full text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OnlinePresence;
