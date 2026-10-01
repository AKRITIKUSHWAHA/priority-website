"use client";

import React, { useState } from "react";
import {
  AlertTriangle,
  ShieldCheck,
  Mail,
  Phone,
  FileCheck,
  CheckCircle2,
  XCircle,
  ExternalLink,
  Info,
  UserCheck,
} from "lucide-react";
import { companyInfo } from "@/data/company";

export function RecruitmentAdvisorySection() {
  const [showFullChecklist, setShowFullChecklist] = useState(false);

  return (
    <section id="recruitment" className="bg-[#181824] py-20 relative overflow-hidden border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Urgent Advisory Card */}
        <div className="bg-gradient-to-br from-amber-500/10 via-[#252536] to-[#181824] border-2 border-amber-500/40 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Amber Warning Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="p-3 bg-amber-500/20 text-amber-400 rounded-2xl border border-amber-500/30">
                <AlertTriangle className="w-6 h-6 animate-bounce" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-amber-400 tracking-wider">
                  Official Public Advisory & Notice
                </span>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white">
                  Driver Recruitment & Unauthorized Agency Warning
                </h2>
              </div>
            </div>

            <div className="bg-amber-500/15 text-amber-300 text-xs font-semibold px-4 py-2 rounded-full border border-amber-500/30">
              Zero Application Fees Policy
            </div>
          </div>

          {/* Main Notice Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-start">
            
            {/* Left 7 cols: Key Advisory Points */}
            <div className="lg:col-span-7 space-y-5">
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-medium">
                Priority Hauliers (Private) Limited advises all heavy commercial drivers, job seekers, and the general public that our recruitment is conducted <strong className="text-amber-300">strictly and directly</strong> through official company management.
              </p>

              {/* Crucial Safeguards */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3 bg-red-500/10 p-3.5 rounded-xl border border-red-500/20 text-xs sm:text-sm">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">No 3rd-Party Brokers or Agencies Authorized:</strong>
                    <span className="text-zinc-300">
                      We have NOT authorized any external employment agents, WhatsApp brokers, or recruiters to collect applications or interview candidates on our behalf.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-red-500/10 p-3.5 rounded-xl border border-red-500/20 text-xs sm:text-sm">
                  <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Never Pay Any Recruitment Fees:</strong>
                    <span className="text-zinc-300">
                      Priority Hauliers NEVER charges any application fee, medical test levy, or test-drive fee. Any solicitation of money is fraudulent and must be reported immediately.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3 bg-emerald-500/10 p-3.5 rounded-xl border border-emerald-500/20 text-xs sm:text-sm">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-bold">Only Official Email Channel:</strong>
                    <span className="text-zinc-300">
                      Legitimate CVs and driver credentials must be submitted solely to:{" "}
                      <a
                        href="mailto:hello@priorityhauliers.com"
                        className="text-[#FF4800] hover:underline font-bold"
                      >
                        hello@priorityhauliers.com
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Driver Requirements Box */}
            <div className="lg:col-span-5 bg-[#181824] p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center space-x-2">
                <UserCheck className="w-5 h-5 text-[#FF4800]" />
                <h3 className="font-bold text-sm sm:text-base text-white">
                  Legitimate Driver Qualifications
                </h3>
              </div>
              <p className="text-xs text-zinc-400">
                When vacancies open for regional SADC long-haul rigs (superlinks & tautliners), candidates must hold:
              </p>

              <div className="space-y-2 text-xs text-zinc-300">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4800] shrink-0" />
                  <span>Valid Class 1 / Class 2 Heavy Vehicle Driver's License</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4800] shrink-0" />
                  <span>Defensive Driving Certificate (DDC)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4800] shrink-0" />
                  <span>Valid Medical Certificate of Fitness (including eye exam)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4800] shrink-0" />
                  <span>SADC Cross-Border Passport & Police Clearance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF4800] shrink-0" />
                  <span>Minimum 3 - 5 years verifiable articulated haulage record</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <a
                  href="mailto:hello@priorityhauliers.com?subject=Commercial%20Driver%20Application%20-%20Priority%20Hauliers"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#FF4800] hover:bg-[#E03E00] text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl shadow-lg transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Submit CV to HR Desk</span>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Security Contact */}
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-2">
            <span>
              To report suspicious recruitment solicitations, contact our Marlborough compliance office:
            </span>
            <div className="flex items-center space-x-4">
              <a
                href={`tel:${companyInfo.phone}`}
                className="text-white hover:text-[#FF4800] font-semibold flex items-center space-x-1"
              >
                <Phone className="w-3 h-3 text-[#FF4800]" />
                <span>{companyInfo.phoneDisplay}</span>
              </a>
              <span>•</span>
              <a
                href="mailto:hello@priorityhauliers.com"
                className="text-[#FF4800] hover:underline font-semibold"
              >
                hello@priorityhauliers.com
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
