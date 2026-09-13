import Hero from '@/components/Hero/Hero';
import Couple from '@/components/Couple/Couple';
import Gallery from '@/components/Gallery/Gallery';
import DateReveal from '@/components/DateReveal/DateReveal';
import Countdown from '@/components/Countdown/Countdown';

export default function Home() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Couple />
      <Gallery />
      <DateReveal />
      <footer style={{ padding: '2rem', textAlign: 'center', backgroundColor: 'var(--background)', color: 'var(--accent-dark)', fontSize: '0.9rem' }}>
        <p>Made with love for Afra & Nishan</p>
      </footer>
    </main>
  );
}
