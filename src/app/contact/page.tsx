/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import axios from "axios";
import ShimmerButton from "../(components)/Button";
import { FormErrors, Status } from "../../types/contact.type";

import { SocialIcon } from "react-social-icons";
import {
  GitHubLink,
  InstagramLink,
  LinkedInLink
} from "../../utils/sociallink.util";

import PageWrapper from "../(components)/PageWrapper";

export default function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (name: string, email: string, message: string) => {
    const newErrors: FormErrors = {};

    if (!name.trim()) newErrors.name = "name is required";
    else if (name.trim().length < 2)
      newErrors.name = "name must be at least 2 characters";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) newErrors.email = "email is required";
    else if (!emailRegex.test(email))
      newErrors.email = "please enter a valid email";

    if (!message.trim()) newErrors.message = "message is required";
    else if (message.trim().length < 10)
      newErrors.message = "message must be at least 10 characters";

    return newErrors;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");
    setErrors({});

    const form = e.currentTarget;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const validationErrors = validateForm(name, email, message);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    try {
      // ✅ FIXED: FormData (correct Web3Forms format)
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
    <PageWrapper>
      <main className="min-h-screen bg-black flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md flex flex-col gap-8">
            <div className="flex flex-col items-center gap-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
              contact
            </p>
          {/* HEADER */}
            <h1 className="text-white text-2xl uppercase tracking-widest">
              get in touch
            </h1>
            
            {/* Divider with label */}
            <div className="flex items-center gap-4 w-full">
              <div className="flex-1 h-px bg-stone-800" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-stone-400">
                find me on
              </span>
              <div className="flex-1 h-px bg-stone-800" />
            </div>

            <div className="flex justify-center gap-2">
              {socials.map((s) => (
                <SocialIcon
                  key={s.label}
                  url={s.url}
                  target="_blank"
                  style={{ height: 40, width: 40 }}
                  bgColor="transparent"
                />
              ))}
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={onSubmit} className="flex flex-col gap-4">
             <div className="flex flex-col gap-1.5">
            <label className="text-[9px] uppercase tracking-[0.3em] text-stone-400">
                name
              </label>
            {/* NAME */}
            <input
              name="name"
              placeholder="your name"
              className="bg-transparent border border-gray-800 px-4 py-3 text-white"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name}</p>
            )}
</div>
            {/* EMAIL */}
            
            <div className="flex flex-col gap-1.5">
            <label className="text-[9px] uppercase tracking-[0.3em] text-stone-400">
                Email
              </label>
            <input
              name="email"
              placeholder="your email"
              className="bg-transparent border border-gray-800 px-4 py-3 text-white"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email}</p>
            )}
            </div>

            {/* MESSAGE */}
            
            <div className="flex flex-col gap-1.5">
            <label className="text-[9px] uppercase tracking-[0.3em] text-stone-400">
                Message
              </label>
            <textarea
              name="message"
              placeholder="your message"
              rows={5}
              className="bg-transparent border border-gray-800 px-4 py-3 text-white"
            />
            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message}</p>
            )}

            </div>
            {/* BUTTON */}
            <ShimmerButton type="submit" disabled={status === "loading"}>
              {status === "loading" ? "sending..." : "send message"}
            </ShimmerButton>

            {/* STATUS */}
            {status === "success" && (
              <p className="text-green-400 text-xs text-center">
                message sent successfully 🚀
              </p>
            )}

            {status === "error" && (
              <p className="text-red-500 text-xs text-center">
                {errorMsg}
              </p>
            )}
          </form>
        </div>
      </main>
    </PageWrapper>
  );
}