import { useState } from "react";
import { useTranslation } from "react-i18next";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "emailjs-com";

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // "sending" | "success" | "error"

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      from_name: `${formData.firstName} ${formData.lastName}`,
      email: formData.email,
      phone: formData.phone || "N/A",
      company: formData.company || "N/A",
      message: formData.message,
      reply_to: formData.email,
    };

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        templateParams,
        "YOUR_PUBLIC_KEY"
      )
      .then(() => {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          message: "",
        });
        setTimeout(() => setStatus(null), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus(null), 4000);
      });
  };

  const contactInfo = [
    {
      icon: <FaPhone size={20} />,
      title: t("contact.info.phoneTitle"),
      value: t("contact.info.phoneValue"),
    },
    {
      icon: <FaEnvelope size={20} />,
      title: t("contact.info.emailTitle"),
      value: t("contact.info.emailValue"),
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: t("contact.info.addressTitle"),
      value: t("contact.info.addressValue"),
    },
  ];

  return (
    <section id="contact" className="flex items-center justify-center py-28">
      <RevealOnScroll>
        <div className="w-4/5 max-w-7xl mx-auto px-4">
          {/* Header */}
          <h2 className="text-5xl font-bold pb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {t("contact.title")}
          </h2>
          <p className="text-gray-400 text-center mb-12">
            {t("contact.subtitle")}
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* First Name */}
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={t("contact.firstName")}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
              {/* Last Name */}
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={t("contact.lastName")}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.email")}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
              {/* Phone */}
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("contact.phone")}
                className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition"
              />
            </div>

            {/* Company */}
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder={t("contact.company")}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition mb-6"
            />

            {/* Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("contact.message")}
              required
              rows={6}
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition resize-none mb-6"
            />

            {/* Submit button + status */}
            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold py-3 px-8 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? t("contact.sending")
                  : t("contact.send")}
              </button>
              {status === "success" && (
                <span className="text-green-400 text-sm">
                  {t("contact.success")}
                </span>
              )}
              {status === "error" && (
                <span className="text-red-400 text-sm">
                  {t("contact.error")}
                </span>
              )}
            </div>
          </form>

          {/* Contact info blocks */}
          <div className="flex flex-col md:flex-row justify-between gap-8 border-t border-white/10 pt-10">
            {contactInfo.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="text-cyan-400">{item.icon}</div>
                <div>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
