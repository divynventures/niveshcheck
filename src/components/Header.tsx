import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-700 tracking-tight">
          NiveshCheck
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/brokers" className="hover:text-blue-600 transition">
            All Brokers
          </Link>
          <Link href="/discount-stock-brokers" className="hover:text-blue-600 transition">
            Discount
          </Link>
          <Link href="/full-service-stock-brokers" className="hover:text-blue-600 transition">
            Full-Service
          </Link>
          <Link href="/best-stock-brokers-for-beginners" className="hover:text-blue-600 transition">
            For Beginners
          </Link>
          <Link href="/top-stock-brokers-by-clients" className="hover:text-blue-600 transition">
            Top by Clients
          </Link>
        </nav>
      </div>
    </header>
  );
}