'use client';

import { useState, useEffect } from 'react';

const HERO_IMAGES = [
  '/collider/space-lounge.jpg',
  '/collider/space-office.jpg',
  '/collider/space-neon.jpg',
];

const APPLY_URL = 'https://airtable.com/appGYD8Ajq7BT6h57/pag0Igw1JtXYB6CXr/form';

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

export default function ColliderPage() {
  const [current, setCurrent] = useState(0);
  const [openQuestions, setOpenQuestions] = useState(new Set<number>());

  // Cycle the hero background images.
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleQuestion = (index: number) => {
    setOpenQuestions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) newSet.delete(index);
      else newSet.add(index);
      return newSet;
    });
  };

  const faqData = [
    {
      question: "Who can join the paper club?",
      answer: (
        <>
          Past intro fellows have primarily been undergraduate, masters, and graduate students from Columbia. Because the summer session meets off-campus at <a href="https://collider.nyc" className="text-[#4A8A99] hover:underline" target="_blank" rel="noopener noreferrer">Collider</a>, you don&apos;t need to be affiliated with Columbia to join. In fact, we actively encourage you to apply if you&apos;re <span className="underline">not</span> affiliated with Columbia! One of the reasons we&apos;re holding this off-campus is so non-Columbia students can participate.
        </>
      )
    },
    {
      question: "How much experience with machine learning is expected?",
      answer: (
        <>
          Participants should be familiar with basic concepts in machine learning, such as deep neural networks, stochastic gradient descent, and reinforcement learning. If you&apos;ve previously gone through{" "}
          <a href="https://sparai.org/" className="text-[#4A8A99] hover:underline" target="_blank" rel="noopener noreferrer">SPAR</a>,{" "}
          <a href="https://www.cbai.ai/cambria" className="text-[#4A8A99] hover:underline" target="_blank" rel="noopener noreferrer">CAMBRIA</a>, or an introductory reading group at your university, you&apos;ll be in good shape. If you haven&apos;t but are technical, apply anyway!
        </>
      )
    },
    {
      question: "When and where does the paper club meet?",
      answer: (
        <>
          The paper club meets once a week on Saturday for two hours, with brunch provided. We&apos;ll be meeting at <a href="https://collider.nyc" className="text-[#4A8A99] hover:underline" target="_blank" rel="noopener noreferrer">Collider</a>, the New York City home for AI safety, in Lower Manhattan.
        </>
      )
    },
    {
      question: "What if I already know all the material in the introductory curriculum?",
      answer: (
        <>
          <a href={APPLY_URL} className="text-[#4A8A99] hover:underline" target="_blank" rel="noopener noreferrer">Apply!</a> The introductory curriculum is useful background for the paper club, but will not be the basis of its contents. If you&apos;re looking for something more involved, you may also be interested in programs like{" "}
          <a href="https://www.matsprogram.org/" className="text-[#4A8A99] hover:underline" target="_blank" rel="noopener noreferrer">MATS</a>{" "}
          or{" "}
          <a href="https://caish.org/mars" className="text-[#4A8A99] hover:underline" target="_blank" rel="noopener noreferrer">MARS</a>.
        </>
      )
    },
    {
      question: "Who facilitates the paper club?",
      answer: "The paper club is facilitated by CAIAC members and alumni with research experience in AI safety. This includes upperclassmen and graduates."
    }
  ];

  return (
    <div>
      {/* Full-bleed image-switching hero */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] -mt-8 w-screen h-[70vh] min-h-[440px] overflow-hidden">
        {HERO_IMAGES.map((src, i) => (
          <img
            key={src}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1500ms] ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
          <h1 className="!m-0 text-white text-5xl sm:text-7xl font-light tracking-wide drop-shadow-lg">
            CAIAC @ Collider
          </h1>
          <p className="mt-5 max-w-2xl text-lg sm:text-xl text-white/90 font-light drop-shadow">
            A summer paper club reading frontier research on AI safety, interpretability, and alignment science at Collider, NYC.
          </p>

          <a
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block border border-white px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-white hover:text-black hover:no-underline"
          >
            Apply now <span aria-hidden="true">→</span>
          </a>

          <div className="mt-10 flex gap-3">
            {HERO_IMAGES.map((src, i) => (
              <button
                key={src}
                onClick={() => setCurrent(i)}
                aria-label={`Show image ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'w-8 bg-white' : 'w-2.5 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Body — content pulled from the Technical Fellowship page */}
      <div className="max-w-4xl mx-auto px-4 py-12">
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
              target="_blank" rel="noopener noreferrer"
            >²</a>
            , goal misgeneralization in reinforcement learning agents
            <a
              href="https://arxiv.org/abs/2105.14111"
              className="text-[#4A8A99] hover:underline align-super text-sm"
              target="_blank" rel="noopener noreferrer"
            >³</a>
            , and eliciting latent knowledge
            <a
              href="https://arxiv.org/abs/2212.03827"
              className="text-[#4A8A99] hover:underline align-super text-sm"
              target="_blank" rel="noopener noreferrer"
            >⁴</a>
            . <strong>This summer</strong>, CAIAC is running a paper club to read frontier research on AI safety, interpretability, and alignment science at{" "}
            <a
              href="https://collider.nyc"
              className="text-[#4A8A99] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Collider
            </a>{" "}
            in Lower Manhattan.
          </p>

          <p className="text-lg">
            See <a
              href="https://docs.google.com/document/d/1gDIPzQ6b8LcJhfrag_Gy9ca6ziB4fYfKu-zMR6qYeiE/edit?usp=sharing"
              className="text-[#4A8A99] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a> for our Spring 2026 reading group curriculum (useful background for the reading group).
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
    </div>
  );
}
