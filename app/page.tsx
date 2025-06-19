import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FantasyLinksGrid from '@/components/FantasyLinksGrid';
import HowItWorks from '@/components/HowItWorks';
import EmailCapture from '@/components/EmailCapture';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <FantasyLinksGrid />
      <HowItWorks />
      <EmailCapture />
      <Footer />
    </main>
  );
}