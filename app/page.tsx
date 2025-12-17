import Navbar from '@/app/components/layout/Navbar';
import Footer from '@/app/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Temporary content to test navbar and footer */}
      <main className="flex-1 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">
              Mobarrez <span className="text-accent">Pro</span>
            </h1>
          </div>
          
          {/* Spacer to enable scrolling */}
          <div className="h-[150vh]"></div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}