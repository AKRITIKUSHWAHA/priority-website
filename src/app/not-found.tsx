import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ArrowLeft, Search, Truck, Phone, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-36 pb-20 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Animated Brand Badge & 404 Number */}
        <div className="relative inline-block">
          <div className="text-8xl sm:text-9xl font-extrabold text-navy-900 tracking-tighter opacity-15">
            404
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-accent-500 rounded-2xl flex items-center justify-center text-white text-4xl font-extrabold shadow-xl shadow-accent-500/30 transform -skew-x-12 animate-pulse">
              P
            </div>
          </div>
        </div>

        {/* Text Copy */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-lg max-w-lg mx-auto leading-relaxed">
            The shipment path you are looking for has been rerouted or does not exist. Let&apos;s get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Button href="/" variant="primary" size="lg" className="w-full sm:w-auto">
            <Home className="w-5 h-5 mr-2" />
            Back to Homepage
          </Button>
          <Button href="/track" variant="outline" size="lg" className="w-full sm:w-auto">
            <Truck className="w-5 h-5 mr-2 text-accent-500" />
            Track Shipment
          </Button>
        </div>

        {/* Quick Links */}
        <div className="pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-600">
          <Link
            href="/services"
            className="p-4 rounded-xl border border-slate-200 hover:border-accent-500 hover:text-accent-600 transition-colors flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            Our Services
          </Link>
          <Link
            href="/contact"
            className="p-4 rounded-xl border border-slate-200 hover:border-accent-500 hover:text-accent-600 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Contact Dispatch
          </Link>
          <Link
            href="/blog"
            className="p-4 rounded-xl border border-slate-200 hover:border-accent-500 hover:text-accent-600 transition-colors flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Industry News
          </Link>
        </div>
      </div>
    </div>
  );
}
