import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <div className="home">
        <div className="logo">WEBPAY</div>
        <div className="tagline">Your cross-chain payment system</div>
        <Link href="/getStarted">
          <button className="getStarted">Get started</button>
        </Link>
        <Link href="/skip">
          <button className="skip">Skip</button>
        </Link>
      </div>
    </div>
  );
}
