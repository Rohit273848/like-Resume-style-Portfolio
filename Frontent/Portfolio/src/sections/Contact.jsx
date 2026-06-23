import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Mail, MapPin, Phone, Send, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/Button";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1200);
  };

  return (
    <section id="contact" className="w-full bg-white relative py-20 px-8 lg:px-20 border-b border-slate-200">
      <div className="max-w-5xl mx-auto">

        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-2">
            07 // Contact Channel
          </span>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
            Initiate Contact
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            Open for backend engineering internships, AI research initiatives, and technical discussions.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

          {/* Left Column: Direct channels */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-6">
                Recruiter Access Points
              </span>

              <div className="flex flex-col border-t border-slate-200">
                {/* Email */}
                <div className="py-5 border-b border-slate-200 flex gap-4 items-start">
                  <Mail size={16} className="text-blue-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
                      SMTP Address
                    </h4>
                    <a
                      href={`mailto:${portfolioData.email}`}
                      className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors"
                    >
                      {portfolioData.email}
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="py-5 border-b border-slate-200 flex gap-4 items-start">
                  <MapPin size={16} className="text-blue-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
                      Geographic Node
                    </h4>
                    <span className="text-sm font-semibold text-slate-900">
                      {portfolioData.location} (Open to Relocation)
                    </span>
                  </div>
                </div>

                {/* Phone */}
                <div className="py-5 border-b border-slate-200 flex gap-4 items-start">
                  <Phone size={16} className="text-blue-600 mt-1 shrink-0" />
                  <div>
                    <h4 className="font-mono text-[9px] uppercase tracking-widest text-slate-400">
                      Direct Voice
                    </h4>
                    <span className="text-sm font-mono font-semibold text-slate-900">
                      +91 7020803789
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 lg:mt-0 p-4 bg-slate-50 border border-slate-200 font-mono text-[10px] text-slate-500 leading-relaxed">
              // SECURE CONNECTION LINKED.<br />
              // INPUT SUBMISSIONS ARE DELIVERED DIRECTLY TO MAIN ENDPOINTS.
            </div>
          </div>

          {/* Right Column: Custom form (Bottom-border inputs only) */}
          <div className="lg:col-span-7">
            <span className="font-mono text-xs uppercase tracking-widest text-slate-400 block mb-6">
              Transmission Terminal
            </span>

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Name Input */}
              <div className="flex flex-col gap-1">
                <label className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                  Sender Name *
                </label>
                <input
                  type="text"
                  placeholder="e.g. Hiring Manager"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-transparent border-b border-slate-300 focus:border-blue-600 focus:outline-none py-2 px-0 text-sm text-slate-900 placeholder-slate-400 rounded-none transition-colors"
                />
                {errors.name && (
                  <span className="font-mono text-[9px] text-red-500 mt-1">{errors.name}</span>
                )}
              </div>

              {/* Email Input */}
              <div className="flex flex-col gap-1">
                <label className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                  SMTP Return Address *
                </label>
                <input
                  type="email"
                  placeholder="name@organization.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-transparent border-b border-slate-300 focus:border-blue-600 focus:outline-none py-2 px-0 text-sm text-slate-900 placeholder-slate-400 rounded-none transition-colors"
                />
                {errors.email && (
                  <span className="font-mono text-[9px] text-red-500 mt-1">{errors.email}</span>
                )}
              </div>

              {/* Message Input */}
              <div className="flex flex-col gap-1">
                <label className="font-mono text-[9px] uppercase tracking-widest text-slate-500">
                  Payload Message *
                </label>
                <textarea
                  rows={4}
                  placeholder="Details regarding roles, architectures, or opportunities..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-transparent border-b border-slate-300 focus:border-blue-600 focus:outline-none py-2 px-0 text-sm text-slate-900 placeholder-slate-400 rounded-none transition-colors resize-none"
                />
                {errors.message && (
                  <span className="font-mono text-[9px] text-red-500 mt-1">{errors.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                disabled={loading}
                className="w-full bg-slate-900 text-white font-mono text-xs uppercase tracking-wider py-3 rounded-none flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors"
              >
                {loading ? (
                  "Sending Payload..."
                ) : submitted ? (
                  "Payload Transmitted Successfully!"
                ) : (
                  <>
                    Transmit Message <Send size={12} />
                  </>
                )}
              </Button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
