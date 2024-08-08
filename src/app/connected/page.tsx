import Link from 'next/link';

export default function Connected() {
  return (
    <div className="container">
      <div className="connected">
        <p>Your wallet is now connected!</p>
        <Link href="/homescreen">
          <button className="homescreen-button">Go to homescreen</button>
        </Link>
      </div>
    </div>
  );
}
