import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="h-50 bg-blue-200 text-center align-middle">
      <Link href="/">Home</Link>
    </nav>
  );
}
