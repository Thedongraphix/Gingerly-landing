"use client";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";

interface SectorItem {
  name: string;
  description: string;
  image: string;
}

function CreativeMind() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [sectorsList, setSectorsList] = useState<SectorItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setSectorsList(data?.sectorsList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="sectors">
      <div ref={ref} className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-10 md:gap-16">
            <div className="max-w-2xl text-center">
              <p className="text-sm uppercase tracking-widest text-teal-500 font-medium mb-4">
                Supported Sectors
              </p>
              <h2>
                <TextGenerateEffect
                  words="Wherever payments repeat, Gingerly makes them"
                  duration={0.5}
                />
                <TextGenerateEffect
                  words="predictable"
                  delay={1}
                  className="italic font-normal instrument-font"
                />
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 w-full">
              {sectorsList?.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{
                    x: index === 0 ? -100 : index === 2 ? 100 : 0,
                    y: index === 1 ? 100 : 0,
                    opacity: 0,
                  }}
                  animate={inView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  className="flex flex-col justify-between bg-dark_black dark:bg-white/10 rounded-2xl p-5 sm:p-8"
                >
                  <div className="flex flex-col gap-4 sm:gap-6">
                    <span className="text-white/60 uppercase text-xs sm:text-sm font-medium">
                      {item.name}
                    </span>
                    <h3 className="text-white text-lg sm:text-xl md:text-2xl">
                      {item.description}
                    </h3>
                    <div>
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={344}
                        height={220}
                        className="w-full h-40 sm:h-52 object-cover rounded-lg"
                      />
                    </div>
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

export default CreativeMind;
