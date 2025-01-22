// components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-[#023a87] text-white">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="flex flex-col items-center text-center">
            <img 
              src="/logo.svg" 
              alt="Columbia AI Safety"
              className="h-12 w-auto mb-6 brightness-0 invert" 
            />
            <p className="text-white hover:text-gray-300 transition-colors">
              Columbia University&apos;s student organization dedicated to AI safety research and education.
            </p>
            <div className="space-y-2">
              <a 
                href="https://forms.gle/fa2dFsV5W8VSDvoT8"
                target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Join our mailing list →
              </a>
              <p className="text-gray-300 max-w-md mb-6">
                <a 
                  href="mailto:cualignment@gmail.com" 
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  cualignment@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
