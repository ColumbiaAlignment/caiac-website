'use client';

import { useState } from 'react';
import Link from 'next/link'

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

export default function TechnicalFellowshipPage() {
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
      question: "Who can join the fellowship?",
      answer: "Past intro fellows have primarily been undergraduate, masters, and graduate students from Columbia. The fall and spring fellowships are strictly in person on campus, so we can't accept non-Columbia affiliates due to campus security. The summer session is remote, so students from other NYC universities and non-student professionals are welcome to apply."
    },
    {
      question: "How much experience with machine learning is expected?",
      answer: (
        <>
          Participants should be familiar with basic concepts in machine learning, such as deep neural networks, stochastic gradient descent, and reinforcement learning. See Week 0 of <Link href="https://docs.google.com/document/d/1gDIPzQ6b8LcJhfrag_Gy9ca6ziB4fYfKu-zMR6qYeiE/edit?usp=sharing" className="text-[#4A8A99] hover:underline"target="_blank" rel="noopener noreferrer">
          the curriculum
          </Link> for recommended introductory materials. We may group cohorts according to previous experience.
        </>
      )    },
    {
      question: "When and where does the fellowship meet?",
      answer: "We ask for your availability in the application, and will attempt to accommodate people's schedules when forming cohorts. Each cohort meets once a week for two hours, with dinner or lunch provided. We'll be meeting in various meeting rooms across Columbia's campus depending on availability."
    },
    {
      question: "What if I already know all the material in the curriculum?",
      answer: (
        <>
          If you've already read all the material in the <Link href="https://docs.google.com/document/d/14gOLPczbGpESK2iae1dii0aVCAMIKnCb4pIp6bLkaeg/edit?usp=sharing" className="text-[#4A8A99] hover:underline"target="_blank" rel="noopener noreferrer">
            curriculum
          </Link>, you may be interested in attending our{" "}
          <Link href="/get_involved/research-groups"className="text-[#4A8A99] hover:underline">
            research groups
          </Link>. Feel free to email us at <Link href="mailto:cualignment@gmail.com"target="_blank" rel="noopener noreferrer" className="text-[#4A8A99] hover:underline">
          cualignment@gmail.com
          </Link> to discuss other ways of getting involved with CAIAC!
        </>
      )
    },
    {
      question: "Who facilitates the fellowship?",
      answer: "The fellowship is facilitated by CAIAC members with research experience in AI safety. This includes upperclassmen and graduate students."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-light tracking-wide mb-8">Technical Fellowship</h1>
      <div className="space-y-8 mb-16">
        <p className="text-gray-800 text-lg leading-relaxed">
          Every semester, CAIAC runs an <strong>8-week introductory reading group on AI safety</strong>, covering topics like neural network interpretability
          <a 
            href="https://distill.pub/2020/circuits/zoom-in/" 
            className="text-[#4A8A99] hover:underline align-super text-sm"
            target="_blank" rel="noopener noreferrer"
          >¹</a>
          , learning from human feedback
          <a 
            href="https://arxiv.org/abs/2009.01325" 
            className="text-[#4A8A99] hover:underline align-super text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >²</a>
          , goal misgeneralization in reinforcement learning agents
          <a 
            href="https://arxiv.org/abs/2105.14111" 
            className="text-[#4A8A99] hover:underline align-super text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >³</a>
          , and eliciting latent knowledge
          <a 
            href="https://arxiv.org/abs/2212.03827" 
            className="text-[#4A8A99] hover:underline align-super text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >⁴</a>
          . The fellowship meets weekly in small groups, with dinner provided and no additional work outside of meetings.
        </p>

        <p className="text-lg">
          See <a 
            href="https://docs.google.com/document/d/1gDIPzQ6b8LcJhfrag_Gy9ca6ziB4fYfKu-zMR6qYeiE/edit?usp=sharing" 
            className="text-[#4A8A99] hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            here 
          </a> for the curriculum (subject to change).
        </p>
        <p><strong>Applications for the Spring 2026 Technical Fellowships are now closed!</strong></p>
        <p>For those interested in the policy and governance side of AI, we recommend applying to our introductory <a 
            href="/get_involved/policy-fellowship" 
            className="text-[#4A8A99] hover:underline"
            
          >policy fellowship 
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
