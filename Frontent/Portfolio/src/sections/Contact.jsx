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
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-16 px-6 lg:px-12 bg-slate-50 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Contact Me" subtitle="Get In Touch" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Contact Details Card */}
          <div className="md:col-span-2 space-y-4">
            <Card className="flex flex-col gap-6 p-6 md:p-8 bg-white hover:border-blue-500/20">
              <h3 className="text-lg font-bold text-slate-800">Recruiter Quick-Access</h3>
              
              <div className="flex gap-4 items-center">
                <span className="p-3 rounded-lg bg-blue-50 border border-blue-100 text-blue-600">
                  <Mail size={18} />
                </span>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Direct Email</h4>
                  <a href={`mailto:${portfolioData.email}`} className="text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors">
                    {portfolioData.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <span className="p-3 rounded-lg bg-emerald-50 border border-emerald-100 text-emerald-600">
                  <MapPin size={18} />
                </span>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Location</h4>
                  <span className="text-sm font-semibold text-slate-700">
                    {portfolioData.location}
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-center">
                <span className="p-3 rounded-lg bg-purple-50 border border-purple-100 text-purple-600">
                  <Phone size={18} />
                </span>
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Telephone</h4>
                  <span className="text-sm font-semibold text-slate-700 font-mono">
                    +91 98765 43210
                  </span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <Card className="p-6 md:p-8 bg-white hover:border-blue-500/20">
              <form onSubmit={handleSubmit} className="space-y-4">
                <InputField
                  label="Full Name"
                  placeholder="Rohit Mahajan"
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
                  placeholder="Discussing backend roles or internships..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  error={errors.message}
                />

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full flex justify-center items-center gap-2 mt-2 py-2.5 uppercase font-semibold text-xs tracking-wider"
                  disabled={loading}
                >
                  {loading ? (
                    "Sending message..."
                  ) : submitted ? (
                    "Message Sent Successfully!"
                  ) : (
                    <>
                      Send Message <Send size={14} />
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
export default Contact;
