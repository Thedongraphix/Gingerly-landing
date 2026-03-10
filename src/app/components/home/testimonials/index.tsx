"use client";
import Image from "next/image";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import { motion, AnimatePresence, useInView } from "motion/react";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Grace M.",
    role: "Property Manager",
    quote:
      "\u201CRent week used to mean chaos. Within two months of switching to Gingerly, on-time payments jumped from 68% to 94%. We stopped chasing rent \u2014 and started running our properties properly.\u201D",
  },
  {
    name: "Daniel O.",
    role: "Bursar",
    quote:
      "\u201CFee season used to mean spreadsheets, late nights, and constant disputes. With Gingerly\u2019s automated reconciliation, we\u2019ve reduced disputes by nearly 70% and save 25\u201330 hours every month.\u201D",
  },
  {
    name: "Aisha K.",
    role: "Founder",
    quote:
      "\u201CFailed payments were quietly hurting our revenue. After integrating Gingerly, recovery improved by 32% through smart retries. Gingerly didn\u2019t just process payments \u2014 it stabilized our revenue.\u201D",
  },
  {
    name: "Kevin R.",
    role: "Owner",
    quote:
      "\u201CMembership billing was our biggest leak. With Gingerly, collections improved from 65% to 87% in one quarter. Now payments happen quietly in the background \u2014 and we focus on our members.\u201D",
  },
];

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

function Testimonials() {
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);

  const topLeftInView = useInView(topLeftRef, { once: true });
  const topRightInView = useInView(topRightRef, { once: true });
  const bottomLeftInView = useInView(bottomLeftRef, { once: true });
  const bottomRightInView = useInView(bottomRightRef, { once: true });

  const [[currentSlide, direction], setSlide] = useState([0, 0]);
  const [isPaused, setIsPaused] = useState(false);

  const paginate = useCallback((newDirection: number) => {
    setSlide(([prev]) => {
      const next = prev + newDirection;
      if (next < 0) return [testimonials.length - 1, newDirection];
      if (next >= testimonials.length) return [0, newDirection];
      return [next, newDirection];
    });
  }, []);

  const goToSlide = useCallback((index: number) => {
    setSlide(([prev]) => [index, index > prev ? 1 : -1]);
  }, []);

  // Auto-advance every 6 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => paginate(1), 6000);
    return () => clearInterval(timer);
  }, [isPaused, paginate]);

  const current = testimonials[currentSlide];

  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="flex flex-col justify-center gap-10 md:gap-20">
            <div className="mx-auto max-w-2xl flex items-center text-center">
              <h2>
                <TextGenerateEffect words="What our satisfied customers are saying" />
                <TextGenerateEffect
                  words="about us"
                  delay={1}
                  className="font-instrument-serif italic font-normal"
                />
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                {/* Top Left Box — Testimonial Slider */}
                <motion.div
                  ref={topLeftRef}
                  initial={{ x: -100, y: -100, opacity: 0 }}
                  animate={topLeftInView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="rounded-2xl flex flex-col relative bg-[url('/images/home/customerStories/customer_bg_img.jpg')] object-cover bg-center h-full w-full bg-cover bg-no-repeat overflow-hidden"
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                >
                  {/* Slider content area */}
                  <div className="relative flex flex-col justify-between p-6 sm:p-8 min-h-[340px] sm:min-h-[380px] md:min-h-[420px]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                      <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                          x: { type: "spring", stiffness: 300, damping: 30 },
                          opacity: { duration: 0.25 },
                        }}
                        className="flex flex-col gap-24 sm:gap-32 md:gap-40"
                      >
                        <span className="text-white/60 uppercase text-sm font-medium">
                          Customer stories
                        </span>
                        <div className="flex flex-col gap-6">
                          <h3 className="text-white">
                            {current.quote}
                          </h3>
                          <div className="flex flex-col gap-1">
                            <p className="text-white font-medium">
                              {current.name}
                            </p>
                            <p className="text-white/60 text-sm font-medium">
                              {current.role}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 flex items-center gap-2 z-10">
                      <button
                        onClick={() => paginate(-1)}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/10 text-white transition-all duration-200 cursor-pointer"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={() => paginate(1)}
                        className="p-2 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/10 text-white transition-all duration-200 cursor-pointer"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>

                  {/* Dot indicators at the bottom */}
                  <div className="flex items-center justify-center gap-2 px-6 pb-5 sm:px-8 sm:pb-6">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`relative h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                          index === currentSlide
                            ? "w-7 bg-white/80"
                            : "w-1.5 bg-white/30 hover:bg-white/50"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      >
                        {index === currentSlide && !isPaused && (
                          <motion.span
                            className="absolute inset-0 rounded-full bg-white origin-left"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 6, ease: "linear" }}
                            key={`progress-${currentSlide}`}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Top Right Box */}
                <motion.div
                  ref={topRightRef}
                  initial={{ x: 100, y: -100, opacity: 0 }}
                  animate={topRightInView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-between gap-16 sm:gap-24 md:gap-36 xl:max-w-25 bg-pale-yellow rounded-2xl p-6 sm:p-8"
                >
                  <div>
                    <span className="uppercase text-sm font-medium text-navy/60">
                      Facts & numbers
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-5xl sm:text-7xl font-medium dark:text-navy">
                      95%
                    </h2>
                    <h3 className="dark:text-navy text-xl sm:text-2xl">
                      Average payment collection rate across businesses using Gingerly.
                    </h3>
                  </div>
                </motion.div>
              </div>

              <div className="flex flex-col xl:flex xl:flex-row gap-6">
                {/* Bottom Left Box */}
                <motion.div
                  ref={bottomLeftRef}
                  initial={{ x: -100, y: 100, opacity: 0 }}
                  animate={bottomLeftInView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col justify-between bg-navy xl:max-w-25 dark:bg-white/10 rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex flex-col gap-6">
                    <span className="text-white/60 uppercase text-sm font-medium">
                      Customer stories
                    </span>
                    <h3 className="text-white text-2xl">
                      Gingerly&apos;s automatic payment matching saves our finance team over 20 hours every month. We finally close our books on time.
                    </h3>
                    <div>
                      <Image
                        src="/images/home/customerStories/latest-lady.jpg"
                        alt="image"
                        width={344}
                        height={220}
                        className="w-full h-52"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Bottom Right Box */}
                <motion.div
                  ref={bottomRightRef}
                  initial={{ x: 100, y: 100, opacity: 0 }}
                  animate={bottomRightInView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="flex flex-col gap-12 sm:gap-24 justify-between bg-navy/5 dark:bg-white/5 p-6 sm:p-8 rounded-2xl"
                >
                  <div className="flex flex-col gap-6">
                    <span className="text-navy/60 dark:text-white/60 uppercase text-sm font-medium">
                      Customer stories
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-5xl">
                      &ldquo;We used to chase payments across three different platforms. Gingerly brought everything together — now we always know where our money is.&rdquo;
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-white">Sarah Otieno</p>
                    <p className="text-navy/60 dark:text-white/60 text-sm">
                      Finance Director, EduFirst Schools
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
