import React, { useState } from "react";
import { portfolioData } from "../data/portfolioData";
import { Mail, MapPin, Phone, Send } from "lucide-react";
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
    <section id="contact" className="w-full bg-[#FEFBF0] py-24 border-b border-[#E0DCBA] relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-6">
          <div className="space-y-3 text-left">
            <span className="font-mono text-xs uppercase tracking-widest text-[#B45309] font-semibold block">
              07
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-slate-900 leading-tight">
              Contact
            </h2>
            <p className="text-slate-500 max-w-xl text-xs md:text-sm leading-relaxed pt-1">
              Open for backend engineering internships, AI research initiatives, and technical discussions.
            </p>
          </div>
          
          {/* Ornamental Accent */}
          <div className="flex items-center justify-center shrink-0 md:pt-4">
            <div className="w-10 h-10 rounded-full border border-[#B45309]/30 flex items-center justify-center">
              <div className="w-2.5 h-2.5 rounded-full bg-[#B45309]" />
            </div>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left Column: Direct channels (ACCESS CHANNELS Folder Card) */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div className="flex flex-col h-full justify-between">
              
              <div className="flex flex-col">
                {/* Folder Tab */}
                <div className="flex">
                  <div className="px-4 py-1.5 text-[9px] font-mono font-bold tracking-widest text-slate-700 bg-[#FEFBF0] border border-slate-800 border-b-transparent rounded-t-[10px] z-10 translate-y-[1px] select-none uppercase">
                    Access Channels
                  </div>
                </div>
                {/* Double-bordered Frame Container */}
                <div className="border border-slate-800 bg-[#EAE6D5]/40 rounded-2xl p-2.5 flex-1">
                  <div className="border border-slate-800 rounded-xl bg-white p-6 h-full flex flex-col justify-between divide-y divide-slate-100">
                    
                    {/* Email */}
                    <div className="pb-5 flex gap-4 items-start">
                      <Mail size={16} className="text-[#B45309] mt-1 shrink-0" />
                      <div>
                        <h4 className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                          SMTP Address
                        </h4>
                        <a
                          href={`mailto:${portfolioData.email}`}
                          className="text-sm md:text-base font-bold text-slate-900 hover:text-[#B45309] transition-colors duration-300"
                        >
                          {portfolioData.email}
                        </a>
                      </div>
                    </div>

                    {/* Location */}
                    <div className="py-5 flex gap-4 items-start">
                      <MapPin size={16} className="text-[#B45309] mt-1 shrink-0" />
                      <div>
                        <h4 className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                          Geographic Node
                        </h4>
                        <span className="text-sm md:text-base font-bold text-slate-900">
                          {portfolioData.location}
                        </span>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="pt-5 flex gap-4 items-start">
                      <Phone size={16} className="text-[#B45309] mt-1 shrink-0" />
                      <div>
                        <h4 className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-bold mb-1">
                          Direct Voice
                        </h4>
                        <span className="text-sm md:text-base font-mono font-bold text-slate-900">
                          +91 7020803789
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              {/* Secure connection logs banner */}
              <div className="mt-6 p-4 bg-slate-50 border border-slate-200 font-mono text-[10px] text-slate-400 leading-relaxed font-bold rounded-lg uppercase tracking-wider">
                // SECURE CONNECTION LINKED.<br />
                // INPUT SUBMISSIONS ARE DELIVERED DIRECTLY TO MAIN ENDPOINTS.
              </div>
            </div>
          </div>

          {/* Right Column: Custom form (TRANSMISSION TERMINAL Folder Card) */}
          <div className="lg:col-span-7 flex flex-col text-left">
            {/* Folder Tab */}
            <div className="flex">
              <div className="px-4 py-1.5 text-[9px] font-mono font-bold tracking-widest text-slate-700 bg-[#FEFBF0] border border-slate-800 border-b-transparent rounded-t-[10px] z-10 translate-y-[1px] select-none uppercase">
                Transmission Terminal
              </div>
            </div>
            {/* Double-bordered Frame Container */}
            <div className="border border-slate-800 bg-[#EAE6D5]/40 rounded-2xl p-2.5 flex-1">
              <div className="border border-slate-800 rounded-xl bg-white p-6 md:p-8 h-full">

                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Name Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                      Sender Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Hiring Manager"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-transparent border-b border-slate-250 focus:border-[#B45309] focus:outline-none py-2 px-0 text-sm text-slate-900 placeholder-slate-400 rounded-none transition-colors duration-300"
                    />
                    {errors.name && (
                      <span className="font-mono text-[10px] text-red-500 mt-1 font-bold">{errors.name}</span>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                      SMTP Return Address *
                    </label>
                    <input
                      type="email"
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-transparent border-b border-slate-250 focus:border-[#B45309] focus:outline-none py-2 px-0 text-sm text-slate-900 placeholder-slate-400 rounded-none transition-colors duration-300"
                    />
                    {errors.email && (
                      <span className="font-mono text-[10px] text-red-500 mt-1 font-bold">{errors.email}</span>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                      Payload Message *
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Details regarding roles, architectures, or opportunities..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-transparent border-b border-slate-250 focus:border-[#B45309] focus:outline-none py-2 px-0 text-sm text-slate-900 placeholder-slate-400 rounded-none transition-colors duration-300 resize-none"
                    />
                    {errors.message && (
                      <span className="font-mono text-[10px] text-red-500 mt-1 font-bold">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={loading}
                    className="w-full bg-slate-900 text-white font-mono text-xs uppercase tracking-wider py-3.5 rounded-lg flex items-center justify-center gap-2 hover:bg-[#B45309] focus:bg-[#B45309] transition-all duration-300 cursor-pointer disabled:opacity-50"
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

        </div>

      </div>
    </section>
  );
};

export default Contact;
