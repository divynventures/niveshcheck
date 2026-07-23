import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-4">NiveshCheck</h3>
            <p className="text-sm leading-relaxed">
              Directory of SEBI registered stock brokers in India. 
              Helping users check and discover brokers easily.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/brokers" className="hover:text-white transition">
                  All Brokers
                </Link>
              </li>
              <li>
                <Link href="/discount-stock-brokers" className="hover:text-white transition">
                  Discount Brokers
                </Link>
              </li>
              <li>
                <Link href="/full-service-stock-brokers" className="hover:text-white transition">
                  Full-Service Brokers
                </Link>
              </li>
              <li>
                <Link href="/best-stock-brokers-for-beginners" className="hover:text-white transition">
                  Best for Beginners
                </Link>
              </li>
              <li>
                <Link href="/top-stock-brokers-by-clients" className="hover:text-white transition">
                  Top by Active Clients
                </Link>
              </li>
              <li>
                <Link href="/best/mumbai" className="hover:text-white transition">
                  Best Brokers in Mumbai
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/disclaimer" className="hover:text-white transition">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition">
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
          <p className="mb-2">
            This directory lists publicly available SEBI registered stock brokers for informational purposes only.
          </p>
          <p>
            © 2026 NiveshCheck. Not affiliated with SEBI.
          </p>
        </div>
      </div>
    </footer>
  );
}