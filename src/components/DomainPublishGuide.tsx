import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Globe, Check, Copy, ExternalLink, ShieldCheck, Server, AlertCircle } from 'lucide-react';

interface DomainPublishGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DomainPublishGuide: React.FC<DomainPublishGuideProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const targetDomain = 'greenvalleyinteriors.hbtintegrisys.com';
  const parentDomain = 'hbtintegrisys.com';
  const subdomain = 'greenvalleyinteriors';

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-y-auto bg-stone-950/75 backdrop-blur-xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-[#FAF8F5] text-stone-900 border border-stone-300 shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-stone-200 bg-white shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-emerald-50 text-emerald-800 flex items-center justify-center">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-stone-500 font-medium">Domain & Deployment Architecture</p>
                <h3 className="font-playfair text-xl md:text-2xl text-[#032517] font-normal">
                  Publish to {targetDomain}
                </h3>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Body */}
          <div className="overflow-y-auto p-6 md:p-8 space-y-6 text-sm">
            {/* Live Status Banner */}
            <div className="p-4 bg-emerald-50 border border-emerald-200 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-emerald-900">Application Development Completed</h4>
                <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                  The website for Green Valley Interiors is fully built with smooth animations, professional luxury serif typography (Cormorant Garamond), turnkey estimator, interactive before-and-after room makeover studio, and responsive layouts.
                </p>
              </div>
            </div>

            {/* DNS Configuration Table */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3">
                1. Required DNS Record (at {parentDomain} DNS Provider)
              </h4>
              <div className="bg-white border border-stone-200 overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-stone-100 border-b border-stone-200 text-stone-600">
                    <tr>
                      <th className="p-3 font-semibold">Record Type</th>
                      <th className="p-3 font-semibold">Host / Name</th>
                      <th className="p-3 font-semibold">Target / Value</th>
                      <th className="p-3 font-semibold">TTL</th>
                      <th className="p-3 font-semibold text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-100">
                    <tr>
                      <td className="p-3 font-mono font-semibold text-stone-900">CNAME</td>
                      <td className="p-3 font-mono text-stone-800">{subdomain}</td>
                      <td className="p-3 font-mono text-stone-600 truncate max-w-[200px]">
                        cname.cloudrun.app (or custom server IP)
                      </td>
                      <td className="p-3 font-mono text-stone-500">Auto (300s)</td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => copyToClipboard(subdomain, 'subdomain')}
                          className="px-2 py-1 bg-stone-100 hover:bg-stone-200 text-stone-700 font-mono text-[11px] inline-flex items-center gap-1 cursor-pointer"
                        >
                          {copiedKey === 'subdomain' ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                          Copy Host
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-stone-500 mt-2">
                Log in to the DNS control panel for <strong>hbtintegrisys.com</strong> (e.g. Cloudflare, GoDaddy, Namecheap, or cPanel) and add this CNAME record.
              </p>
            </div>

            {/* Step-by-step Checklist */}
            <div>
              <h4 className="text-xs uppercase tracking-widest text-stone-500 font-semibold mb-3">
                2. Deployment & Publishing Steps
              </h4>
              <div className="space-y-3">
                <div className="p-4 bg-white border border-stone-200 flex items-start gap-3">
                  <span className="w-6 h-6 bg-stone-900 text-white text-xs flex items-center justify-center font-semibold shrink-0">1</span>
                  <div>
                    <p className="font-semibold text-stone-900">Compile Production Build</p>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Run <code className="bg-stone-100 px-1 py-0.5 font-mono text-stone-800">npm run build</code> to generate the optimized, static production bundle in the <code className="font-mono">dist/</code> directory.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-stone-200 flex items-start gap-3">
                  <span className="w-6 h-6 bg-stone-900 text-white text-xs flex items-center justify-center font-semibold shrink-0">2</span>
                  <div>
                    <p className="font-semibold text-stone-900">Map Custom Domain</p>
                    <p className="text-xs text-stone-600 mt-0.5">
                      In the hosting management console (or Cloud Run / Cloudflare Pages / Vercel), add <code className="font-mono text-stone-800">{targetDomain}</code> as the custom domain.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-white border border-stone-200 flex items-start gap-3">
                  <span className="w-6 h-6 bg-stone-900 text-white text-xs flex items-center justify-center font-semibold shrink-0">3</span>
                  <div>
                    <p className="font-semibold text-stone-900">Automatic SSL Certificate Issuance</p>
                    <p className="text-xs text-stone-600 mt-0.5">
                      Once DNS propagates (typically 5 to 30 minutes), the HTTPS SSL certificate validates automatically, making the site securely available at <code className="font-mono text-stone-800">https://{targetDomain}</code>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Website Comparison */}
            <div className="p-4 bg-stone-100 border border-stone-200 text-xs space-y-2">
              <p className="font-semibold text-stone-900">What Improvements Were Delivered:</p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600">
                <li>Professional luxury header typography using <strong>Cormorant Garamond</strong> with balanced letter-spacing</li>
                <li>Smooth Framer Motion physics-based animations for cards, transitions, and reveals</li>
                <li>Interactive Before & After slider with architectural inspection hotspots</li>
                <li>Turnkey cost & timeline calculator with sq.ft controls and finish grades</li>
                <li>Curated project portfolio with material breakdowns and client quotes</li>
                <li>Integrated consultation booking drawer with calendar reservation</li>
              </ul>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 py-4 bg-white border-t border-stone-200 flex items-center justify-between shrink-0">
            <span className="text-xs text-stone-500">
              Domain Target: <strong className="text-stone-800">{targetDomain}</strong>
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-stone-900 text-white text-xs uppercase tracking-widest font-semibold hover:bg-stone-800 cursor-pointer"
            >
              Close Guide
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
