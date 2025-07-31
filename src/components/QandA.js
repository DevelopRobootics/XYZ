"use client";
import { useState } from "react";

const data = [
  {
    question: "What is Flowbite?",
    answer:
      "Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.",
  },
  {
    question: "Is there a Figma file available?",
    answer:
      "Yes, Flowbite has a Figma design system based on the utility classes from Tailwind CSS and components from Flowbite.",
  },
  {
    question: "What are the differences between Flowbite and Tailwind UI?",
    answer:
      "Flowbite is open source and free, while Tailwind UI is a paid product. Flowbite focuses on small, standalone components, whereas Tailwind UI includes full sections of pages.",
  },
];

export default function QandA() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-2xl mt-10 mx-auto divide-y divide-gray-200 dark:divide-gray-700">
      {data.map((item, index) => (
        <div key={index}>
          <button
            onClick={() => toggle(index)}
            className="flex justify-between items-center w-full p-4 text-left font-semibold text-indigo-300 dark:bg-gray-900 dark:text-[#8B5CF6] hover:bg-gray-800 transition duration-300 ease-in-out"
          >
            <span>{item.question}</span>
            <svg
              className={`w-5 h-5 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {openIndex === index && (
            <div className="p-4 text-white dark:text-gray-300 dark:bg-gray-900">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}