"use client";

import CountUp from "react-countup";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "motion/react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import { Eye, Zap, TrendingUp, ArrowRight } from "lucide-react";

interface Statistics {
  title: string;
  count: number;
  suffix?: string;
}

const PAIN_POINTS = [
  {
    icon: Eye,
    number: "01",
    pain: "No Single View",
    painDetail:
      "Payments come in through banks, M-Pesa, agents, and spreadsheets — but you can never see the full picture in one place.",
    fix: "One unified dashboard",
    bgColor: "bg-navy/5 dark:bg-white/5",
    iconColor: "text-navy dark:text-white",
  },
  {
    icon: Zap,
    number: "02",
    pain: "Too Much Time Chasing",
    painDetail:
      "Your team spends hours calling, texting, and reminding people to pay — time better spent growing the business.",
    fix: "Automatic reminders & retries",
    bgColor: "bg-teal-brand/8 dark:bg-teal-brand/10",
    iconColor: "text-teal-brand",
  },
  {
    icon: TrendingUp,
    number: "03",
    pain: "Hard to Scale",
    painDetail:
      "Manual processes break as you grow. What worked at 50 customers falls apart at 500.",
    fix: "Built to scale from 10 to 10,000",
    bgColor: "bg-navy/8 dark:bg-white/8",
    iconColor: "text-navy dark:text-white",
  },
];

function WebResult() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const statsRef = useRef(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-50px" });
  const [stats, setStats] = useState<Statistics[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");
        const responseData = await res.json();
        setStats(responseData?.statisticsCounter);
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
    <section id="aboutus">
      <div ref={ref} className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center items-center gap-10 md:gap-16">

            {/* ── Header ── */}
            <motion.div
              {...bottomAnimation(0)}
              className="max-w-2xl text-center"
            >
              <p className="text-sm uppercase tracking-widest text-teal-brand font-medium mb-4">
                The Problem
              </p>
              <h2>
                <TextGenerateEffect
                  words="Every missed payment is money"
                  duration={0.3}
                />
                <TextGenerateEffect
                  words="slipping through the cracks"
                  delay={0.8}
                  className="font-instrument-serif italic font-normal"
                />
              </h2>
              <p className="mt-4 text-muted-foreground">
                Businesses lose thousands every month to scattered tools, manual follow-ups, and processes that break at scale.
              </p>
            </motion.div>

            {/* ── Pain Point Cards ── */}
            <div className="grid md:grid-cols-3 gap-6 w-full">
              {PAIN_POINTS.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ scale: 1.2, opacity: 0, filter: "blur(8px)" }}
                    animate={
                      inView
                        ? { scale: 1, opacity: 1, filter: "blur(0px)" }
                        : {}
                    }
                    transition={{
                      duration: 0.6,
                      delay: 0.3 + index * 0.2,
                      ease: "easeInOut",
                    }}
                    className="h-full"
                  >
                    <div
                      className={`flex flex-col h-full p-5 sm:p-8 rounded-2xl gap-4 sm:gap-5 ${item.bgColor}`}
                    >
                      {/* Number + Icon */}
                      <div className="flex items-center justify-between">
                        <span className="text-4xl sm:text-5xl font-instrument-serif italic text-teal-brand/20 font-normal select-none">
                          {item.number}
                        </span>
                        <Icon
                          size={32}
                          className={item.iconColor}
                          strokeWidth={1}
                        />
                      </div>

                      {/* Pain */}
                      <div className="flex flex-col gap-2 flex-1">
                        <h3 className="text-xl font-medium">{item.pain}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.painDetail}
                        </p>
                      </div>

                      {/* Solution hint */}
                      <div className="flex items-center gap-2 pt-2 border-t border-border">
                        <ArrowRight
                          size={14}
                          className="text-teal-brand shrink-0"
                          strokeWidth={2}
                        />
                        <span className="text-sm font-medium text-teal-brand">
                          {item.fix}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ── Stats Bar ── */}
            <motion.div
              {...bottomAnimation(4)}
              ref={statsRef}
              className="w-full bg-navy dark:bg-white/5 rounded-2xl sm:rounded-3xl py-8 sm:py-10 px-5 sm:px-12"
            >
              <div className="grid grid-cols-3 divide-x divide-white/10 dark:divide-white/10">
                {stats?.map((item, index) => (
                  <div key={index} className="text-center px-2 sm:px-6">
                    <p className="text-3xl sm:text-5xl md:text-6xl font-medium text-[#007B8A] tabular-nums">
                      {statsInView ? (
                        <CountUp start={0} end={item.count} duration={3} />
                      ) : (
                        "0"
                      )}
                      {item.suffix && item.suffix}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-white/50">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default WebResult;
