export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-light tracking-wide mb-8">Policy Resources</h1>
          
          <div className="space-y-8">
            <p className="text-gray-800 text-lg leading-relaxed">
              Here are resources to help you kick start your AI Policy Career!
            </p>
            
            <div className="space-y-4">
              <div>
                <a href="https://emergingtechpolicy.org/" className="text-2xl text-blue-600 hover:underline">
                  Emerging Technology Policy
                </a>
                <p className="text-gray-600">A resource for understanding the impact of emerging technologies on policy.</p>
              </div>
              <hr className="border-gray-300" />
              <div>
                <a href="https://horizonpublicservice.org/" className="text-2xl text-blue-600 hover:underline">
                  Horizon Public Service
                </a>
                <p className="text-gray-600">Dedicated to advancing public service through innovative policy solutions.</p>
              </div>
              <hr className="border-gray-300" />
            </div>



          </div>
        </div>
      </div>

    </div>
  );
}