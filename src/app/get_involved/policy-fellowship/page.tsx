'use client';

import { useState } from 'react';
import Link from 'next/link';

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string; answer: React.ReactNode; isOpen: boolean; onClick: () => void }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        className="w-full py-8 px-8 flex justify-between items-center text-left group transition-all duration-200 hover:bg-gray-50"
        onClick={onClick}
      >
        <span className="text-xl font-light tracking-wide pr-8">{question}</span>
        <span className={`text-2xl transition-transform duration-200 ${isOpen ? 'rotate-0' : 'rotate-90'} text-gray-400 group-hover:text-gray-600`}>
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div 
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <br></br>
        <p className="pb-8 px-8 text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function PolicyFellowshipPage() {
  const [openQuestions, setOpenQuestions] = useState(new Set());

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev => {
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
      question: "What sort of experience is expected?",
      answer: "We welcome applications from students with a range of previous experiences: previous work in AI or technology policy is helpful, but by no means required. In the past, fellows have had backgrounds in public policy, law, political science, as well as a variety of technical fields. This is not an exhaustive list, and we encourage those with other academic backgrounds to apply as well."
    },
    {
      question: "Who can join the fellowship?",
      answer: "Past intro fellows have primarily been undergraduate, masters, and graduate students from Columbia. The fall and spring fellowships are strictly in person and on campus, so we can't accept non-Columbia affiliates due to campus security. The summer session is remote, so students from other universities and non-student professionals are welcome to apply."
    },
    {
      question: "When and where does the fellowship meet?",
      answer: "We ask for your availability in the application, and will attempt to accommodate everyone's schedules when forming cohorts. Each cohort meets once a week for two hours, with dinner or lunch provided. We'll be meeting in various meeting rooms across Columbia's campus depending on availability."
    },
    {
      question: "What if I already know all the material in the curriculum?",
      answer: (
        <>
          If you've already read all the material in the <Link href="https://docs.google.com/document/d/14gOLPczbGpESK2iae1dii0aVCAMIKnCb4pIp6bLkaeg/edit?usp=sharing"target="_blank"
            rel="noopener noreferrer" className="text-[#4A8A99] hover:underline">
            curriculum
          </Link>, you may be interested in attending our{" "}
          <Link href="/get_involved/research-groups" className="text-[#4A8A99] hover:underline">
            research groups
          </Link>. Feel free to email us at <Link href="mailto:cualignment@gmail.com" target="_blank"
            rel="noopener noreferrer"className="text-[#4A8A99] hover:underline">
          cualignment@gmail.com
          </Link> to discuss other ways of getting involved with CAIAC!
        </>
      )
    },
    {
      question: "Who facilitates the fellowship?",
      answer: "The fellowship is facilitated by CAIAC members with academic and/or professional experience in AI policy and governance."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-light tracking-wide mb-8">Policy Fellowship</h1>
      <div className="space-y-8 mb-16">
        <p className="text-gray-800 text-lg leading-relaxed">
          Every semester, CAIAC runs an <strong>8-week introductory reading group on the foundational policy and governance issues posed by the development of advanced AI systems</strong>. The fellowship aims to introduce students interested in AI policy and governance to risks from advanced AI.
        </p>

        <p className="text-gray-800 text-lg leading-relaxed">
          We'll discuss questions such as:
        </p>

        <ul className="list-disc pl-8 space-y-2 text-gray-800 text-lg leading-relaxed">
          <li>How much <a 
            href="https://bounded-regret.ghost.io/what-will-gpt-2030-look-like/" 
            className="text-[#4A8A99] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            progress in AI
          </a> should we expect over the next few years?</li>
          <li>What are the <a 
            href="https://arxiv.org/abs/2306.12001" 
            className="text-[#4A8A99] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            risks
          </a> associated with the <a 
            href="https://www.nti.org/analysis/articles/the-convergence-of-artificial-intelligence-and-the-life-sciences/" 
            className="text-[#4A8A99] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            misuse
          </a> and <a 
            href="https://www.alignmentforum.org/posts/pRkFkzwKZ2zfa3R6H/without-specific-countermeasures-the-easiest-path-to" 
            className="text-[#4A8A99] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            misalignment
          </a> of advanced AI systems?</li>
          <li>How can regulators <a 
            href="https://arxiv.org/abs/2305.15324" 
            className="text-[#4A8A99] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            audit
          </a> frontier AI systems for potentially dangerous capabilities?</li>
          <li>How could novel hardware mechanisms <a 
            href="https://www.cnas.org/publications/reports/secure-governable-chips" 
            className="text-[#4A8A99] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            prevent
          </a> malicious or irresponsible actors from creating powerful AI models?</li>
        </ul>

        <p className="text-gray-800 text-lg leading-relaxed">
          The fellowship meets weekly in small groups. Food is provided, and no additional work is required beyond meetings.
        </p>

        <p className="text-lg italic">
          See <a 
            href="https://docs.google.com/document/d/14gOLPczbGpESK2iae1dii0aVCAMIKnCb4pIp6bLkaeg/edit?usp=sharing" 
            className="text-[#4A8A99] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a> for the curriculum (subject to change).
        </p>

        <p><strong>Applications for the Spring 2026 Policy & Governance Fellowship are now closed!</strong></p>
        <p>For those interested in the technical side of AI safety, we recommend applying to our introductory <a 
            href="/get_involved/technical-fellowship" 
            className="text-[#4A8A99] hover:underline"
            
          >technical fellowship 
          </a>. This being said, you're welcome to participate in both programs!


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
