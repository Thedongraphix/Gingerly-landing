"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import SingleAchievement from "./SingleAchievement";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

function Achievements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [achievementsList, setAchievementsList] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setAchievementsList(data?.achievementsList);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="trust">
      <div ref={ref} className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-10 md:gap-20">
            <div className="max-w-3xl text-center mx-auto">
              <p className="text-sm uppercase tracking-widest text-teal-brand font-medium mb-4">
                Trust & Security
              </p>
              <h2>
                <TextGenerateEffect words="Built for security, designed for" />
                <TextGenerateEffect
                  words="your confidence"
                  delay={1}
                  className="font-instrument-serif italic font-normal"
                />
              </h2>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {achievementsList?.map((item: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{
                    scale: 1.15,
                    opacity: 0,
                    filter: "blur(6px)",
                  }}
                  animate={
                    inView
                      ? { scale: 1, opacity: 1, filter: "blur(0px)" }
                      : {}
                  }
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.2,
                    ease: "easeOut",
                  }}
                  className="h-full"
                >
                  <SingleAchievement achievements={item} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
