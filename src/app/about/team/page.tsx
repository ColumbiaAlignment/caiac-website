export default function TeamPage() {
  const teamMembers = [
    {
      name: "Mannat Vikramaditya Jain",
      title: (
        <>
          Director — on leave for{" "}
          <a
            href="https://www.matsprogram.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            MATS
          </a>
        </>
      ),
      image: "/team/mannat_jain.png",
      link: "https://www.linkedin.com/in/mannatvjain/",
    },
    {
      name: "Jacob Ryabinky",
      title: "Interim Director",
      image: "/team/jacob_ryabinky.png",
      link: "https://www.linkedin.com/in/jacob-ryabinky-ba573626b/",
    },
    {
      name: "Ciarán Walsh",
      title: "Deputy Director",
      image: "/team/ciaran_walsh.jpeg",
      link: "https://www.linkedin.com/in/ciar%C3%A1n-walsh/",
      objectPosition: "10% 100%",
      scale: 1.3,
    },
    {
      name: "Albert Ming Wei",
      title: "Logistics Lead",
      image: "/team/albert_ming_wei.jpg",
      link: "https://www.linkedin.com/in/albert-ming-wei-893348209/",
      objectPosition: "50% 30%",
    },
    {
      name: "Peyton Jackson",
      title: "Research & Events Lead",
      image: "/team/peyton_jackson.png",
      link: "https://www.linkedin.com/in/peyton-jackson-274957383/",
    },
    {
      name: "Farhaan Siddiqui",
      title: "Operations Lead",
      image: "/team/farhaan-siddiqui.jpg",
      link: "https://www.linkedin.com/in/farhaan-siddiqui-797650224/",
    },
  ];

  const currentFacilitators = [
    {
      name: "Nick Meyer",
      title: "Fall '26 Advanced Technical Facilitator",
      image: "/team/nick_meyer.png",
      link: "https://www.linkedin.com/in/nickmeyer0/",
    },
    {
      name: "Anay Garodia",
      title: "Technical Facilitator",
      image: "/team/anay_garodia.jpeg",
      link: "https://www.linkedin.com/in/anay-garodia-a863a6257/",
      objectPosition: "50% 30%",
    },
    {
      name: "Peyton Jackson",
      title: "Technical Facilitator",
      image: "/team/peyton_jackson.png",
      link: "https://www.linkedin.com/in/peyton-jackson-274957383/",
    },
    {
      name: "Yau-Meng Wong",
      title: "Technical Facilitator",
      image: "/team/yaumengwong.png",
      link: "https://www.linkedin.com/in/yau-meng-wong-721a5522b/",
    },
    {
      name: "Ruhi Mudoi",
      title: "Policy Facilitator",
      image: "/team/ruhi_mudoi.png",
    },
    {
      name: "Sonali Teja Rao",
      title: "Policy Facilitator",
      image: "/team/sonali_teja_rao.png",
    },
    {
      name: "Fernando Maria Sanchez Garcia",
      title: "Policy Facilitator",
      image: "/team/fernando_maria_sanchez_garcia.png",
    },
  ];

  const advisors = [
    {
      name: "Micah Goldblum",
      title: "Faculty Advisor",
      image: "/team/micah_goldblum.jpg",
      link: "https://www.linkedin.com/in/micah-goldblum-9427b817b/",
    },
    {
      name: "Yau-Meng Wong",
      title: "Advisor and Former Director",
      image: "/team/yaumengwong.png",
      link: "https://www.linkedin.com/in/yau-meng-wong-721a5522b/",
    },
    {
      name: "Ryan Zhang",
      title: "Advisor and Former Director",
      image: "/team/ryan-zhang.jpg",
      link: "https://www.linkedin.com/in/rhyzhang/",
    },
    {
      name: "Olivia Long",
      title: "Advisor and Former Director",
      image: "/team/olivia_long.jpg",
      link: "https://www.linkedin.com/in/olivia-l-572351246",
    },
  ];

  const alumni = [
    {
      name: "Alexandra Bates",
      image: "/team/alexandra_bates.jpg",
      title: "Former Advisor",
      link: "https://www.linkedin.com/in/alexandrabates/",
    },
    {
      name: "Rohan Subramani",
      image: "/team/rohan_subramani.jpg",
      title: "Former Advisor",
      link: "https://www.linkedin.com/in/rohan-subramani-70a919225/",
    },
    {
      name: "Yash Mangalick",
      image: "/team/yash_mangalick.jpg",
      title: "Former Advisor",
      link: "https://www.linkedin.com/in/yash-mangalick-55b8771b3",
    },
    {
      name: "Ella Markianos",
      image: "/team/ella_markianos.jpg",
      title: "Former Advisor",
      link: "https://www.linkedin.com/in/ella-markianos-7708a9237/",
    },
    {
      name: "Arav Dhoot",
      image: "/team/arav_dhoot.jpeg",
      title: "Spring '26 Technical Facilitator",
      link: "https://www.linkedin.com/in/aravdhoot/",
    },
    {
      name: "Paul Kroeger",
      image: "/team/paul_kroeger.jpeg",
      title: "Former Director of Research",
      link: "https://www.linkedin.com/in/paul-kroeger/",
    },
    {
      name: "Josefina Piddo",
      image: "/team/josefina_piddo.png",
      title: "Former Policy Director",
      link: "https://www.linkedin.com/in/josefina-piddo/",
    },
    {
      name: "Arjun Balaji",
      image: "/team/arjun_balaji.jpeg",
      title: "Former Events Co-Lead",
      link: "https://www.linkedin.com/in/arjunbalaji02/",
    },
    {
      name: "Emilio Barkett",
      image: "/team/emilio_barkett.jpg",
      title: "Fall '25 Policy Facilitator, Research Manager",
      link: "https://www.linkedin.com/in/emiliobarkett/",
    },
    {
      name: "Sarah Korb",
      image: "/team/sarah_korb.jpeg",
      title: "Fall '25 Technical Facilitator",
      link: "https://www.linkedin.com/in/sarah-korb/",
    },
    {
      name: "Josh Ying",
      image: "/team/josh_ying.jpeg",
      title: "Spring '25 Technical Facilitator",
      link: "https://www.linkedin.com/in/zhuofan-josh-ying-27444a273/",
    },
    {
      name: "Pranav Mehta",
      image: "/team/pranav_mehta.jpeg",
      title: "Spring '25 Policy Facilitator",
      link: "https://www.linkedin.com/in/pranavmehta97/",
    },
    {
      name: "Catherine Mok",
      image: "/team/catherine_mok.jpg",
      title: "Spring '25 Technical Facilitator",
      link: "https://www.linkedin.com/in/catemok/",
    },
    {
      name: "Junyao Chen",
      image: "/team/junyao_chen.jpg",
      title: "Spring '25 Technical Facilitator",
      link: "https://www.linkedin.com/in/jychen630/",
    },
    {
      name: "Akshay Manglik",
      image: "/team/akshay_manglik.jpg",
      title: "Spring '25 Technical Facilitator",
      link: "https://www.linkedin.com/in/akshay-manglik/",
    },
    {
      name: "Aiste Merfeldaite",
      image: "/team/aiste_merfeldaite.jpg",
      title: "Spring '25 Policy Facilitator",
      link: "https://www.linkedin.com/in/aiste-merfeldaite-56652020b/",
    },
    {
      name: "Thomas Gansa",
      image: "/team/thomasgansa.png",
      title: "Communications Lead, Alumni",
      link: "https://www.linkedin.com/in/thomas-g-93ab0223a/",
    },
  ];

  const partners = [
    {
      name: "Harvard AI Safety Student Team",
      title: "Boston, MA",
      image: "/partners/aisst.png",
      link: "https://haist.ai",
    },
    {
      name: "MIT AI Alignment",
      title: "Boston, MA",
      image: "/partners/maia.png",
      link: "https://aialignment.mit.edu",
    },
    {
      name: "Cambridge Boston Alignment Initiative",
      title: "Boston, MA",
      image: "/partners/cbai.png",
      link: "https://www.cbai.ai",
    },
    {
      name: "Cornell AI Alignment",
      title: "Ithaca, NY",
      image: "/partners/cornell_aia.png",
      link: "https://www.cornell-aia.org",
    },
    {
      name: "Brown AI Safety Team",
      title: "Providence, RI",
      image: "/partners/baist.png",
      link: "https://www.baist.ai",
    },
    {
      name: "Boston University AI Safety Association",
      title: "Boston, MA",
      image: "/partners/buaisa.png",
      link: "https://buaisa.org",
    },
    {
      name: "University of British Columbia AI Safety",
      title: "Vancouver, BC",
      image: "/partners/ubcais.png",
      link: "https://www.ubcaisafety.org",
    },
    {
      name: "Stanford AI Alignment",
      title: "Stanford, CA",
      image: "/partners/saia.png",
      link: "https://stanfordaialignment.org",
    },
    {
      name: "Georgia Tech AI Safety Initiative",
      title: "Atlanta, GA",
      image: "/partners/gtaisi.png",
      link: "https://www.aisi.dev",
    },
    {
      name: "UChicago AI Safety",
      title: "Chicago, IL",
      image: "/partners/ucais.png",
      link: "https://uchicagoaisafety.com",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/*Header*/}
        <h1 className="text-[#023a87] text-5xl font-light text-center mb-4">
          Our Team
        </h1>

        <p className="text-center text-gray-600 italic mb-16"></p>

        {/* Organizers Grid */}
        <h2 className="text-3xl text-[#023a87] font-light mb-8 text-center">
          Organizers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 rounded-full overflow-hidden w-56 h-56 shadow-md">
                <a href={member.link} title={member.name} target="_blank">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{
                      objectPosition: member.objectPosition || "center",
                      transform: `scale(${member.scale || 1})`,
                    }}
                  />
                </a>
              </div>

              <h3 className="text-2xl text-[#023a87] font-light mb-2">
                {member.name}
              </h3>

              <p className="text-gray-600 text-lg font-light italic">
                {member.title}
              </p>
            </div>
          ))}
        </div>

        {/* Current Facilitators Grid */}
        <div className="mt-16">
          <h2 className="text-3xl text-[#023a87] font-light mb-8 text-center">
            Current Facilitators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {currentFacilitators.map((member) => {
              const portrait = (
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: member.objectPosition || "center",
                  }}
                />
              );

              return (
                <div
                  key={member.name}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="mb-6 rounded-full overflow-hidden w-56 h-56 shadow-md">
                    {member.link ? (
                      <a href={member.link} title={member.name} target="_blank" rel="noopener noreferrer">
                        {portrait}
                      </a>
                    ) : portrait}
                  </div>

                  <h3 className="text-2xl text-[#023a87] font-light mb-2">
                    {member.name}
                  </h3>

                  <p className="text-gray-600 text-lg font-light italic">
                    {member.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/*Advisor Grid*/}
        <div className="mt-16">
          <h2 className="text-3xl text-[#023a87] font-light mb-8 text-center">
            Advisors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {advisors.map((advisor) => (
              <div
                key={advisor.name}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 rounded-full overflow-hidden w-56 h-56 shadow-md">
                  <a href={advisor.link} title={advisor.name} target="_blank">
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      className="w-full h-full object-cover"
                    />
                  </a>
                </div>

                <h3 className="text-2xl text-[#023a87] font-light mb-2">
                  {advisor.name}
                </h3>

                <p className="text-gray-600 text-lg font-light italic">
                  {advisor.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Alumni Grid */}
        <div className="mt-16">
          <h2 className="text-3xl text-[#023a87] font-light mb-8 text-center">
            Alumni
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
            {alumni.map((member) => (
              <div
                key={member.name}
                className="relative flex flex-col items-center text-center group"
              >
                <div
                  className="pointer-events-none invisible absolute bottom-full left-1/2 z-20 -translate-x-1/2 pb-3 opacity-0 transition-opacity duration-150 motion-reduce:transition-none group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                  aria-hidden="true"
                >
                  <img
                    src={member.image}
                    alt=""
                    className="h-40 w-40 rounded-full border-4 border-white object-cover shadow-xl"
                  />
                </div>
                <h3 className="text-2xl text-[#023a87] font-light mb-2">
                  <a
                    href={member.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-sm hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#023a87]"
                  >
                    {member.name}
                  </a>
                </h3>

                <p className="text-gray-600 text-lg font-light italic">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partners Grid */}

        <div className="mt-16">
          <h2 className="text-3xl text-[#023a87] font-light mb-8 text-center">
            Partner Organizations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-6 flex items-center justify-center h-40 w-full">
                  <a href={partner.link} title={partner.name} target="_blank">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="max-h-40 max-w-full object-contain"
                    />
                  </a>
                </div>

                <h3 className="text-2xl text-[#023a87] font-light mb-2">
                  {partner.name}
                </h3>

                <p className="text-gray-600 text-lg font-light italic">
                  {partner.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
