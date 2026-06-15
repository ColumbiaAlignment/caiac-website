import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

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
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-light tracking-tight text-[#023a87] sm:text-6xl">
              Columbia AI Alignment Club
            </h1>
            <h2 className="text-4xl font-light tracking-tight text-[#023a87] sm:text-6xl">
              Research by Columbia students on catastrophic risks from advanced
              AI
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://listserv.cuit.columbia.edu/scripts/wa.exe?SUBED1=CUALIGNMENT&A=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-[#023a87] border-[#023a87] border px-8 py-3 hover:bg-[#023a87] hover:text-white transition-all"
              >
                Join our mailing list <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://join.slack.com/t/caiac-workspace/shared_invite/zt-2z17aw892-P4ziYvV1hEerwEmhj5tKtA"
                target="_blank"
                rel="noopener noreferrer"
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
              We think that reducing risks from advanced artificial intelligence
              may be one of the most important problems of our time. We also
              think that it’s an interesting and exciting problem, with open
              opportunities for many more researchers to make progress on it. We
              are a community of technical and policy researchers at Columbia
              aimed at reducing these risks and steering the trajectory of AI
              development for the better.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              CAIAC supports undergraduate and graduate students in conducting
              research relevant to reducing risks from advanced AI.
            </p>
            <p className="text-lg leading-relaxed text-gray-600">
              We also run a semester-long introductory reading group on AI
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
            <p>
              <strong>
                CAIAC is running a paper club at Collider this summer!
                Learn more{" "}
                <a
                  href="/get_involved/collider"
                  className="text-[#4A8A99] hover:underline"
                >
                  here
                </a>
                .
              </strong>
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
