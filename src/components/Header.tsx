"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          {/* Icon */}
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-700 to-teal-600 flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm tracking-tight">NC</span>
          </div>
          {/* Wordmark */}
          <span className="text-xl font-bold text-gray-900 tracking-tight group-hover:text-blue-700 transition">
            Nivesh<span className="text-teal-600">Check</span>
          </span>
        </Link>

        {/* Desktop Nav */}
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
          <Link href="/faq" className="hover:text-blue-600 transition">
            FAQ
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="flex flex-col px-4 py-3 space-y-3 text-sm font-medium text-gray-700">
            <Link href="/brokers" onClick={() => setIsOpen(false)} className="py-2 hover:text-blue-600">
              All Brokers
            </Link>
            <Link href="/discount-stock-brokers" onClick={() => setIsOpen(false)} className="py-2 hover:text-blue-600">
              Discount Brokers
            </Link>
            <Link href="/full-service-stock-brokers" onClick={() => setIsOpen(false)} className="py-2 hover:text-blue-600">
              Full-Service Brokers
            </Link>
            <Link href="/best-stock-brokers-for-beginners" onClick={() => setIsOpen(false)} className="py-2 hover:text-blue-600">
              Best for Beginners
            </Link>
            <Link href="/top-stock-brokers-by-clients" onClick={() => setIsOpen(false)} className="py-2 hover:text-blue-600">
              Top by Clients
            </Link>
            <Link href="/fno-brokers" onClick={() => setIsOpen(false)} className="py-2 hover:text-blue-600">
              F&O Brokers
            </Link>
            <Link href="/faq" onClick={() => setIsOpen(false)} className="py-2 hover:text-blue-600">
              FAQ
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}