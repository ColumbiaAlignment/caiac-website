// app/layout.js
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
export const metadata = {
  title: "CAIAC",
  description: "Website for the Columbia AI Alignment Club",
  icons: {
    icon: '/logo.svg',
    apple: '/logo.png',
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GJXS1B9ZXK"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GJXS1B9ZXK');
          `}
        </script>
      </head>
      
      <body>
        <Navbar />
        <main style={{ padding: "2rem" }}>
          {children}
        </main>
        
      </body>
      <Footer></Footer>
    </html>
  );
}
