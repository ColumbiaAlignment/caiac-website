import Link from "next/link";

export default function SpringSocialPage() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="mb-12">
        <p className="text-sm tracking-widest text-gray-400 uppercase mb-2">
          February 2026
        </p>
        <h1 className="text-4xl font-light tracking-wide text-[#023a87]">
          Spring Social
        </h1>
      </div>

      {/* The invitation card */}
      <div className="relative">
        {/* Decorative corner accents */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-[#023a87]" />
        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-[#023a87]" />
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-[#023a87]" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-[#023a87]" />

        <div className="border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-10 space-y-8">
          <p className="text-lg leading-relaxed text-gray-700">
            Join us for our first social of the semester! Come meet fellow
            members, grab some snacks, and chat about AI safety, research, and
            whatever else is on your mind.
          </p>

          <div className="grid grid-cols-2 gap-6 py-4 border-y border-gray-100">
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">
                When
              </p>
              <p className="text-lg font-medium text-gray-800">
                Tuesday, February 3rd
              </p>
              <p className="text-gray-600">7:00 – 8:00 PM</p>
            </div>
            <div>
              <p className="text-xs tracking-widest text-gray-400 uppercase mb-1">
                Where
              </p>
              <p className="text-lg font-medium text-gray-800">
                Fayerweather 209
              </p>
              <p className="text-gray-600">Columbia Campus</p>
            </div>
          </div>

          <div className="flex justify-center pt-2">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc51ikVAmLDjDx216mCgioHgImXIgPpIY79b0DK7D3PSqdJtg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-semibold tracking-wide text-[#023a87] border-2 border-[#023a87] px-10 py-3 hover:bg-[#023a87] hover:text-white transition-all duration-200"
            >
              RSVP
            </a>
          </div>
        </div>
      </div>

      {/* Additional info */}
      <div className="mt-16 space-y-8">
        <div className="prose prose-gray">
          <h2 className="text-xl font-light tracking-wide text-gray-800 mb-4">
            More to come
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Can't make it this time? No worries — there will be more socials
            throughout the semester! If your plans change and you can no longer
            attend after RSVPing, please let us know at{" "}
            <a
              href="mailto:cualignment@gmail.com"
              className="text-[#4A8A99] hover:underline"
            >
              cualignment@gmail.com
            </a>{" "}
            so we can adjust our food order.
          </p>
        </div>

        <div className="prose prose-gray">
          <h2 className="text-xl font-light tracking-wide text-gray-800 mb-4">
            Fellowship deadline extended
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We've extended our deadline for the intro{" "}
            <Link
              href="/get_involved/technical-fellowship"
              className="text-[#4A8A99] hover:underline"
            >
              technical
            </Link>{" "}
            and{" "}
            <Link
              href="/get_involved/policy-fellowship"
              className="text-[#4A8A99] hover:underline"
            >
              policy
            </Link>{" "}
            fellowships to <strong>Friday, February 6th</strong> to give you
            more time to apply.
          </p>
        </div>

        <div className="prose prose-gray">
          <h2 className="text-xl font-light tracking-wide text-gray-800 mb-4">
            For returning members
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you recently graduated from the intro technical fellowship, we're
            holding an <strong>advanced technical fellowship</strong> for
            upskilling students to do AI research. Previous CAIAC members have
            published at NeurIPS, been accepted to MATS, and worked with mentors
            at Anthropic. More details at the social!
          </p>
        </div>
      </div>

      {/* Sign-off */}
      <div className="mt-16 pt-8 border-t border-gray-100">
        <p className="text-gray-500 italic">See you there!</p>
        <p className="mt-4 font-medium text-[#023a87]">— CAIAC</p>
      </div>
    </div>
  );
}
