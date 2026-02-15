"use client";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface BenefitItem {
  title: string;
  metric: string;
  metricLabel: string;
  description: string;
}

function CustomerStories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [benefitsList, setBenefitsList] = useState<BenefitItem[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setBenefitsList(data?.benefitsList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const bottomAnimation = (index: number) => ({
    initial: { y: 30, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 },
    transition: { duration: 0.6, delay: 0.3 + index * 0.15 },
  });

  return (
    <section id="benefits">
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div ref={ref} className="flex flex-col justify-center gap-10 md:gap-16">
            <div className="mx-auto max-w-3xl flex flex-col items-center text-center gap-4">
              <p className="text-sm uppercase tracking-widest text-teal-brand font-medium">
                Benefits & Value
              </p>
              <h2>
                <TextGenerateEffect words="More than just getting paid — save time, free up cash, and" />
                <TextGenerateEffect
                  words="grow faster"
                  delay={1}
                  className="font-instrument-serif italic font-normal"
                />
              </h2>
              <p className="text-muted-foreground max-w-2xl">
                When you stop spending time chasing payments, you can focus on what actually grows your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefitsList?.map((item, index) => (
                <motion.div
                  key={index}
                  {...bottomAnimation(index)}
                  className={`flex flex-col gap-3 sm:gap-4 p-5 sm:p-8 rounded-2xl ${
                    index === 0
                      ? "bg-teal-brand/10 dark:bg-teal-brand/10"
                      : index === 1
                      ? "bg-navy/6 dark:bg-white/5"
                      : index === 2
                      ? "bg-teal-brand/8 dark:bg-teal-brand/8"
                      : index === 3
                      ? "bg-navy/8 dark:bg-white/8 md:col-span-1 lg:col-span-1"
                      : "bg-teal-brand/6 dark:bg-teal-brand/6 md:col-span-1 lg:col-span-2"
                  }`}
                >
                  <div className="flex items-end gap-2">
                    <span className="text-3xl sm:text-4xl md:text-5xl font-medium">{item.metric}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.metricLabel}</p>
                  <h3 className="text-xl font-medium">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-lg font-instrument-serif italic text-muted-foreground">
                &ldquo;When payments arrive on time, everything else falls into place.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomerStories;
