import React from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { Button } from "../components/ui/Button";
import { certifications } from "../data/certifications";
import { Award, ExternalLink, Calendar } from "lucide-react";

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 lg:px-16 border-t border-slate-900 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Certifications" subtitle="Credentials" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="flex flex-col h-full bg-slate-900/40">
              <div className="flex gap-3 items-center mb-4">
                <span className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Award size={18} />
                </span>
                <div>
                  <h3 className="font-bold text-white leading-snug">{cert.title}</h3>
                  <p className="text-xs text-slate-400 font-semibold tracking-wide uppercase mt-0.5">{cert.issuer}</p>
                </div>
              </div>

              <div className="text-xs text-slate-400 space-y-1 mb-6 mt-auto">
                <p className="flex items-center gap-1.5 font-medium">
                  <Calendar size={12} /> Obtained: {cert.date}
                </p>
                <p className="font-mono text-[10px] text-slate-500">ID: {cert.credentialId}</p>
              </div>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-auto block"
              >
                <Button variant="outline" size="sm" className="w-full text-xs">
                  Verify Credentials <ExternalLink size={12} className="ml-1.5" />
                </Button>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
