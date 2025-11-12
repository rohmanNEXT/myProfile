"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);

    emailjs
      .sendForm( 
        "YOUR_SERVICE_ID", // Ganti dengan Service ID EmailJS kamu
        "YOUR_TEMPLATE_ID", // Ganti dengan Template ID EmailJS kamu
        formRef.current,
        "YOUR_PUBLIC_KEY" // Ganti dengan Public Key EmailJS kamu
      )
      .then(() => {
        setSubmitted(true);
        setLoading(false);
        formRef.current?.reset();
      })
      .catch((err: string) => {
        console.error(err);
        setLoading(false);
      });
  };

  const openWhatsApp = () => {
    const phoneNumber = "085646831030"; // Nomor WA (format internasional tanpa +)
    const text = encodeURIComponent("Halo, saya ingin menghubungi Anda melalui website.");
    window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-20 px-4 sm:px-8 lg:px-16 relative overflow-hidden"
      id="Contact"
    >
      {/* Background gradient halus */}
     
      <div className="absolute inset-0 backdrop-blur-3xl opacity-20" />

      <h1 className="relative text-4xl sm:text-5xl font-medium pb-12 text-center tracking-tight z-10">
        Kontak saya
      </h1>

      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="relative z-10 w-full max-w-2xl bg-[#1e1b4b]/40 backdrop-blur-xl rounded-3xl border border-[#aaa5fc]/40 shadow-lg p-8 sm:p-10 flex flex-col gap-6 text-[#efeeff]"
      >
        <p className="text-center text-base sm:text-lg font-medium mb-4">
          Tolong kirim pesan <br />
          <span className="">hanya jika sangat penting</span>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <input
            type="text"
            name="user_name"
            placeholder="Nama Anda"
            required
            className="border border-[#8881f8]/40 text-[#efeeff] placeholder-[#cac7fe]/70 rounded-xl px-5 py-4 text-base sm:text-lg bg-[#1e1b4b]/40 focus:outline-none focus:ring-2 focus:ring-[#8881f8]/50 transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email Anda"
            required
            className="border border-[#8881f8]/40 text-[#efeeff] placeholder-[#cac7fe]/70 rounded-xl px-5 py-4 text-base sm:text-lg bg-[#1e1b4b]/40 focus:outline-none focus:ring-2 focus:ring-[#8881f8]/50 transition"
          />
        </div>

        <textarea
          name="message"
          placeholder="Tulis pesan Anda di sini..."
          required
          rows={6}
          className="border border-[#8881f8]/40 text-[#efeeff] placeholder-[#cac7fe]/70 rounded-xl px-5 py-4 text-base sm:text-lg bg-[#1e1b4b]/40 focus:outline-none focus:ring-2 focus:ring-[#8881f8]/50 transition resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="text-[#efeeff] font-semibold py-4 rounded-xl text-lg sm:text-xl bg-[#1e1b4b]/80 hover:bg-[#1e1b4b]/40 transition border border-[#aaa5fc]/40 disabled:opacity-60"
        >
          {loading ? "Mengirim..." : "Kirim Pesan"}
        </button>

        <button
          type="button"
          onClick={openWhatsApp}
          className="text-[#efeeff] font-semibold py-4 rounded-xl text-lg sm:text-xl bg-[#1e1b4b]/20 hover:bg-[#1e1b4b]/80 transition border border-[#aaa5fc]/40"
        >
          Hubungi via WhatsApp
        </button>

        {submitted && (
          <p className="text-green-400 text-center mt-3 font-medium">
            ✅ Pesan berhasil dikirim!
          </p>
        )}
      </form>
    </div>
  );
};

export default Contact;
