"use client";
import Image from "next/image";
import { TextGenerateEffect } from "@/app/components/ui/text-generate-effect";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

function Testimonials() {
  const topLeftRef = useRef(null);
  const topRightRef = useRef(null);
  const bottomLeftRef = useRef(null);
  const bottomRightRef = useRef(null);

  const topLeftInView = useInView(topLeftRef, { once: true });
  const topRightInView = useInView(topRightRef, { once: true });
  const bottomLeftInView = useInView(bottomLeftRef, { once: true });
  const bottomRightInView = useInView(bottomRightRef, { once: true });

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
                {/* Top Left Box */}
                <motion.div
                  ref={topLeftRef}
                  initial={{ x: -100, y: -100, opacity: 0 }}
                  animate={topLeftInView ? { x: 0, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.8 }}
                  className="p-6 sm:p-8 gap-24 sm:gap-40 md:gap-64 rounded-2xl flex flex-col relative bg-[url('/images/home/customerStories/customer_bg_img.jpg')] object-cover bg-center h-full w-full bg-cover bg-no-repeat"
                >
                  <span className="text-white/60 uppercase text-sm font-medium">
                    Customer stories
                  </span>
                  <div className="flex flex-col gap-6">
                    <h3 className="text-white">
                      &ldquo;Gingerly transformed how we collect rent — our collection rate went from 60% to 95% in just two months!&rdquo;
                    </h3>
                    <div className="flex flex-col gap-1">
                      <p className="text-white font-medium">Aneri Hassan</p>
                      <p className="text-white/60 text-sm font-medium">
                        Property Agent, Nairobi
                      </p>
                    </div>
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
                    <span className="uppercase text-sm font-medium text-dark_black/60">
                      Facts & numbers
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-5xl sm:text-7xl font-medium dark:text-dark_black">
                      95%
                    </h2>
                    <h3 className="dark:text-dark_black text-xl sm:text-2xl">
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
                  className="flex flex-col justify-between bg-dark_black xl:max-w-25 dark:bg-white/10 rounded-2xl p-6 sm:p-8"
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
                        src="/images/home/customerStories/creativity_img.jpg"
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
                  className="flex flex-col gap-12 sm:gap-24 justify-between bg-dark_black/5 dark:bg-white/5 p-6 sm:p-8 rounded-2xl"
                >
                  <div className="flex flex-col gap-6">
                    <span className="text-dark_black/60 dark:text-white/60 uppercase text-sm font-medium">
                      Customer stories
                    </span>
                    <h2 className="text-xl sm:text-2xl lg:text-5xl">
                      &ldquo;We used to chase payments across three different platforms. Gingerly brought everything together — now we always know where our money is.&rdquo;
                    </h2>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-white">Sarah Otieno</p>
                    <p className="text-dark_black/60 dark:text-white/60 text-sm">
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

