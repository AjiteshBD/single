import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Web3 Payment Extension</h1>
      <Link href="/login">Login</Link>
    </div>
  );
}
