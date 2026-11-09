// components/Footer.jsx
import { FaGithub, FaEnvelope, FaInstagram } from 'react-icons/fa';

export default function Footer() {
    return (
      <footer className="bg-[#023a87] text-white w-full overflow-visible">
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
                href="https://listserv.cuit.columbia.edu/scripts/wa.exe?SUBED1=CUALIGNMENT&A=1"
                target="_blank" rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Join our mailing list →
              </a>
              <div className="flex space-x-4 items-center justify-center mt-4">
                <a 
                  href="mailto:cualignment@gmail.com" 
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <FaEnvelope className="inline-block h-8 w-8" />
                </a>
                <a 
                  href="https://github.com/cualignment"
                  target="_blank" rel="noopener noreferrer"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <FaGithub className="inline-block h-8 w-8" />
                </a>
                <a
                  href="https://www.instagram.com/columbiaalignment/"
                  target="_blank" rel="noopener noreferrer"
                  aria-label="CAIAC on Instagram"
                  className="text-white hover:text-gray-300 transition-colors"
                >
                  <FaInstagram className="inline-block h-8 w-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
