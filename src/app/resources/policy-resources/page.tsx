import { FaGithub } from 'react-icons/fa';

const resources = [
  {
    title: "Emerging Technology Policy*",
    description: "A comprehensive resource for emerging tech policy careers. Guides and fellowships included.",
    link: "https://emergingtechpolicy.org/"
  },
  {
    title: "Horizon Fellowship",
    description: "A public service program that provides emerging leaders with hands‑on experience addressing AI policy and governance challenges within government and related institutions.",
    link: "https://horizonpublicservice.org/"
  },
  {
    title: "Tech Congress AI Safety Fellowship",
    description: "Unites technology professionals and policymakers to collaborate on research and initiatives that enhance the safety and ethical governance of AI systems.",
    link: "https://techcongress.io/"
  },
  {
    title: "Future Impact Group",
    description: "A part‑time, remote‑first fellowship that matches research associates with high‑profile project leads to work on impactful projects at the intersection of AI policy and philosophy for safe AI.",
    link: "https://futureimpact.group/"
  },
  {
    title: "RAND Technology and Security Policy (TASP) Fellowship",
    description: "Convenes high‑caliber researchers to conduct policy analysis on technology, security, and emerging global risks. We talked to Michael Aird and he said to focus on programs like MATS before applying.",
    link: "https://www.rand.org/global-and-emerging-risks/centers/technology-and-security-policy/fellows.html"
  },
  {
    title: "IAPS Fellowship",
    description: "Offers an interdisciplinary platform for scholars to research the societal and policy implications of AI while building networks with leading experts in AI governance and safety.",
    link: "https://www.iaps.ai/fellowship"
  },
  {
    title: "Vista Policy Institute",
    description: "A fellowship and training initiative designed to equip emerging talent with the skills to drive change in AI policy and governance through applied research and advocacy.",
    link: "https://vistainstituteai.org/program"
  },
  {
    title: "GovAI",
    description: "An organization focused on shaping the governance of advanced AI by offering fellowships, scholar positions, and talent development roles that empower individuals to influence policy and regulation.",
    link: "https://www.governance.ai/opportunities"
  },
  {
    title: "Aspen Tech Policy Hub",
    description: "Policy bootcamp for tech experts.",
    link: "https://aspenpolicyacademy.org/program/science-and-technology-policy-fellowship/"
  },
  {
    title: "Presidential Innovation Fellowship",
    description: "A fellowship that brings technical individuals to government.",
    link: "https://presidentialinnovationfellows.gov/"
  },
  {
    title: "AAAS Science & Technology Policy Fellowships (STPF)",
    description: "The fellowship program offers hands-on opportunities to apply your scientific knowledge and technical skills to important societal challenges.",
    link: "http://www.stpf-aaas.org/"
  }
];

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-light tracking-wide mb-8">Policy Resources</h1>
          
          <div className="space-y-8">
            <p className="text-gray-800 text-lg leading-relaxed">
              Here are resources to help you kick start your AI Policy Career! (* means highly recommended)
            </p>
            <p className="text-gray-600 text-sm leading-relaxed flex items-center">
              Please contribute to our resources on  
              <a href="https://github.com/cualignment" className="text-blue-600 hover:underline ml-1 flex items-center">
                <FaGithub className="inline-block h-4 w-4 mr-1" />  GitHub
              </a>.
            </p>
            
            <div className="space-y-4">
              {resources.map((resource, index) => (
                <div key={index}>
                  <a href={resource.link} className="text-2xl text-blue-600 hover:underline">
                    {resource.title}
                  </a>
                  <p className="text-gray-600">{resource.description}</p>
                  {index < resources.length - 1 && <hr className="border-gray-300" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}