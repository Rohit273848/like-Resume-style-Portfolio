import React, { useState } from "react";
import { SectionHeading } from "../components/ui/SectionHeading";
import { Card } from "../components/ui/Card";
import { InputField } from "../components/ui/InputField";
import { TextArea } from "../components/ui/TextArea";
import { Button } from "../components/ui/Button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

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
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-6 lg:px-16 border-t border-slate-900 bg-slate-950">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Contact Me" subtitle="Get In Touch" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Details Card */}
          <div className="md:col-span-2 space-y-4">
            <Card className="flex flex-col gap-6 p-8 bg-slate-900/40 border-slate-800">
              <h3 className="text-xl font-bold text-white mb-2">Connect details</h3>
              
              <div className="flex gap-4 items-center">
                <span className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Mail size={18} />
                </span>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email Me</h4>
                  <a href={`mailto:${portfolioData.email}`} className="text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors">
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <span className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <MapPin size={18} />
                </span>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Location</h4>
                  <span className="text-sm font-semibold text-slate-200">
                    {portfolioData.location}
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <span className="p-3 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400">
                  <Phone size={18} />
                </span>
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500">Call Me</h4>
                  <span className="text-sm font-semibold text-slate-200">
                    +1 (555) 019-2834
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <Card className="p-8 bg-slate-900/40 border-slate-800">
              <form onSubmit={handleSubmit} className="space-y-4">
                <InputField
                  label="Full Name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  error={errors.name}
                />

                <InputField
                  label="Email Address"
                  type="email"
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                />

                <TextArea
                  label="Your Message"
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  error={errors.message}
                />

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full flex justify-center items-center gap-2 mt-2"
                  disabled={loading}
                >
                  {loading ? (
                    "Sending message..."
                  ) : submitted ? (
                    "Message Sent Successfully!"
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
