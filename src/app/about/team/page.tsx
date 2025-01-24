export default function TeamPage() {
  const teamMembers = [
    {
      name: "Yau-Meng Wong",
      title: "Director",
      image: "/team/yaumengwong.png",
    },
    {
      name: "Ryan Zhang",
      title: "Deputy Director",
      image: "/team/ryan-zhang.jpg",
    },
    {
      name: "Thomas Gansa",
      title: "Communications Lead",
      image: "/team/thomasgansa.png",
    },
    {
      name: "Shivani Rajagopalan",
      title: "Treasurer",
      image: "/team/shivani-rajagopalan.jpeg",
    },
    {
      name: "Pranav Mehta",
      title: "Policy Fellowship Lead",
      image: "/team/pranav_mehta.jpeg",
    },
    {
      name: "Catherine Mok",
      title: "Technical Facilitator",
      image: "/team/catherine_mok.jpg",
    },
    {
      name: "Josh Ying",
      title: "Technical Facilitator",
      image: "/team/josh_ying.jpeg",
    },
    {
      name: "Junyao Chen",
      title: "Technical Facilitator",
      image: "/team/junyao_chen.jpg",
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/*Header*/}
        <h1 className="text-[#023a87] text-5xl font-light text-center mb-4">
          Our Team
        </h1>
        
        <p className="text-center text-gray-600 italic mb-16">
        </p>

        {/*Team Grid*/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col items-center text-center group">
              <div className="mb-6 rounded-full overflow-hidden w-56 h-56 shadow-md">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
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
      </div>
    </div>
  );
}