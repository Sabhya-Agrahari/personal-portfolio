/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios from "axios";
import { SocialIcon } from "react-social-icons";
import { Sparkles, Mail, Send } from "lucide-react";

import ShimmerButton from "../(components)/Button";

import { FormErrors, Status } from "../../types/contact.type";

import {
  GitHubLink,
  InstagramLink,
  LinkedInLink,
} from "../../utils/sociallink.util";

export default function ContactPage() {

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (
    name: string,
    email: string,
    message: string
  ) => {

    const newErrors: FormErrors = {};

    if (!name.trim()) {
      newErrors.name = "name is required";
    } else if (name.trim().length < 2) {
      newErrors.name = "name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = "email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "please enter a valid email";
    }

    if (!message.trim()) {
      newErrors.message = "message is required";
    } else if (message.trim().length < 10) {
      newErrors.message = "message must be at least 10 characters";
    }

    return newErrors;
  };

  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    setStatus("loading");
    setErrorMsg("");
    setErrors({});

    const form = e.currentTarget;

    const name = (
      form.elements.namedItem("name") as HTMLInputElement
    ).value;

    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    ).value;

    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const validationErrors = validateForm(
      name,
      email,
      message
    );

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    try {

      const formData = new FormData();

      formData.append(
        "access_key",
        process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY!
      );

      formData.append("name", name);
      formData.append("email", email);
      formData.append("message", message);

      const { data } = await axios.post(
        "https://api.web3forms.com/submit",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.message || "Something went wrong");
      }

    } catch (err: any) {

      setStatus("error");
      setErrorMsg(err.message || "Network error");

    }
  };

  const socials = [
    { url: GitHubLink, label: "github" },
    { url: LinkedInLink, label: "linkedin" },
    { url: InstagramLink, label: "instagram" },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-4 md:px-8 py-14"
    >
      <div className="max-w-5xl mx-auto">
        {/* TOP SPACE */}
        <div className="flex items-center justify-between mb-10"></div>

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">

          {/* LEFT CARD */}
          <div className="md:col-span-4 bg-[#080808] border border-white/10 rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:border-white/20">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <h1 className="text-xl font-bold tracking-wide">
                  CONTACT
                </h1>
              </div>

              <p className="text-3xl md:text-4xl font-light leading-tight">
                Let&apos;s build <br />
                something <span className="text-white font-medium">great.</span>
              </p>

              <p className="text-sm text-gray-400 leading-7 mt-6">
                Have a project idea, collaboration or opportunity?
                Feel free to connect with me through social
                platforms or send a direct message.
              </p>
            </div>

            {/* SOCIALS */}
            <div className="mt-10">
              <p className="text-xs tracking-[0.3em] text-gray-500 mb-5">
                STAY WITH ME
              </p>

              <div className="flex gap-3">
                {socials.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-full border border-white/10 hover:border-white/30 transition-all duration-300 overflow-hidden hover:scale-110"
                  >
                    <SocialIcon
                      url={s.url}
                      target="_blank"
                      style={{ height: 42, width: 42 }}
                      bgColor="transparent"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM CARD */}
          <div className="md:col-span-8 bg-[#080808] border border-white/10 rounded-3xl p-7 md:p-10 transition-all duration-300 hover:border-white/20">
            <div className="flex items-center gap-3 mb-8">
              <h2 className="text-xs tracking-[0.3em] text-gray-500">
                GET IN TOUCH
              </h2>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold tracking-wide mb-8">
              Send a Message
            </h3>

            {/* FORM */}
            <form onSubmit={onSubmit} className="flex flex-col gap-6">
              {/* NAME */}
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-[0.3em] text-gray-500 uppercase">
                  Name
                </label>
                <input
                  name="name"
                  placeholder="Your name"
                  className="
                    bg-black
                    border border-white/10
                    rounded-xl
                    px-5 py-3.5
                    text-white
                    text-sm
                    outline-none
                    focus:border-white/30
                    transition-all duration-300
                    hover:border-white/20
                  "
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* EMAIL */}
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-[0.3em] text-gray-500 uppercase">
                  Email
                </label>
                <input
                  name="email"
                  placeholder="Your email"
                  className="
                    bg-black
                    border border-white/10
                    rounded-xl
                    px-5 py-3.5
                    text-white
                    text-sm
                    outline-none
                    focus:border-white/30
                    transition-all duration-300
                    hover:border-white/20
                  "
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* MESSAGE */}
              <div className="flex flex-col gap-2">
                <label className="text-xs tracking-[0.3em] text-gray-500 uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  placeholder="Write your message..."
                  rows={5}
                  className="
                    bg-black
                    border border-white/10
                    rounded-xl
                    px-5 py-3.5
                    text-white
                    text-sm
                    outline-none
                    resize-none
                    focus:border-white/30
                    transition-all duration-300
                    hover:border-white/20
                  "
                />
                {errors.message && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* BUTTON */}
              <div className="pt-4">
                <ShimmerButton
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full md:w-auto"
                >
                  {status === "loading" ? (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4 animate-pulse" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send Message
                    </span>
                  )}
                </ShimmerButton>
              </div>

              {/* STATUS MESSAGES */}
              {status === "success" && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-3 mt-2">
                  <p className="text-green-400 text-sm text-center">
                    ✓ Message sent successfully! I&apos;ll get back to you soon.
                  </p>
                </div>
              )}

              {status === "error" && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3 mt-2">
                  <p className="text-red-400 text-sm text-center">
                    ✗ {errorMsg || "Failed to send message. Please try again."}
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}