import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import { Book, Cog } from "lucide-react";
import { FaSlack } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default async function Home() {
  // Function to read and parse markdown files
  const getNewsHeaders = async () => {
    const newsDir = path.join(process.cwd(), "src/app/news/entries");
    const files = fs.readdirSync(newsDir);
    const newsHeaders = files.map((file) => {
      const filePath = path.join(newsDir, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      const [month, day, yearRaw] = data.date.split("-").map(Number);
      const year = yearRaw < 100 ? 2000 + yearRaw : yearRaw;
      const dateObj = new Date(year, month - 1, day);
      return { title: data.title, date: data.date, link: data.link || null, dateObj };
    });
    newsHeaders.sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime());
    return newsHeaders.slice(0, 3);
  };

  const newsHeaders = await getNewsHeaders();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="pt-12 pb-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-light tracking-tight text-[#023a87] sm:text-6xl">
              Columbia AI Alignment Club
            </h1>
            <h2 className="text-4xl font-light tracking-tight text-[#023a87] sm:text-6xl">
              Research by Columbia students on catastrophic risks from advanced
              AI
            </h2>
            <div className="mx-auto mt-10 grid max-w-2xl gap-4 text-left md:grid-cols-2">
              <section className="h-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
                <h3 className="text-xl font-semibold text-[#023a87]">
                  Intro Fellowship Applications
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <a
                    href="https://forms.gle/xHhzbsfNDe6uLNe8A"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Apply to the technical fellowship"
                    className="relative flex min-h-16 items-center justify-center overflow-hidden rounded-md border border-[#023a87] bg-[#023a87] p-3 text-center text-white shadow-sm transition-colors hover:bg-[#002f70] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#023a87] focus-visible:ring-offset-2"
                  >
                    <Cog className="absolute h-10 w-10 opacity-20" aria-hidden="true" />
                    <span className="relative z-10 text-sm font-semibold sm:text-base">Technical</span>
                  </a>
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSeTmiiuhA5it9AXg2T1TZfGXdMLJt8OJvO5ujFYX1rbRLi0iQ/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Apply to the policy fellowship"
                    className="relative flex min-h-16 items-center justify-center overflow-hidden rounded-md border border-gray-700 bg-gray-700 p-3 text-center text-white shadow-sm transition-colors hover:bg-gray-800 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#023a87] focus-visible:ring-offset-2"
                  >
                    <Book className="absolute h-10 w-10 opacity-20" aria-hidden="true" />
                    <span className="relative z-10 text-sm font-semibold sm:text-base">Policy</span>
                  </a>
                </div>
              </section>

              <section className="h-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-5">
                <h3 className="text-xl font-semibold text-[#023a87]">
                  Stay Connected
                </h3>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <a
                    href="https://listserv.cuit.columbia.edu/scripts/wa.exe?SUBED1=CUALIGNMENT&A=1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex min-h-16 items-center justify-center overflow-hidden rounded-md border border-[#023a87] bg-[#023a87] p-3 text-center text-white shadow-sm transition-colors hover:bg-[#002f70] hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#023a87] focus-visible:ring-offset-2"
                  >
                    <HiOutlineMail className="absolute h-10 w-10 opacity-20" aria-hidden="true" />
                    <span className="relative z-10 text-sm font-semibold sm:text-base">Mailing List</span>
                  </a>
                  <a
                    href="https://join.slack.com/t/caiac-workspace/shared_invite/zt-2z17aw892-P4ziYvV1hEerwEmhj5tKtA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative flex min-h-16 items-center justify-center overflow-hidden rounded-md border border-gray-700 bg-gray-700 p-3 text-center text-white shadow-sm transition-colors hover:bg-gray-800 hover:no-underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#023a87] focus-visible:ring-offset-2"
                  >
                    <FaSlack className="absolute h-10 w-10 opacity-20" aria-hidden="true" />
                    <span className="relative z-10 text-sm font-semibold sm:text-base">Slack</span>
                  </a>
                </div>
              </section>
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
              We are a community of technical and policy researchers at Columbia
              aimed at steering the trajectory of AI development for the better by
              reducing risks from advanced artificial intelligence — an endeavor we
              think may be one of the most important problems of our time. We also
              find it to be an interesting and exciting problem with ample
              opportunities for many more researchers to work on it.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              CAIAC supports undergraduate and graduate students in learning about
              and conducting research relevant to reducing risks from advanced AI.
              We also run semester-long introductory reading groups on AI
              safety, including both a{" "}
              <a
                href="/get_involved/technical-fellowship"
                className="text-[#4A8A99] hover:underline"
              >
                technical machine learning track
              </a>
              , and a{" "}
              <a
                href="/get_involved/policy-fellowship"
                className="text-[#4A8A99] hover:underline"
              >
                policy track
              </a>
              .
            </p>

          </div>

          {/* Logos Section */}
          <div className="mt-24">
            <h3 className="text-2xl font-semibold text-[#023a87] mb-10 text-center">
              Our past members have worked with:
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-x-12 gap-y-12">
              {[
                { src: "/orgs/anthropic_logo.svg", alt: "Anthropic", h: "h-9" },
                { src: "/orgs/openai_logo.svg", alt: "OpenAI", h: "h-7" },
                { src: "/orgs/redwood_logo.svg", alt: "Redwood Research", h: "h-12" },
                { src: "/orgs/constellation_logo.svg", alt: "Constellation", h: "h-12" },
                { src: "/orgs/mats_logo.png", alt: "ML Alignment and Theory Scholars", h: "h-10" },
                { src: "/orgs/goodfire_logo.svg", alt: "Goodfire", h: "h-8" },
                { src: "/orgs/chai_logo.png", alt: "CHAI", h: "h-10" },
                { src: "/orgs/xlab_logo.png", alt: "XLab", h: "h-10" },
                { src: "/orgs/spar_logo.png", alt: "Supervised Program for Alignment Research", h: "h-10" },
                { src: "/orgs/apollo_logo.png", alt: "Apollo Research", h: "h-10" },
              ].map((logo) => (
                <div key={logo.alt} className="flex justify-center">
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`${logo.h} object-contain grayscale transition-all duration-300 hover:grayscale-0`}
                  />
                </div>
              ))}
            </div>
            <div className="mt-14 h-px w-full bg-[#e7e5e0]" />
          </div>

          {/* News Section */}
          <div className="mt-24">
            <a
              href="/news"
              className="text-2xl font-semibold text-[#023a87] hover:underline"
            >
              Latest News
            </a>
            <div className="mt-8 space-y-4">
              {newsHeaders.map((news, index) => (
                <div
                  key={index}
                  className="prose prose-lg text-gray-600 flex items-center"
                >
                  <p className="text-sm text-gray-500 mr-4">{news.date}</p>
                  {news.link ? (
                    <p>
                      <a href={news.link} className="text-gray-800 hover:underline">
                        {news.title}
                      </a>
                    </p>
                  ) : (
                    <p>{news.title}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
