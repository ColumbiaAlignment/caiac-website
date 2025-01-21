const researchEntries = [
  
  {
    title: "Adaptive Contextual Perception: How to Generalize to New Backgrounds and Ambiguous Objects",
    authors: [
      { name: "Zhuofan Ying", isPI: true },
      { name: "Peter Hase" },
      { name: "Mohit Bansal" }
    ],
    date: "December 2, 2024",
    link: "https://arxiv.org/abs/2306.05963v2"
  },
  
  {
    title: "Generalization Analogies (Genies): A Testbed for Generalizing AI Oversight to Hard-to-Measure Domains",
    authors: [
      { name: "Joshua Clymer", isPI: true },
      { name: "Garrett Baker" },
      { name: "Rohan Subramani", isPI: true },
      { name: "Sam Wang" }
    ],
    date: "November 13, 2023",
    link: "https://scholar.google.com/citations?user=O-qEYjUAAAAJ&hl=en"
  }
];

export default function ResearchPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
   
      <h1>
        Recent Research by CAIAC Members
      </h1>
      
      <div className="space-y-12">
        {researchEntries.map((entry, index) => (
          <div key={index} className="border-b border-gray-200 pb-12 last:border-b-0 last:pb-0">
            <div className="flex flex-col gap-3">
              <a 
                href={entry.link}
                target="_blank" rel="noopener noreferrer"
                className="text-[#023a87] hover:underline text-xl font-medium block"
              >
                {entry.title}
              </a>
              
              <div className="text-gray-700">
                {entry.authors.map((author, i) => (
                  <span key={i}>
                    {author.isPI ? <strong>{author.name}</strong> : author.name}
                    {i < entry.authors.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </div>
              
              <div className="text-gray-600">
                {entry.date}
              </div>
            </div>
          </div>
        ))}
      </div>
      <br></br>
      <br></br>
    </div>
  );
}
