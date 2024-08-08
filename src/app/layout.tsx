import '../styles/globals.css';
import NavBar from './components/NavBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Web3 Payment Extension</title>
      </head>
      <body>
        <main>{children}</main>
        <NavBar />
      </body>
    </html>
  );
}
