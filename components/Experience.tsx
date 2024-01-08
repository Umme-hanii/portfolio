"use client";

import React, { useRef } from "react";
import SectionHeading from "./SectionHeading";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <section
      id="experience"
      className="scroll-mt-28 mb-28 sm:mb-40 text-neutral-content max-w-[53rem]"
    >
      <SectionHeading>My experience</SectionHeading>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-neutral-400">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-accent"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">{experiencesData[0].date}</time>

            <div className="text-lg font-bold italic">
              {experiencesData[0].title}
            </div>
            <p className="font-normal !mt-0">{experiencesData[0].location}</p>
            <p className="card-body bg-neutral rounded-xl hover:bg-base-200">
              {experiencesData[0].description}
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-accent"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end mb-10">
            <time className="font-mono italic">{experiencesData[0].date}</time>

            <div className="text-lg font-bold italic">
              {experiencesData[0].title}
            </div>
            <p className="font-normal !mt-0">{experiencesData[0].location}</p>
            <p className="card-body bg-neutral rounded-xl hover:bg-base-200">
              {experiencesData[0].description}
            </p>
          </div>
          <hr />
        </li>
        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5 text-accent"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-start md:text-end mb-10">
            <time className="font-mono italic">{experiencesData[0].date}</time>

            <div className="text-lg font-bold italic">
              {experiencesData[0].title}
            </div>
            <p className="font-normal !mt-0">{experiencesData[0].location}</p>

            <p className="card-body bg-neutral rounded-xl hover:bg-base-200">
              {experiencesData[0].description}
            </p>
          </div>

          <hr />
        </li>
      </ul>
    </section>
  );
}