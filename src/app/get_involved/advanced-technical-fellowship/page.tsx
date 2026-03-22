"use client";

import { useState } from "react";
import Link from "next/link";

const FAQItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-8 px-8 flex justify-between items-center text-left group transition-all duration-200 hover:bg-gray-50"
        onClick={onClick}
      >
        <span className="text-xl font-light tracking-wide pr-8">
          {question}
        </span>
        <span
          className={`text-2xl transition-transform duration-200 ${isOpen ? "rotate-0" : "rotate-90"} text-gray-400 group-hover:text-gray-600`}
        >
          {isOpen ? "−" : "+"}
        </span>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <br></br>
        <p className="pb-8 px-8 text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function AdvancedTechnicalFellowshipPage() {
  const [openQuestions, setOpenQuestions] = useState(new Set());

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const faqData = [
    {
      question: "Who can join the fellowship?",
      answer: (
        <>
          This fellowship is primarily intended for recent graduates of the{" "}
          <Link
            href="/get_involved/technical-fellowship"
            className="text-[#4A8A99] hover:underline"
          >
            introductory technical fellowship
          </Link>
          . If this is your first semester in the club, we encourage you to
          apply for the introductory technical fellowship.
        </>
      ),
    },
    {
      question: "How much experience with machine learning is expected?",
      answer: (
        <>
          You don&apos;t need to have worked with PyTorch or TensorFlow before,
          but you should at least be fluent in Python. If you are unsure about
          applying for any reason, we nevertheless encourage you to apply.
        </>
      ),
    },
    {
      question: "When and where does the fellowship meet?",
      answer: (
        <>
          Each group meets once a week for ninety minutes, with dinner provided,
          plus about 3 hours of independent work. We ask for your availability
          in the application, and will attempt to accommodate people&apos;s
          schedules when forming groups.
        </>
      ),
    },
    {
      question: "What if I already know all the material in the curriculum?",
      answer: (
        <>
          If you&apos;re already fluent in PyTorch and have research experience,
          you may be interested in attending our{" "}
          <Link
            href="/get_involved/research-groups"
            className="text-[#4A8A99] hover:underline"
          >
            research groups
          </Link>{" "}
          or applying for club membership.
        </>
      ),
    },
    {
      question: "Who facilitates the fellowship?",
      answer:
        "The fellowship is facilitated by CAIAC members with research experience in AI safety. This includes upperclassmen and graduate students.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-light tracking-wide mb-8">
        Advanced Technical Fellowship
      </h1>
      <div className="space-y-8 mb-16">
        <p className="text-gray-800 text-lg leading-relaxed">
          Every semester, CAIAC runs an{" "}
          <strong>
            8-week advanced implementation fellowship on AI safety
          </strong>
          , covering topics like building neural networks from scratch
          <a
            href="https://github.com/karpathy/micrograd"
            className="text-[#4A8A99] hover:underline align-super text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            ¹
          </a>
          , mechanistic interpretability
          <a
            href="https://distill.pub/2020/circuits/zoom-in/"
            className="text-[#4A8A99] hover:underline align-super text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            ²
          </a>
          , evals
          <a
            href="https://www.apolloresearch.ai/blog/a-starter-guide-for-evals/"
            className="text-[#4A8A99] hover:underline align-super text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            ³
          </a>
          . The fellowship meets weekly, with lunch and compute provided, plus
          about 3 hours of independent work each week.
        </p>

        <p className="text-lg">
          See{" "}
          <a
            href="https://docs.google.com/document/d/1stZNBHFKgdQ5Ybw2Palq9AiavgdB_EkuF4E3N5IV62M/edit?usp=sharing"
            className="text-[#4A8A99] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          for more details on the fellowship structure.
        </p>
        <p>
          <strong>
            Applications for the Spring 2026 Advanced Technical Fellowship are
            now closed!
          </strong>
        </p>

        <p>
          If this is your first semester in the club, we recommend applying to
          our introductory{" "}
          <Link
            href="/get_involved/technical-fellowship"
            className="text-[#4A8A99] hover:underline"
          >
            technical fellowship
          </Link>{" "}
          or{" "}
          <Link
            href="/get_involved/policy-fellowship"
            className="text-[#4A8A99] hover:underline"
          >
            policy fellowship
          </Link>{" "}
          instead.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="divide-y divide-gray-100">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openQuestions.has(index)}
              onClick={() => toggleQuestion(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
