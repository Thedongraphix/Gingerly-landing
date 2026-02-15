"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  CalendarClock,
  CreditCard,
  FileCheck,
  RefreshCcw,
  BarChart3,
  Smartphone,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ICON_MAP = {
  CalendarClock,
  CreditCard,
  FileCheck,
  RefreshCcw,
  BarChart3,
  Smartphone,
} as const;

type IconName = keyof typeof ICON_MAP;

interface InnovationData {
  icon: IconName;
  title: string;
  description: string;
  bg_color: string;
  txt_color: string;
}

function Innovation() {
  const ref = useRef(null);
  const inView = useInView(ref);
  const [innovationList, setinnovationList] = useState<InnovationData[] | null>(
    null,
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/page-data");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setinnovationList(data?.innovationList);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  const bottomAnimation = (index: number) => ({
    initial: { y: "25%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "25%", opacity: 0 },
    transition: { duration: 0.3, delay: 0.3 + index * 0.3 },
  });
  return (
    <section id="services">
      <div ref={ref} className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col gap-12">
            <div className="flex flex-col justify-center items-center gap-10 lg:gap-16">
              <motion.div
                {...bottomAnimation(1)}
                className="max-w-(--breakpoint-Xsm) text-center"
              >
                <p className="text-sm uppercase tracking-widest text-teal-brand font-medium mb-4">Platform Features</p>
                <h2>
                  <TextGenerateEffect
                    words="Everything you need to automate"
                    delay={0.4}
                  />
                  <TextGenerateEffect
                    words="recurring payments"
                    delay={1}
                    className="font-instrument-serif italic font-normal"
                  />
                </h2>
              </motion.div>
              <div ref={ref} className="w-full">
                <div className="grid auto-rows-max grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {innovationList?.map((items, index) => {
                    const IconComponent = ICON_MAP[items.icon];
                    return (
                      <motion.div
                        key={index}
                        initial={{
                          scale: 1.2,
                          opacity: 0,
                          filter: "blur(8px)",
                        }}
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
                        <Card
                          className={cn(
                            "border-none shadow-none ring-0 flex h-full flex-col p-5 sm:p-8 rounded-2xl gap-3 sm:gap-4",
                            items.bg_color,
                          )}
                        >
                          <CardContent className="p-0 flex flex-col h-full gap-4">
                            <div className="flex shrink-0">
                              {IconComponent && (
                                <IconComponent
                                  size={40}
                                  className={items.txt_color}
                                  strokeWidth={1}
                                />
                              )}
                            </div>
                            <div className="flex flex-col gap-2">
                              <h3
                                className={cn(
                                  "text-xl leading-tight font-medium",
                                  items.txt_color,
                                )}
                              >
                                {items.title.split("\n")?.map((line, i) => (
                                  <React.Fragment key={i}>
                                    {line}
                                    {i === 0 && " "}
                                  </React.Fragment>
                                ))}
                              </h3>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {items.description}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 xl:flex-row bg-navy items-center justify-between dark:bg-white/5 py-8 px-5 sm:px-12 rounded-2xl sm:rounded-3xl w-full">
              <h4 className="text-white text-center xl:text-left">
                When payments come in on time,
                <br /> businesses grow faster.
              </h4>
              <div className="flex flex-col sm:flex-row gap-3 items-center">
                <Button
                  className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden bg-white hover:bg-white"
                  nativeButton={false}
                  render={<Link href="/contact" />}
                >
                  <span className="relative z-10 transition-all duration-500 text-navy">
                    Get Started
                  </span>
                  <div className="absolute right-1 w-10 h-10 bg-navy text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </div>
                </Button>
                <Button
                  className="relative text-sm font-medium rounded-full h-12 p-1 ps-6 pe-14 group transition-all duration-500 hover:ps-14 hover:pe-6 w-fit overflow-hidden bg-transparent hover:bg-transparent border border-white"
                  nativeButton={false}
                  render={<Link href="/contact" />}
                >
                  <span className="relative z-10 transition-all duration-500 text-white">
                    Request a Demo
                  </span>
                  <div className="absolute right-1 w-10 h-10 bg-white text-navy rounded-full flex items-center justify-center transition-all duration-500 group-hover:right-[calc(100%-44px)] group-hover:rotate-45">
                    <ArrowUpRight size={16} />
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Innovation;
