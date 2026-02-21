import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export default async function Home() {
  // Function to read and parse markdown files
  const getNewsHeaders = async () => {
    const newsDir = path.join(process.cwd(), 'src/app/news/entries');
    const files = fs.readdirSync(newsDir).reverse().slice(0, 3); // Take the last 3 files
    const newsHeaders = files.map((file) => {
      const filePath = path.join(newsDir, file);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContents);
      return { title: data.title, date: data.date };
    });
    return newsHeaders;
  };

  const newsHeaders = await getNewsHeaders();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-light tracking-tight text-[#023a87] sm:text-6xl">
              Columbia AI Alignment Club
            </h1>
            <h2 className="text-4xl font-light tracking-tight text-[#023a87] sm:text-6xl">
              Research by Columbia students on catastrophic risks from advanced AI
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://listserv.cuit.columbia.edu/scripts/wa.exe?SUBED1=CUALIGNMENT&A=1"
                target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold text-[#023a87] border-[#023a87] border px-8 py-3 hover:bg-[#023a87] hover:text-white transition-all"
              >
                Join our mailing list <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://join.slack.com/t/caiac-workspace/shared_invite/zt-2z17aw892-P4ziYvV1hEerwEmhj5tKtA"
                target="_blank" rel="noopener noreferrer"
                className="text-sm font-semibold text-[#023a87] border-[#023a87] border px-8 py-3 hover:bg-[#023a87] hover:text-white transition-all"
              >
                Join our Slack <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-3xl px-6 pb-24">
        <div className="space-y-16">
          {/* Introduction */}
          <div className="prose prose-lg">
            <p className="text-lg leading-relaxed text-gray-600">
              We think that reducing risks from advanced artificial intelligence may be one of the most important problems of our time. We also think that it’s an interesting and exciting problem, with open opportunities for many more researchers to make progress on it.             
              We are a community of technical and policy researchers at Columbia aimed at reducing these risks and steering 
              the trajectory of AI development for the better.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              CAIAC supports undergraduate and graduate students in conducting research relevant to reducing risks from advanced AI.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              We also run a semester-long introductory reading group on AI safety, including both a <a href="/get_involved/technical-fellowship" className="text-[#4A8A99] hover:underline">technical machine learning track</a>, and a <a href="/get_involved/policy-fellowship" className="text-[#4A8A99] hover:underline">policy track</a>.
            </p>
            <p><strong>Applications for our introductory fellowships are now closed! Click the links above for more information.</strong></p>
          </div>

          {/* Logos Section */}
          <div className="mt-24 text-center">
            <h3 className="text-2xl font-semibold text-[#023a87]">Our past members have worked with:</h3>
            <div className="mt-8 flex flex-wrap justify-center gap-8">
              <img src="/orgs/redwood_logo.svg" alt="Redwood Research" className="h-16" />
              <img src="/orgs/constellation_logo.svg" alt="Constellation" className="h-16" />
              <img src="/orgs/mats_logo.png" alt="ML Alignment and Theory Scholars" className="h-16" />
              <img src="/orgs/chai_logo.png" alt="CHAI" className="h-16" />
              <img src="/orgs/xlab_logo.png" alt="XLab" className="h-16" />
              <img src="/orgs/spar_logo.png" alt="Supervised Program for Alignment Research" className="h-16" />
              {/* Add more logos as needed */}
            </div>
          </div>

          {/* News Section */}
          <div className="mt-24">
            <a href="/news" className="text-2xl font-semibold text-[#023a87] hover:underline">
              Latest News
            </a>
            <div className="mt-8 space-y-4">
              {newsHeaders.map((news, index) => (
                <div key={index} className="prose prose-lg text-gray-600 flex items-center">
                  <p className="text-sm text-gray-500 mr-4">{news.date}</p>
                  <p>{news.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

